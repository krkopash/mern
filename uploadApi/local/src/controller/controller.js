import File from "../model/model.js";
import path from "path";
import fs from "fs";

export const uploadFiles = async (req, res) => {
  try {
    if (!req.files || req.files.length === 0) {
      return res.json({ success: false,error: "file not found"});
    }
    const filesData = req.files.map(file => ({
      filename: file.filename,
      originalName: file.originalname,
      type: file.mimetype,
      size: file.size,
      url: `/files/${file.filename}`,
    }));

    const savedFiles = await File.insertMany(filesData);
    res.json({ success: true, files: savedFiles });
  } catch (err) {
    res.json({ success: false, message: err.message });
  }
};

export const getDBfiles = async (req, res) => {
  try {
    const files = await File.find().sort({ uploadedAt: -1 });
    const uploadsPath = path.join(process.cwd(), "uploads");
        for (let file of files) {
      const filePath = path.join(uploadsPath, file.filename);
      if (!fs.existsSync(filePath) && file.status !== "deleted") {
        await File.findByIdAndUpdate(file._id, {
          status: "deleted",
        });
      }
      if (fs.existsSync(filePath) && file.status === "deleted") {
        await File.findByIdAndUpdate(file._id, {
          status: "active",
        });
      }
    }
    const updatedFiles = await File.find().sort({ uploadedAt: -1 });
    res.json({ success: true, files: updatedFiles });
  } catch (err) {
    res.json({ success: false, message: err.message });
  }
};

export const getFile = async (req, res) => {
  try {
    const { filename } = req.params;
    const file = await File.findOne({ filename });
    if (!file) return res.json({ success: false, message: "file not exist" });

    const filePath = path.join("uploads", filename);
    if (!fs.existsSync(filePath)) {
      return res.json({ success: false, message: "file not found" });
    }
    res.download(filePath, file.originalName);
  } catch (err) {
    res.json({ success: false, message: err.message });
  }
};




export const getlocalFiles = async (req, res) => {
  try {
    const files = await File.find(); 
    const uploadsPath = path.join(process.cwd(), "uploads");
    const existingFiles = files.filter((file) => {
      const filePath = path.join(uploadsPath, file.filename);
      return fs.existsSync(filePath); 
    });

    return res.json({success: true, count: existingFiles.length,files: existingFiles,});
  } catch (error) {
    return res.json({
      success: false, message: "file not found",});
  }
};