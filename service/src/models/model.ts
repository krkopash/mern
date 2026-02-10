import fs from "fs";
import path from "path";

const filePath = path.join(__dirname, "../../users.json");

export interface User {
  id: string;
  name: string;
  email: string;
}

export const readUsers = (): User[] => {
  const data = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(data);
};

export const writeUsers = (users: User[]) => {
  fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
};
