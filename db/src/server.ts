import dotenv from "dotenv";
dotenv.config();

import app from "./app";
import connectDB from "./config/config";

connectDB();

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
