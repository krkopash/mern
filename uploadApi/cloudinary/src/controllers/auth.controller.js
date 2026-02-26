const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const generateToken = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7d", });

exports.register = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.json({user, token: generateToken(user._id), });
  } catch (err) { res.json({ message: err.message }); }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user){ return res.status(400).json({ message: "User not found" });}

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ message: "Wrong password" });

  res.json({ token: generateToken(user._id), });
};