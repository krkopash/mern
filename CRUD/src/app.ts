import express from "express";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import jokeRoutes from "./routes/joke.routes.js";
import { activityLogger } from "./day44MW/middleware/activityLogger.js";
import { logger } from "./day44MW/middleware/looger.js";
import router from "./day44MW/routes/routes.js";

const app = express();


app.use(router);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(express.static("public"));


app.use(activityLogger);
app.use(logger);

app.use(authRoutes);
app.use("/", jokeRoutes);

export default app;