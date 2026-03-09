import jwt from "jsonwebtoken";

export function verifyToken(token: string) {
  try {
    return jwt.verify(token, "supersecret");
  } catch(error) {
    return console.log(error);
  }
}