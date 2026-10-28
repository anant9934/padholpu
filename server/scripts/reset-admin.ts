import { db } from "../db";
import { users } from "../../shared/schema";
import { eq } from "drizzle-orm";
import { scrypt, randomBytes } from "crypto";
import { promisify } from "util";

const scryptAsync = promisify(scrypt);

async function hashPassword(password: string) {
  const salt = randomBytes(16).toString("hex");
  const buf = (await scryptAsync(password, salt, 64)) as Buffer;
  return `${buf.toString("hex")}.${salt}`;
}

async function resetAdmin() {
  const username = "quantumanant";
  const newPassword = "admin123";
  
  console.log(`Resetting password for ${username}...`);
  const hashed = await hashPassword(newPassword);
  
  await db.update(users)
    .set({ password: hashed })
    .where(eq(users.username, username));
    
  console.log("Password reset successfully to: admin123");
  process.exit(0);
}

resetAdmin().catch(console.error);
