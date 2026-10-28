import { Pool as NeonPool, neonConfig } from "@neondatabase/serverless";
import ws from "ws";

neonConfig.webSocketConstructor = ws;

const SOURCE_URL = process.env.SOURCE_DATABASE_URL || "";
const TARGET_URL = process.env.DATABASE_URL || "";

const SKIP_TABLES = new Set(["ai_chats", "ai_messages"]);

async function migrate() {
  console.log("=================================================");
  console.log("   STUDY LPU — FULL DATABASE MIGRATION SCRIPT    ");
  console.log("=================================================");

  const sourcePool = new NeonPool({ connectionString: SOURCE_URL });
  const targetPool = new NeonPool({ connectionString: TARGET_URL });

  try {
    // 1. Ensure all schema additions from bootstrap exist on target
    console.log("\n[1/6] Running schema bootstrap on target...");
    
    // Ensure pgcrypto extension for gen_random_uuid()
    await targetPool.query(`CREATE EXTENSION IF NOT EXISTS "pgcrypto";`);

    // Ensure all users columns
    await targetPool.query(`
      ALTER TABLE users 
      ADD COLUMN IF NOT EXISTS google_id TEXT,
      ADD COLUMN IF NOT EXISTS reset_token TEXT,
      ADD COLUMN IF NOT EXISTS reset_token_expires TIMESTAMP,
      ADD COLUMN IF NOT EXISTS created_at TIMESTAMP DEFAULT NOW(),
      ADD COLUMN IF NOT EXISTS silver_coins INTEGER NOT NULL DEFAULT 0,
      ADD COLUMN IF NOT EXISTS gold_coins INTEGER NOT NULL DEFAULT 0,
      ADD COLUMN IF NOT EXISTS roles TEXT[] DEFAULT ARRAY['USER']::TEXT[],
      ADD COLUMN IF NOT EXISTS is_shadow_banned BOOLEAN DEFAULT FALSE,
      ADD COLUMN IF NOT EXISTS trust_level TEXT DEFAULT 'USER',
      ADD COLUMN IF NOT EXISTS phone_number TEXT,
      ADD COLUMN IF NOT EXISTS token_version INTEGER NOT NULL DEFAULT 1,
      ADD COLUMN IF NOT EXISTS daily_score_accumulated REAL DEFAULT 0,
      ADD COLUMN IF NOT EXISTS daily_score_date TIMESTAMP;
    `);

    // Ensure resources columns
    await targetPool.query(`
      ALTER TABLE resources 
      ADD COLUMN IF NOT EXISTS price_gold INTEGER DEFAULT 0,
      ADD COLUMN IF NOT EXISTS uploaded_by INTEGER DEFAULT 1;
    `);

    // Ensure contact_messages columns
    await targetPool.query(`
      ALTER TABLE contact_messages 
      ADD COLUMN IF NOT EXISTS ticket_id TEXT,
      ADD COLUMN IF NOT EXISTS priority TEXT DEFAULT 'normal',
      ADD COLUMN IF NOT EXISTS status TEXT DEFAULT 'new',
      ADD COLUMN IF NOT EXISTS updated_at TIMESTAMP DEFAULT NOW(),
      ADD COLUMN IF NOT EXISTS secret_token TEXT;
    `);

    // Create remaining core tables on target
    await targetPool.query(`
      CREATE TABLE IF NOT EXISTS orders (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        user_id INTEGER NOT NULL,
        amount_inr INTEGER NOT NULL,
        gold_coins INTEGER NOT NULL,
        utr TEXT,
        screenshot_url TEXT,
        cashfree_order_id TEXT,
        payment_session_id TEXT,
        payment_id TEXT,
        status TEXT NOT NULL DEFAULT 'PENDING',
        created_at TIMESTAMP NOT NULL DEFAULT NOW()
      );

      CREATE TABLE IF NOT EXISTS ledger (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        user_id INTEGER NOT NULL,
        type TEXT NOT NULL,
        currency TEXT NOT NULL,
        source TEXT NOT NULL,
        amount INTEGER NOT NULL,
        reference_id TEXT,
        status TEXT NOT NULL DEFAULT 'CONFIRMED',
        created_at TIMESTAMP NOT NULL DEFAULT NOW()
      );

      CREATE TABLE IF NOT EXISTS daily_rewards (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL,
        date TEXT NOT NULL,
        silver_earned INTEGER NOT NULL DEFAULT 0,
        quiz_rewards_count INTEGER NOT NULL DEFAULT 0,
        has_daily_bonus BOOLEAN NOT NULL DEFAULT FALSE,
        created_at TIMESTAMP NOT NULL DEFAULT NOW()
      );

      CREATE TABLE IF NOT EXISTS subscriptions (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL,
        type TEXT NOT NULL,
        expires_at TIMESTAMP NOT NULL,
        created_at TIMESTAMP NOT NULL DEFAULT NOW()
      );

      CREATE TABLE IF NOT EXISTS quiz_usage (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL,
        month TEXT NOT NULL,
        count INTEGER NOT NULL DEFAULT 0
      );

      CREATE TABLE IF NOT EXISTS unlock_resources (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL,
        resource_id INTEGER NOT NULL,
        unlocked_at TIMESTAMP NOT NULL DEFAULT NOW()
      );

      CREATE TABLE IF NOT EXISTS unlock_quizzes (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL,
        quiz_id INTEGER NOT NULL,
        unlocked_at TIMESTAMP NOT NULL DEFAULT NOW()
      );

      CREATE TABLE IF NOT EXISTS resource_analytics (
        id SERIAL PRIMARY KEY,
        resource_id INTEGER NOT NULL,
        views INTEGER DEFAULT 0,
        downloads INTEGER DEFAULT 0,
        created_at TIMESTAMP DEFAULT NOW()
      );

      CREATE TABLE IF NOT EXISTS resource_reward_status (
        id SERIAL PRIMARY KEY,
        resource_id INTEGER NOT NULL,
        uploader_id INTEGER NOT NULL,
        reward_type TEXT NOT NULL,
        silver_awarded INTEGER NOT NULL,
        awarded_at TIMESTAMP DEFAULT NOW()
      );

      CREATE TABLE IF NOT EXISTS resource_reports (
        id SERIAL PRIMARY KEY,
        resource_id INTEGER NOT NULL,
        user_id INTEGER NOT NULL,
        reason TEXT NOT NULL,
        status TEXT DEFAULT 'PENDING',
        created_at TIMESTAMP DEFAULT NOW(),
        resolved_at TIMESTAMP
      );

      CREATE TABLE IF NOT EXISTS notifications (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL,
        type TEXT NOT NULL,
        title TEXT NOT NULL,
        message TEXT NOT NULL,
        link TEXT,
        is_read BOOLEAN DEFAULT FALSE,
        created_at TIMESTAMP DEFAULT NOW()
      );

      CREATE TABLE IF NOT EXISTS admin_logs (
        id SERIAL PRIMARY KEY,
        admin_id INTEGER NOT NULL,
        action TEXT NOT NULL,
        target_type TEXT,
        target_id TEXT,
        details TEXT,
        ip_address TEXT,
        created_at TIMESTAMP DEFAULT NOW()
      );

      CREATE TABLE IF NOT EXISTS rate_limits (
        key TEXT PRIMARY KEY,
        hits INTEGER NOT NULL DEFAULT 1,
        expires_at TIMESTAMP WITH TIME ZONE NOT NULL
      );

      CREATE TABLE IF NOT EXISTS user_courses (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL,
        course_id INTEGER NOT NULL,
        created_at TIMESTAMP DEFAULT NOW()
      );

      CREATE TABLE IF NOT EXISTS user_readiness_history (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL,
        course_id INTEGER,
        score REAL NOT NULL,
        components JSONB,
        created_at TIMESTAMP DEFAULT NOW() NOT NULL
      );

      CREATE TABLE IF NOT EXISTS student_activity_events (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL,
        event_type TEXT NOT NULL,
        course_id INTEGER,
        unit_id INTEGER,
        topic_id INTEGER,
        reference_id TEXT,
        metadata JSONB,
        created_at TIMESTAMP DEFAULT NOW() NOT NULL
      );

      CREATE TABLE IF NOT EXISTS score_audit_log (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL,
        old_score REAL,
        new_score REAL,
        source TEXT,
        created_at TIMESTAMP DEFAULT NOW()
      );

      CREATE TABLE IF NOT EXISTS action_log (
        id SERIAL PRIMARY KEY,
        user_id INTEGER,
        action TEXT,
        details JSONB,
        created_at TIMESTAMP DEFAULT NOW()
      );

      CREATE TABLE IF NOT EXISTS mentor_withdrawals (
        id SERIAL PRIMARY KEY,
        mentor_id INTEGER NOT NULL,
        amount INTEGER NOT NULL,
        status TEXT DEFAULT 'PENDING',
        created_at TIMESTAMP DEFAULT NOW()
      );

      DROP TABLE IF EXISTS mentorship_messages, resource_reports CASCADE;
    `);

    // 2. Introspect Source Tables
    console.log("\n[2/6] Introspecting source database schema...");
    const sourceTablesRes = await sourcePool.query(`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public' AND table_type = 'BASE TABLE'
      ORDER BY table_name;
    `);

    const sourceTables = sourceTablesRes.rows.map(r => r.table_name);
    console.log(`Found ${sourceTables.length} tables in source database.`);

    // 3. Compare Columns and add any missing columns on target
    console.log("\n[3/6] Synchronizing table columns between source and target...");
    for (const table of sourceTables) {
      if (SKIP_TABLES.has(table)) {
        console.log(`Skipping AI table: ${table}`);
        continue;
      }

      // Check if table exists on target
      const tCheck = await targetPool.query(`
        SELECT 1 FROM information_schema.tables 
        WHERE table_schema = 'public' AND table_name = $1
      `, [table]);

      if (tCheck.rows.length === 0) {
        console.log(`Table ${table} does not exist on target. Fetching definition...`);
        // Get column definitions from source
        const colsRes = await sourcePool.query(`
          SELECT column_name, data_type, udt_name, is_nullable, column_default
          FROM information_schema.columns
          WHERE table_schema = 'public' AND table_name = $1
          ORDER BY ordinal_position
        `, [table]);

        const colDefs = colsRes.rows.map(c => {
          let type = c.udt_name;
          if (type.startsWith('_')) type = type.substring(1) + '[]';
          return `"${c.column_name}" ${type}`;
        }).join(', ');

        await targetPool.query(`CREATE TABLE IF NOT EXISTS "${table}" (${colDefs});`);
        console.log(`Created table: ${table}`);
      } else {
        // Check if id column type matches
        const sIdCol = await sourcePool.query(`
          SELECT data_type FROM information_schema.columns 
          WHERE table_schema = 'public' AND table_name = $1 AND column_name = 'id'
        `, [table]);
        const tIdCol = await targetPool.query(`
          SELECT data_type FROM information_schema.columns 
          WHERE table_schema = 'public' AND table_name = $1 AND column_name = 'id'
        `, [table]);

        if (sIdCol.rows.length > 0 && tIdCol.rows.length > 0) {
          if (sIdCol.rows[0].data_type !== tIdCol.rows[0].data_type) {
            console.log(`Table ${table} id mismatch (source: ${sIdCol.rows[0].data_type}, target: ${tIdCol.rows[0].data_type}). Recreating table...`);
            await targetPool.query(`DROP TABLE "${table}" CASCADE;`);
            const colsRes = await sourcePool.query(`
              SELECT column_name, data_type, udt_name, is_nullable, column_default
              FROM information_schema.columns
              WHERE table_schema = 'public' AND table_name = $1
              ORDER BY ordinal_position
            `, [table]);

            const colDefs = colsRes.rows.map(c => {
              let type = c.udt_name;
              if (type.startsWith('_')) type = type.substring(1) + '[]';
              if (c.column_name === 'id' && c.data_type === 'uuid') {
                return `"id" UUID PRIMARY KEY DEFAULT gen_random_uuid()`;
              }
              return `"${c.column_name}" ${type}`;
            }).join(', ');

            await targetPool.query(`CREATE TABLE "${table}" (${colDefs});`);
            console.log(`Recreated table ${table} with matching types.`);
          }
        }
      }

      // Sync missing columns
      const sCols = await sourcePool.query(`
        SELECT column_name, data_type, udt_name
        FROM information_schema.columns
        WHERE table_schema = 'public' AND table_name = $1
      `, [table]);

      const tCols = await targetPool.query(`
        SELECT column_name
        FROM information_schema.columns
        WHERE table_schema = 'public' AND table_name = $1
      `, [table]);

      const existingTCols = new Set(tCols.rows.map(r => r.column_name));
      for (const col of sCols.rows) {
        if (!existingTCols.has(col.column_name)) {
          let type = col.udt_name;
          if (type.startsWith('_')) type = type.substring(1) + '[]';
          console.log(`Adding missing column "${col.column_name}" (${type}) to table "${table}"`);
          await targetPool.query(`ALTER TABLE "${table}" ADD COLUMN IF NOT EXISTS "${col.column_name}" ${type};`);
        }
      }
    }

    // 4. Copy Data in Topological Dependency Order
    console.log("\n[4/6] Copying data from source to target in topological order...");

    const TOPOLOGICAL_ORDER = [
      "users",
      "subjects",
      "mentors",
      "session",
      "rate_limits",
      "contact_messages",
      "orders",
      "ledger",
      "units",
      "topics",
      "quizzes",
      "questions",
      "quiz_attempts",
      "exam_sessions",
      "exam_questions",
      "exam_attempts_detailed",
      "resources",
      "resource_downloads",
      "daily_rewards",
      "subscriptions",
      "quiz_usage",
      "unlock_resources",
      "unlock_quizzes",
      "mentor_requests",
      "mentor_withdrawals",
      "mentorship_messages",
      "user_subject_scores",
      "leaderboard",
      "notifications",
      "admin_logs",
      "resource_reports",
      "user_courses",
      "user_readiness_history",
      "student_activity_events",
      "resource_analytics",
      "resource_reward_status",
      "score_audit_log",
      "action_log"
    ];

    // Ensure all source tables are included
    const orderedTables = [...TOPOLOGICAL_ORDER];
    for (const t of sourceTables) {
      if (!SKIP_TABLES.has(t) && !orderedTables.includes(t)) {
        orderedTables.push(t);
      }
    }

    for (const table of orderedTables) {
      if (SKIP_TABLES.has(table)) continue;

      const countRes = await sourcePool.query(`SELECT COUNT(*) FROM "${table}"`);
      const totalRows = Number(countRes.rows[0].count);

      if (totalRows === 0) {
        console.log(`Table ${table}: 0 rows (skipping data transfer)`);
        continue;
      }

      console.log(`Table ${table}: Transferring ${totalRows} rows...`);

      // Read rows from source
      const sData = await sourcePool.query(`SELECT * FROM "${table}"`);
      const rows = sData.rows;

      if (rows.length === 0) continue;

      // Truncate target table to avoid duplicate primary key collisions if re-run
      await targetPool.query(`TRUNCATE TABLE "${table}" CASCADE;`);

      // Get column data types for the table
      const colTypeRes = await targetPool.query(`
        SELECT column_name, data_type, udt_name
        FROM information_schema.columns
        WHERE table_schema = 'public' AND table_name = $1
      `, [table]);
      const colTypeMap = new Map(colTypeRes.rows.map(r => [r.column_name, r.data_type]));

      // Chunked insertion
      const columns = Object.keys(rows[0]);
      const quotedCols = columns.map(c => `"${c}"`).join(', ');

      const CHUNK_SIZE = 100;
      for (let i = 0; i < rows.length; i += CHUNK_SIZE) {
        const chunk = rows.slice(i, i + CHUNK_SIZE);
        const valuePlaceholders: string[] = [];
        const flatValues: any[] = [];

        chunk.forEach((row, rowIndex) => {
          const rowPlaceholders = columns.map((col, colIndex) => {
            let val = row[col];
            const colType = colTypeMap.get(col);
            if (val !== null && (colType === 'json' || colType === 'jsonb' || (typeof val === 'object' && !Array.isArray(val) && !(val instanceof Date) && !Buffer.isBuffer(val)))) {
              val = JSON.stringify(val);
            }
            flatValues.push(val);
            return `$${rowIndex * columns.length + colIndex + 1}`;
          });
          valuePlaceholders.push(`(${rowPlaceholders.join(', ')})`);
        });

        const insertQuery = `
          INSERT INTO "${table}" (${quotedCols})
          VALUES ${valuePlaceholders.join(', ')}
        `;

        await targetPool.query(insertQuery, flatValues);
      }
      console.log(`Table ${table}: Copied ${rows.length} rows successfully.`);
    }

    // 5. Synchronize Sequences
    console.log("\n[5/6] Synchronizing sequences on target...");
    const seqRes = await targetPool.query(`
      SELECT sequence_name FROM information_schema.sequences WHERE sequence_schema = 'public';
    `);

    for (const row of seqRes.rows) {
      const seq = row.sequence_name;
      // Extract table and column from sequence name convention: table_column_seq
      try {
        const parts = seq.replace(/_seq$/, '').split('_');
        // Find matching table
        for (const t of sourceTables) {
          if (seq.startsWith(`${t}_`)) {
            const col = seq.replace(new RegExp(`^${t}_`), '').replace(/_seq$/, '');
            const maxRes = await targetPool.query(`SELECT COALESCE(MAX("${col}"), 1) as max_val FROM "${t}"`);
            const maxVal = Number(maxRes.rows[0].max_val);
            await targetPool.query(`SELECT setval($1, $2, true)`, [seq, maxVal]);
            console.log(`Synced sequence ${seq} -> ${maxVal}`);
            break;
          }
        }
      } catch (e: any) {
        console.warn(`Could not sync sequence ${seq}:`, e.message);
      }
    }

    // 6. Validation and Comparison
    console.log("\n[6/6] =================================================");
    console.log("         DATABASE MIGRATION VALIDATION MATRIX          ");
    console.log("=================================================");
    console.log("TABLE NAME".padEnd(28) + "SOURCE ROWS".padEnd(16) + "TARGET ROWS".padEnd(16) + "STATUS");
    console.log("-".repeat(70));

    let allMatched = true;
    for (const table of sourceTables) {
      if (SKIP_TABLES.has(table)) {
        console.log(`${table.padEnd(28)}${"EXCLUDED (AI)".padEnd(16)}${"0".padEnd(16)}SKIPPED (AI REMOVED)`);
        continue;
      }

      const sCountRes = await sourcePool.query(`SELECT COUNT(*) FROM "${table}"`);
      const sCount = Number(sCountRes.rows[0].count);

      const tCountRes = await targetPool.query(`SELECT COUNT(*) FROM "${table}"`);
      const tCount = Number(tCountRes.rows[0].count);

      const isMatch = sCount === tCount;
      if (!isMatch) allMatched = false;

      const status = isMatch ? "MATCH (OK)" : "MISMATCH (ERROR)";
      console.log(`${table.padEnd(28)}${String(sCount).padEnd(16)}${String(tCount).padEnd(16)}${status}`);
    }

    console.log("-".repeat(70));
    if (allMatched) {
      console.log("\n✅ ALL TABLES AND ROW COUNTS MATCH 100% PERFECTLY!");
    } else {
      console.error("\n❌ ERROR: SOME TABLES HAVE MISMATCHED ROW COUNTS!");
      process.exitCode = 1;
    }

  } catch (err) {
    console.error("Migration failed:", err);
    process.exitCode = 1;
  } finally {
    await sourcePool.end();
    await targetPool.end();
  }
}

migrate();
