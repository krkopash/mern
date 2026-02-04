import express from "express";
import cookieParser from "cookie-parser";
import { logger } from "./academic/middleware/logger.middleware.js";
import authRoutes from "./routes/auth.routes.js";
import jokeRoutes from "./routes/joke.routes.js";

const app = express();
import { activityLogger } from "./academic/middleware/activityLogger.middleware.js";
import jokeApiRoutes from "./academic/routes/joke.api.routes.js";

app.use(activityLogger);


app.use(jokeApiRoutes);

app.use(logger);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(express.static("public"));

// Routes
app.use(authRoutes);
app.use("/", jokeRoutes);

export default app;
