import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { playerRouter } from "./routes/player.routes";

dotenv.config();

const app: Express = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT;

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.use("/api/player", playerRouter);

app.listen(port, () => {});
