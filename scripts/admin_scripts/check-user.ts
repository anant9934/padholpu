import { storage } from "./server/storage";
import { comparePasswords } from "./server/auth";

async function checkUser() {
  const email = "720anant@gmail.com";
  console.log(`Checking user with email: ${email}`);
  
  const user = await storage.getUserByEmail(email);
  if (!user) {
    console.log("User NOT found in database.");
    process.exit(0);
  }
  
  console.log("User found:");
  console.log(`ID: ${user.id}`);
  console.log(`Username: ${user.username}`);
  console.log(`Role: ${user.role}`);
  console.log(`Email: ${user.email}`);
  
  // We can't know the password, but we can verify if a test password works
  // Let's assume the user might have forgotten it or it was hashed differently
  console.log("Password hash:", user.password);
  
  process.exit(0);
}

checkUser().catch(err => {
  console.error(err);
  process.exit(1);
});
