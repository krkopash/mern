const mongoose = require("mongoose");
const User = require("./model");

mongoose.connect("mongodb://127.0.0.1:27017/performance");

async function seed() {
  const users = [];

  for (let i = 0; i < 50000; i++) {
    users.push({
      name: `User${i}`,
      email: `user${i}@gmail.com`,
      city: "Surat",
      age: Math.floor(Math.random() * 50),
    });
  }

  await (User as any).insertMany(users);

  console.log("users inserted");
  process.exit();

}

seed();