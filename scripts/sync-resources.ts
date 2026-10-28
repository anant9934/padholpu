import { sql } from "../server/db";

async function fixResourcesData() {
  console.log("🚀 Syncing resources table data...");

  try {
    // 1. Check if uploaded_by column exists
    const columnExistsResult = await sql.query(`
      SELECT column_name 
      FROM information_schema.columns 
      WHERE table_name='resources' and column_name='uploaded_by';
    `);

    // 2. If it exists, copy the data over
    if (columnExistsResult.rows.length > 0) {
       console.log("Found legacy uploaded_by data. Syncing...");
       
       await sql.query(`
         UPDATE resources 
         SET uploader_id = uploaded_by
         WHERE uploader_id IS NULL AND uploaded_by IS NOT NULL;
       `);
       console.log("✅ Synced uploader_id data from legacy column.");
    } else {
        console.log("No legacy uploaded_by column found. Checking for username sync...");
    }

    // 3. Fallback: Try to sync uploader_id based on uploader_name or uploader_username
    // Since names might not be unique, username is safer if available
    await sql.query(`
        UPDATE resources r
        SET uploader_id = u.id
        FROM users u
        WHERE r.uploader_id IS NULL AND r.uploader_name = u.full_name;
    `);
    console.log("✅ Synced uploader_id based on matching full_name.");

    // 4. Fallback: Try associating everything with ID 1 (Admin) if still null
    await sql.query(`
        UPDATE resources 
        SET uploader_id = 1
        WHERE uploader_id IS NULL;
    `);
    console.log("✅ Fallback: Assigned remaining null resources to user ID 1.");

    // 5. Change column to NOT NULL if needed (optional)
    
  } catch (err) {
      console.error("❌ Migration failed:", err);
  }

  console.log("\n🎉 Data sync complete!");
  process.exit(0);
}

fixResourcesData().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
