import { Box } from "@mui/material";
import { Player } from "oldschooljs/dist/meta/types";
import React from "react";
import { PlayerSection } from "./PlayerSection";

interface PlayersSectionProps {
  players: Player[];
}

export const PlayersSection: React.FC<PlayersSectionProps> = (
  props: PlayersSectionProps
) => {
  const sortedPlayers = props.players.sort(
    (a, b) => b.skills.overall.level - a.skills.overall.level
  );
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        width: "60vw",
        flexGrow: 0,
      }}
    >
      {sortedPlayers.map((player) => {
        return <PlayerSection player={player} />;
      })}
    </Box>
  );
};
