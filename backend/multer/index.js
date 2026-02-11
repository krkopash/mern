import express from "express";
import multer from "multer";
import path from "node:path";
import { configDotenv } from "dotenv";

const app = express();
const PORT = 4000;

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  const allowedTypes = ["image/jpeg", "image/png", "image/jpg", "application/pdf", "application/javascript", "text/javascript",];         

  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Only Images & PDFs allowed"), false);
  }

};

const upload = multer({  storage: storage,  fileFilter: fileFilter,});

app.post("/upload", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).send("File not found");
  }
  console.log(req.file);

  res.json({
    message: "File uploaded successfully",
    Details: req.file,
    
  });
});

app.use("/uploads", express.static("uploads"));
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
