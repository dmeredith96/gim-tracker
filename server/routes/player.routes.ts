import express from "express";
import {
  getAllPlayerHiscoresFromGroup,
  getPlayerHiscores,
} from "../controllers/player.controllers";

export const playerRouter = express.Router();

playerRouter.get("/get_player_hiscores", getPlayerHiscores);
playerRouter.get(
  "/get_all_player_hiscores_from_group",
  getAllPlayerHiscoresFromGroup
);
