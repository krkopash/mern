const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
const File = require("../models/file.model");

exports.uploadFile = async (req, res) => {
  try {
    const fileType = req.file.mimetype.startsWith("image")? "image": "raw";
    const result = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream(
          {
            folder: "uploads",
            resource_type: fileType,
          },
          (error, result) => {
            if (error) reject(error);
            else resolve(result);}).end(req.file.buffer);
    });

    const file = await File.create({
      user: req.user.id,
      url: result.secure_url,
      public_id: result.public_id,
      fileType,
    });
    res.json(file);
  } catch (err) {
    res.json({ message: err.message });
  }
};

exports.deleteFile = async (req, res) => {
  try {
    const file = await File.findById(req.params.id);
    if (!file)  return res.json({ message: "file not exist" });

    if (file.user.toString() !== req.user.id) return res.json({ message: "Unauthorized" });

    await cloudinary.uploader.destroy(file.public_id, {
      resource_type: file.fileType,
    });
    await file.deleteOne();
    res.json({ message: "File deleted" });
  } catch (err) { res.json({ message: err.message });}
};