const express = require("express");
const router = express.Router();
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage});
const { protect } = require("../middleware/auth.middleware");
const {uploadFile,deleteFile, } = require("../controllers/file.controller");

router.post("/upload", protect, upload.single("file"), uploadFile);
router.delete("/:id", protect, deleteFile);

module.exports = router;