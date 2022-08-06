import dotenv from "dotenv";
import { Request, response, Response } from "express";
import { Hiscores, Player } from "oldschooljs";

dotenv.config();

export const getPlayerHiscores = async (
  req: Request<string>,
  res: Response<Player>
) => {
  const hiscores = await Hiscores.fetch(req.query.name as string);
  res.send(hiscores);
};

export const getAllPlayerHiscoresFromGroup = async (
  req: Request,
  res: Response<Player[]>
) => {
  const responseArray: Player[] = [];
  const uncleGimpus = await Hiscores.fetch("uncle gimpus");
  const wapEnjoyer = await Hiscores.fetch("WAP Enjoyer");
  const uncleGeebs = await Hiscores.fetch("uncle geebs");
  const gimpGz = await Hiscores.fetch("GIMP Gz");
  const reetsfactory = await Hiscores.fetch("reetsfactory");

  responseArray.push(uncleGimpus, wapEnjoyer, uncleGeebs, gimpGz, reetsfactory);

  res.send(responseArray);
};
