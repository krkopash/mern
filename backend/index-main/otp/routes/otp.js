const router = require("express").Router();
const Otp = require("../models/otp");
const SMS = require("../models/sms");

function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000);
}

router.post("/send-otp", async (req, res) => {
  const { phone } = req.body;
  const otp = generateOTP();
  await Otp.create({ phone, otp });
  await SMS.create({ phone, message: `your otp is ${otp}` });
  res.json({ message: "otp sent" });
});

router.post("/verify-otp", async (req, res) => {
  const { phone, otp } = req.body;
  const record = await Otp.findOne({ phone, otp });
  if (!record)
    return res.json({ message: "Invalid OTP" });
  await Otp.deleteOne({ _id: record._id });
  res.json({ message: "OTP Verified" });
});

router.get("/sms/:phone", async (req, res) => {
  const messages = await SMS.find({ phone: req.params.phone });
  res.json(messages);
});

module.exports = router;