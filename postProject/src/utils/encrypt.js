import crypto from "crypto"
import dotenv from "dotenv";
dotenv.config();
const algorithm="aes-256-cbc";
const key = Buffer.from(process.env.ENCRYPTION_KEY);

export function encrypt(text){
    const ivectore=crypto.randomBytes(16);
    const cipher = crypto.createCipheriv(algorithm, key, ivectore);
    let encrypted = cipher.update(text, "utf8", "hex");
    encrypted+=cipher.final("hex");
    return ivectore.toString("hex")+ ":"+encrypted;
}



export function decrypt(text){
  const parts = text.split(":");
  const iv = Buffer.from(parts[0],"hex");
  const encryptedText = parts[1];
  const decipher = crypto.createDecipheriv(algorithm,key,iv);
  let decrypted = decipher.update(encryptedText,"hex","utf8");
  decrypted += decipher.final("utf8");
  return decrypted;
}