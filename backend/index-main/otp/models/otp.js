
const mongoose=require("mongoose");
const otpSchema=new mongoose.Schema({
  phone:String,
  otp:String,
  createdAt:{ type:Date, default:Date.now, expires:60 }
});

module.exports= mongoose.model("otp", otpSchema);