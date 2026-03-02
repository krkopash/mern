const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String,index: true},
  age: Number
});


userSchema.index({
  name: "text",
  email: "text"
});
module.exports = mongoose.model("User", userSchema);
