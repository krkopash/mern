const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

exports.uploadFile = async (req, res) => {
  try {
    if (!req.file) {
      return res.json({ message: "No file uploaded" });
    }

    const fileType = req.file.mimetype.startsWith("image")? "image":"raw"; 
    const result = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          { folder: "uploads", resource_type: fileType,},
          (error, result) => {
            if (error) reject(error);
            else resolve(result);
          }
        )
        .end(req.file.buffer);
    });

    res.json({ message: "File uploaded successfully", url: result.secure_url,
      public_id: result.public_id,
    });
  } catch (error) {
    res.json({
      message: error.message || "Upload failed",
    });
  }
};