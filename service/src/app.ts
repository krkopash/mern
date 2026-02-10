import express from "express";
import path from "path";
import router from "./routes/routes";
import { renderUsersPage } from "./controllers/controller";


const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../views"));

app.get("/", renderUsersPage);
app.use("/api/users", router);

export default app;
