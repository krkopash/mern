import mongoose from "mongoose";
const postSchema= new mongoose.Schema({
    owner:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"User"
  },
  message:{ type:String },
  media:{type:String},
  spotifyLink:{  type:String},
  unlockDate:{ type:Date},
  isUnlocked:{
    type:Boolean,
    default:false
  },
  isPublic:{ type:Boolean, default:false }
},{timestamps:true});

export default mongoose.model("post", postSchema);