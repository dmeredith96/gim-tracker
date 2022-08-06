import { Paper, Typography } from "@mui/material";
import { Player } from "oldschooljs/dist/meta/types";
import React from "react";
import { PlayerSkills } from "./PlayerSkills";

interface PlayerSectionProps {
  player: Player;
}

export const PlayerSection: React.FC<PlayerSectionProps> = (
  props: PlayerSectionProps
) => {
  return (
    <Paper sx={{ maxWidth: "20%" }} elevation={5}>
      <Typography variant="h5">{props.player.username}</Typography>
      <PlayerSkills player={props.player} />
    </Paper>
  );
};
