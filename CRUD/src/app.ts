import express from "express";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import jokeRoutes from "./routes/joke.routes.js";

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use(express.static("public"));


app.use(authRoutes);
app.use("/", jokeRoutes);

export default app;
