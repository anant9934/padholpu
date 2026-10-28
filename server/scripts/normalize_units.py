import psycopg2
import os
import sys

# Configuration
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

def run_normalization():
    db_url = get_db_url()
    if not db_url:
        print("❌ Error: DATABASE_URL not found in .env.local")
        sys.exit(1)

    conn = psycopg2.connect(db_url)
    cur = conn.cursor()

    try:
        print("🚀 Starting Data Normalization (Unit Consolidation)...")
        
        # 1. Fetch all units grouped by subject
        cur.execute("SELECT id, subject_id, unit_name FROM units")
        all_units = cur.fetchall()
        
        # Dictionary to track consolidated units: (subject_id, normalized_name) -> {id, name}
        master_map = {}
        # Mapping of Old ID -> Master ID
        id_remap = {}

        def get_normalized_name(name):
            n = name.strip().lower()
            if "logic gates" in n: return "logic gates"
            if "sensors" in n: return "sensors"
            if "semiconductors" in n: return "semiconductors"
            return n

        # Pass 1: Identifiy Masters
        for uid, sid, uname in all_units:
            norm_name = get_normalized_name(uname)
            key = (sid, norm_name)
            
            if key not in master_map:
                nice_name = uname
                if norm_name == "logic gates": nice_name = "Logic Gates"
                if norm_name == "semiconductors": nice_name = "Semiconductors"
                
                master_map[key] = {"id": uid, "name": nice_name}
                # Update master unit name in DB
                cur.execute("UPDATE units SET unit_name = %s WHERE id = %s", (nice_name, uid))
            else:
                master_info = master_map[key]
                id_remap[uid] = master_info["id"]

        print(f"🔗 Remapping {len(id_remap)} redundant units...")
        
        # Pass 2: Update Questions & Topics
        # Also update the string 'unit' column in questions for consistency
        for old_id, new_id in id_remap.items():
            # Get the new master name
            cur.execute("SELECT unit_name FROM units WHERE id = %s", (new_id,))
            master_name = cur.fetchone()[0]

            # Update Questions (both ID and string name)
            cur.execute("UPDATE questions SET unit_id = %s, unit = %s WHERE unit_id = %s", (new_id, master_name, old_id))
            # Also update name for questions already having the new_id (to ensure consistency)
            cur.execute("UPDATE questions SET unit = %s WHERE unit_id = %s", (master_name, new_id))
            
            # Update Topics
            cur.execute("UPDATE topics SET unit_id = %s WHERE unit_id = %s", (new_id, old_id))
            
            # Delete the old unit
            cur.execute("DELETE FROM units WHERE id = %s", (old_id,))

        # 3. Refresh Subject Unit Counts
        print("📊 Refreshing unit counts in subjects...")
        cur.execute("""
            UPDATE subjects s 
            SET total_units = (SELECT count(*) FROM units u WHERE u.subject_id = s.id)
        """)

        conn.commit()
        print("🎉 Normalization complete! The question bank is now clean and consolidated.")

    except Exception as e:
        conn.rollback()
        print(f"❌ Normalization failed: {e}")
    finally:
        cur.close()
        conn.close()

if __name__ == "__main__":
    run_normalization()
