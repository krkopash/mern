import express from "express";
import multer from "multer";
import path from "path";

import { uploadFiles, getFile, getDBfiles, getlocalFiles } from "../controller/controller.js";
const router = express.Router();
const storage = multer.diskStorage({  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

const fileFilter = (req, file, cb) => {
  const allowedTypes = ["image/jpeg", "image/png", "image/gif","application/pdf","text/csv", "application/msword" ];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Unsupported file type"), false);
  }
};

const upload = multer({ storage, fileFilter });

router.post("/upload", upload.array("files", 10), uploadFiles);
router.get("/files/local", getlocalFiles);
router.get("/files/db", getDBfiles);
router.get("/files/:filename", getFile);

export default router;