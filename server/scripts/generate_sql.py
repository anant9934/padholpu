import csv
import json
import os

# Configuration
script_dir = os.path.dirname(os.path.abspath(__file__))
csv_file = os.path.join(script_dir, "questions (1).csv")
output_file = os.path.join(script_dir, "questions_fixed.sql")

def escape(s):
    if s is None or s == '': return ''
    return s.replace("'", "''")

# Data structures to build hierarchy
subjects = {}     # sid -> name
subj_lookup = {}  # name -> sid
units = {}        # sid -> list of (uid, uname)
unit_lookup = {}  # (sid, uname) -> uid
topics = {}       # uid -> list of (tid, tname)
topic_lookup = {} # (uid, tname) -> tid
questions_sql = []

next_sid = 1000
next_uid = 1000
next_tid = 1000
next_qid = 1000

# First Pass: Read everything and build existing mappings + find max IDs
with open(csv_file, 'r', encoding='utf-8') as f:
    reader = csv.DictReader(f)
    for row in reader:
        sname = row['subject'].strip()
        uname = row['unit'].strip()
        tname = row['topic'].strip()
        
        sid = row['subject_id'].strip()
        uid = row['unit_id'].strip()
        tid = row['topic_id'].strip()
        qid = row['id'].strip()

        # Update max IDs to avoid collisions
        if sid: next_sid = max(next_sid, int(sid) + 1)
        if uid: next_uid = max(next_uid, int(uid) + 1)
        if tid: next_tid = max(next_tid, int(tid) + 1)
        if qid: next_qid = max(next_qid, int(qid) + 1)

        # Build Lookups from any rows that HAVE IDs
        if sid and sname and sname not in subj_lookup: subj_lookup[sname] = sid
        if uid and sid and uname and (sid, uname) not in unit_lookup: unit_lookup[(sid, uname)] = uid
        if tid and uid and tname and (uid, tname) not in topic_lookup: topic_lookup[(uid, tname)] = tid

# Second Pass: Fill in missing IDs and build SQL
with open(csv_file, 'r', encoding='utf-8') as f:
    reader = csv.DictReader(f)
    for row in reader:
        sname = row['subject'].strip()
        uname = row['unit'].strip()
        tname = row['topic'].strip()
        
        if not sname: continue # Skip corrupt rows

        # 1. Resolve Subject ID
        sid = row['subject_id'].strip() or subj_lookup.get(sname)
        if not sid:
            sid = str(next_sid)
            subj_lookup[sname] = sid
            next_sid += 1
            
        # 2. Resolve Unit ID
        uid = row['unit_id'].strip() or unit_lookup.get((sid, uname))
        if not uid and uname:
            uid = str(next_uid)
            unit_lookup[(sid, uname)] = uid
            next_uid += 1
            
        # 3. Resolve Topic ID
        tid = row['topic_id'].strip() or topic_lookup.get((uid, tname))
        if not tid and tname:
            tid = str(next_tid)
            topic_lookup[(uid, tname)] = tid
            next_tid += 1

        # 4. Resolve Question ID
        qid = row['id'].strip()
        if not qid:
            qid = str(next_qid)
            next_qid += 1

        # Build hierarchy for the header part of the SQL
        if sid not in subjects:
            subjects[sid] = sname
            units[sid] = []
        
        if uid and not any(u[0] == uid for u in units[sid]):
            units[sid].append((uid, uname))
            topics[uid] = []
            
        if tid and not any(t[0] == tid for t in topics[uid]):
            topics[uid].append((tid, tname))

        # Format Tags as Postgres Array
        tags_val = 'NULL'
        if row.get('tags'):
            try:
                tag_list = json.loads(row['tags'])
                if isinstance(tag_list, list) and len(tag_list) > 0:
                    tags_val = "ARRAY[" + ", ".join(f"'{escape(t)}'" for t in tag_list) + "]"
            except: pass

        # Build Question SQL
        sql = f"""INSERT INTO questions (
            id, subject_id, unit_id, topic_id, subject, unit, topic,
            difficulty, question_type, question,
            option_a, option_b, option_c, option_d,
            correct_option, explanation, formula, tags, estimated_time, created_at
        ) VALUES (
            {qid}, {sid}, {uid}, {tid},
            '{escape(sname)}', '{escape(uname)}', '{escape(tname)}',
            '{escape(row['difficulty'])}', 'MCQ', '{escape(row['question'])}',
            '{escape(row['option_a'])}', '{escape(row['option_b'])}', '{escape(row['option_c'])}', '{escape(row['option_d'])}',
            '{escape(row['correct_option']).upper()}', '{escape(row['explanation'])}', '{escape(row['formula'])}',
            {tags_val}, {row['estimated_time'] or 'NULL'}, '{row['created_at']}'
        );"""
        questions_sql.append(sql)

# Third Pass: Write to file
with open(output_file, 'w', encoding='utf-8') as out:
    out.write("-- SEED DATA FOR STANDARD EXAM GENERATOR\n\n")

    out.write("-- 1. SUBJECTS\n")
    for sid, sname in subjects.items():
        total_units = len(units.get(sid, []))
        # Use the name itself as the code (e.g. CHE110)
        code = sname.replace(" ", "").upper()
        out.write(f"INSERT INTO subjects (id, name, code, total_units) VALUES ({sid}, '{escape(sname)}', '{escape(code)}', {total_units}) ON CONFLICT (id) DO UPDATE SET name=EXCLUDED.name, code=EXCLUDED.code, total_units=EXCLUDED.total_units;\n")
    
    out.write("\n-- 2. UNITS\n")
    for sid, unit_list in units.items():
        for i, (uid, uname) in enumerate(unit_list, 1):
            out.write(f"INSERT INTO units (id, subject_id, unit_number, unit_name) VALUES ({uid}, {sid}, {i}, '{escape(uname)}') ON CONFLICT (id) DO UPDATE SET unit_name=EXCLUDED.unit_name, unit_number=EXCLUDED.unit_number;\n")
    
    out.write("\n-- 3. TOPICS\n")
    for uid, topic_list in topics.items():
        for tid, tname in topic_list:
            out.write(f"INSERT INTO topics (id, unit_id, topic_name) VALUES ({tid}, {uid}, '{escape(tname)}') ON CONFLICT (id) DO UPDATE SET topic_name=EXCLUDED.topic_name;\n")
    
    out.write("\n-- 4. QUESTIONS\n")
    for sql in questions_sql:
        out.write(sql + "\n")

    out.write("\n-- 5. RESET SEQUENCES\n")
    out.write("SELECT setval('subjects_id_seq', (SELECT MAX(id) FROM subjects));\n")
    out.write("SELECT setval('units_id_seq', (SELECT MAX(id) FROM units));\n")
    out.write("SELECT setval('topics_id_seq', (SELECT MAX(id) FROM topics));\n")
    out.write("SELECT setval('questions_id_seq', (SELECT MAX(id) FROM questions));\n")

print(f"✅ Success! {len(questions_sql)} questions generated for the Exam Generator.")
print(f"📂 Output: {output_file}")
