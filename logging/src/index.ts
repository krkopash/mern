import express  from "express";
import morganMiddleware from "./morgan.js";
import logger from "./logger.js";
const app = express();

app.use(express.json());
app.use(morganMiddleware);

app.get("/", (req, res) => {
  res.send("API Running");
});

const PORT = 5000;

app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
});