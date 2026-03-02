const express = require("express");
const router = express.Router();
const OTP = require("../models/otp.model");
const sendOTP = require("../services/otp.services");

router.post("/send", async (req, res) => {

  const { phone } = req.body;
  const otp = Math.floor(100000 + Math.random() * 900000);
  await OTP.create({ phone, otp });
  await sendOTP(phone, otp);
  res.json({ message: "OTP Sent Successfully"});
});

router.post("/verify", async (req, res) => {
  const { phone, otp } = req.body;
  const record = await OTP.findOne({ phone, otp });
  if (!record)
    return res.json({message: "Invalid or Expired OTP"});
  await OTP.deleteMany({ phone });
  res.json({    message: "OTP Verified"});
});

module.exports = router;