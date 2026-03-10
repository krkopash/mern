import jwt from "jsonwebtoken";
const token = jwt.sign(
  { id: "user1" },
  "supersecret"
);
console.log(token);