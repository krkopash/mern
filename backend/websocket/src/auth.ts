import jwt from "jsonwebtoken";
const key = "secretkey";

export function verifyToken(token: string) {
  try {
    return jwt.verify(token, key);
  } catch(error) {
    return console.log(error);
  }
}