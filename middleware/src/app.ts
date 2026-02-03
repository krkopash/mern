import express from "express";
import { logger } from "./middlewares/logger.middleware.js";
import { activityMiddleware } from "./middlewares/activity.middleware.js";
import userRoutes from "./routes/user.routes.js";
import activityRoutes from "./routes/activity.routes.js";

const app = express();

app.use("/api/activity", activityRoutes);
app.use(express.json());
app.use(logger);
app.use(activityMiddleware); 

app.use("/api/users", userRoutes);

export default app;
