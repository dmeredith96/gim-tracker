import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { playerRouter } from "./routes/player.routes";
import path from "path";

dotenv.config();

const app: Express = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT;

app.use("/api/player", playerRouter);

if (process.env.NODE_ENV === "production") {
  // set static folder
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(port, () => {});
