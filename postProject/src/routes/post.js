import multer from "multer";
import express from "express";
import crypto from "crypto";
import path from "path";

const router = express.Router();

import { auth } from "../middleware/auth.js";
import { createPost, openPost } from "../controller/post.js";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueName = crypto.randomBytes(16).toString("hex");
    const extension = path.extname(file.originalname);
    cb(null, uniqueName + extension);}
});

const fileFilter = (req, file, cb) => {
  const allowed = [ "image/jpeg","image/png","video/mp4", "audio/mpeg", "application/pdf"];
  if (allowed.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("File type not allowed"), false);
  }
};
const upload = multer({ storage, fileFilter });

router.post("/create", auth, upload.single("media"), createPost);
router.post("/open/:id", auth, openPost);

export default router;



// import multer from "multer";
// import express from "express";
// const router= express.Router();
// import { auth } from "../middleware/auth.js";
// import { createPost } from "../controller/post.js";
// import { openPost } from "../controller/post.js";

// const storage = multer.diskStorage({

//   destination: function (req, file, cb) {
//     cb(null, "uploads/");
//   },
//   media: function (req, file, cb) {
//     const uniqueName = crypto.randomBytes(16).toString("hex");
//     const extension = path.extname(file.originalname);
//     cb(null, uniqueName + extension);
//   }
// });

// const fileFilter = (req,file,cb)=>{

//  const allowed = [
//   "image/jpeg",
//   "image/png",
//   "video/mp4",
//   "audio/mpeg",
//   "application/pdf"
//  ];

//  if(allowed.includes(file.mimetype)){
//     cb(null,true);
//  }else{
//     cb(new Error("File type not allowed"),false);
//  }

// };

// const upload = multer({storage,fileFilter});

// router.post("/create", auth, upload.single("media"), createPost);
// router.post("/open/:id", auth, openPost);

// export default router;

