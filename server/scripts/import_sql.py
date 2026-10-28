import psycopg2
import csv
import os
import sys
import json

# Configuration
script_dir = os.path.dirname(os.path.abspath(__file__))
csv_file = os.path.join(script_dir, "questions (1).csv")
env_file = os.path.join(os.getcwd(), ".env.local")

def get_db_url():
    if not os.path.exists(env_file):
        print(f"❌ Error: .env.local not found at {env_file}")
        sys.exit(1)
    
    with open(env_file, 'r') as f:
        for line in f:
            if line.strip().startswith("DATABASE_URL="):
                val = line.split("=", 1)[1].strip()
                return val.strip('"').strip("'")
    return None

def escape(s):
    if s is None or s == '': return ''
    return str(s).replace("'", "''")

def run_import():
    db_url = get_db_url()
    if not db_url:
        print("❌ Error: DATABASE_URL not found in .env.local")
        sys.exit(1)

    if not os.path.exists(csv_file):
        print(f"❌ Error: CSV file not found at {csv_file}")
        sys.exit(1)

    conn = psycopg2.connect(db_url)
    cur = conn.cursor()

    try:
        print(f"🚀 Starting robust database import from {csv_file}...")
        
        with open(csv_file, 'r', encoding='utf-8') as f:
            reader = csv.DictReader(f)
            
            count = 0
            for row in reader:
                sname = row['subject'].strip()
                scode = sname.replace(" ", "").upper()
                uname = row['unit'].strip()
                tname = row['topic'].strip()
                qtext = row['question'].strip()
                
                if not sname or not uname or not tname or not qtext:
                    continue

                # 1. Get/Create Subject
                cur.execute("SELECT id FROM subjects WHERE code = %s", (scode,))
                res = cur.fetchone()
                if res:
                    sid = res[0]
                else:
                    cur.execute("INSERT INTO subjects (name, code, total_units) VALUES (%s, %s, 0) RETURNING id", (sname, scode))
                    sid = cur.fetchone()[0]

                # 2. Get/Create Unit
                cur.execute("SELECT id FROM units WHERE subject_id = %s AND unit_name = %s", (sid, uname))
                res = cur.fetchone()
                if res:
                    uid = res[0]
                else:
                    cur.execute("INSERT INTO units (subject_id, unit_number, unit_name) VALUES (%s, 1, %s) RETURNING id", (sid, uname))
                    uid = cur.fetchone()[0]

                # 3. Get/Create Topic
                cur.execute("SELECT id FROM topics WHERE unit_id = %s AND topic_name = %s", (uid, tname))
                res = cur.fetchone()
                if res:
                    tid = res[0]
                else:
                    cur.execute("INSERT INTO topics (unit_id, topic_name) VALUES (%s, %s) RETURNING id", (uid, tname))
                    tid = cur.fetchone()[0]

                # 4. Upsert Question
                # Use a unique identifier if possible. If not, check by text
                cur.execute("SELECT id FROM questions WHERE topic_id = %s AND question = %s", (tid, qtext))
                res = cur.fetchone()
                
                # Format Tags
                tags = None
                if row.get('tags'):
                    try:
                        tag_list = json.loads(row['tags'])
                        if isinstance(tag_list, list):
                            tags = tag_list
                    except: pass

                params = (
                    sid, uid, tid, sname, uname, tname,
                    row['difficulty'], 'MCQ', qtext,
                    row['option_a'], row['option_b'], row['option_c'], row['option_d'],
                    row['correct_option'].upper(), row['explanation'], row['formula'],
                    tags, row['estimated_time'] or None
                )

                if res:
                    qid = res[0]
                    cur.execute("""
                        UPDATE questions SET 
                        subject_id=%s, unit_id=%s, topic_id=%s, subject=%s, unit=%s, topic=%s,
                        difficulty=%s, question_type=%s, question=%s,
                        option_a=%s, option_b=%s, option_c=%s, option_d=%s,
                        correct_option=%s, explanation=%s, formula=%s,
                        tags=%s, estimated_time=%s
                        WHERE id=%s
                    """, params + (qid,))
                else:
                    cur.execute("""
                        INSERT INTO questions (
                            subject_id, unit_id, topic_id, subject, unit, topic,
                            difficulty, question_type, question,
                            option_a, option_b, option_c, option_d,
                            correct_option, explanation, formula,
                            tags, estimated_time
                        ) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
                    """, params)
                
                count += 1
                if count % 50 == 0:
                    print(f"✅ Processed {count} questions...")

        # 5. Final Step: Refresh unit counts in subjects
        print("📊 Refreshing unit counts...")
        cur.execute("""
            UPDATE subjects s 
            SET total_units = (SELECT count(*) FROM units u WHERE u.subject_id = s.id)
        """)
        
        # 6. Synchronize Unit Numbers (1, 2, 3...)
        # (This is more complex to do in a single SQL, so we just finish for now)

        conn.commit()
        print(f"🎉 Success! Database fully synced with {count} questions.")

    except Exception as e:
        conn.rollback()
        print(f"❌ Import failed: {e}")
    finally:
        cur.close()
        conn.close()

if __name__ == "__main__":
    run_import()
