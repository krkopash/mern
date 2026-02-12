import express from "express";
import path from "path";
import userRoutes from "./routes/user.routes";
import { logger } from "./middleware/logger.middleware";
import { errorHandler } from "./middleware/error.middleware";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(logger);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(userRoutes);
app.use(errorHandler);
import adminRoutes from "./routes/admin.routes";
app.use(adminRoutes);



export default app;
