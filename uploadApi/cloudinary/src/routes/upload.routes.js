const express = require("express");
const router = express.Router();
const multer = require("multer");s
const storage = multer.memoryStorage();
const upload = multer({ storage});
const { uploadFile } = require("../controllers/upload.controller");

router.post("/upload", upload.single("file"), uploadFile);

module.exports = router;s