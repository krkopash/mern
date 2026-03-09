import express from "express";
import winstonLog from "./winston";
import morganMiddleware from "./morgan";
import router from "./routes";
import errorHandler from "./errorHandler";

const app = express();

app.use(express.json());
app.use(morganMiddleware);

app.get("/", (req, res) => {
  res.send("API running");
});
app.use("/api", router);

// app.get("/api/test-error", (req, res, next) => {
//   const error = new Error("Test error from /api/test-error");
//   next(error);
// });

app.use(errorHandler);

const PORT = 5000;
app.listen(PORT, () => {
  winstonLog.info(`Server running on port ${PORT}`);
});