"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.playerRouter = void 0;
const express_1 = __importDefault(require("express"));
const player_controllers_1 = require("../controllers/player.controllers");
exports.playerRouter = express_1.default.Router();
exports.playerRouter.get("/get_player_hiscores", player_controllers_1.getPlayerHiscores);
exports.playerRouter.get("/get_all_player_hiscores_from_group", player_controllers_1.getAllPlayerHiscoresFromGroup);
