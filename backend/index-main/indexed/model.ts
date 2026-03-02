const mongoose = require("mongoose");
export interface IUser extends Document {
  name: string;
  email: string;
  city: string;
  age: number;
}

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  city: String,
  age: Number,
});


// userSchema.index({ email: 1 });



// Compound Index
// userSchema.index({ city: 1, age: -1 });
// Unique Index
// email: { type: String, unique: true }
// Text Index
// userSchema.index({ name: "text" });

module.exports = mongoose.model("User", userSchema);