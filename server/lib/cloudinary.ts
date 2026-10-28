import { v2 as cloudinary } from "cloudinary";

/**
 * Cloudinary Secure Configuration Protocol
 * Ensures singleton configuration is initialized across all module contexts.
 */
export function configureCloudinary() {
  const cloudinaryUrl = process.env.CLOUDINARY_URL || '';
  const match = cloudinaryUrl.match(/cloudinary:\/\/([^:]+):([^@]+)@(.+)/);
  
  if (match) {
    cloudinary.config({
      cloud_name: match[3],
      api_key: match[1],
      api_secret: match[2],
      secure: true,
    });
    console.log("[CLOUDINARY] Protocol Initialized via URL");
  } else {
    // Fallback: Support direct environment variables
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
      secure: true,
    });
    
    if (process.env.CLOUDINARY_CLOUD_NAME) {
      console.log("[CLOUDINARY] Protocol Initialized via ENVs");
    } else {
      console.warn("[CLOUDINARY] WARNING: No configuration detected. Uploads will fail.");
    }
  }

  return cloudinary;
}

// Export pre-configured instance
export const cloudinaryInstance = configureCloudinary();
export default cloudinaryInstance;
