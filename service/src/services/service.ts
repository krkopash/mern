import { readUsers, writeUsers, User } from "../models/model";

export class UserService {

  static getAllUsers(): User[] {
    return readUsers();
  }

  static createUser(name: string, email: string) {
    if (!name || !email) {
      throw new Error("Name and email are required");
    }

    if (!email.includes("@") || !email.includes("."))  {
      throw new Error("Invalid email format");
    }

    const users = readUsers();
    if (users.some(u => u.email === email)) {
      throw new Error("Email already exists");
    }

    users.push({
      id: Date.now().toString(),
      name,
      email,
    });

    writeUsers(users);
  }

  static updateUser(id: string, name: string, email: string) {
    const users = readUsers();
    const user = users.find(u => u.id === id);

    if (!user) {
      throw new Error();  
    }
     user.name = name;
    user.email = email;
    writeUsers(users);
  }

  static deleteUser(id: string) {
    const users = readUsers();
    const filter = users.filter(u => u.id !== id);

    if (users.length === filter.length) {
      throw new Error("User not found");
    }

    writeUsers(filter);
  }
}
