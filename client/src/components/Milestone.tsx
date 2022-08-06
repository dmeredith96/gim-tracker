import { Box, Typography } from "@mui/material";
import { Player } from "oldschooljs/dist/meta/types";
import React from "react";
import { getIconForMilestone } from "../util/icons";
import { doesPlayerHaveMilestoneUnlocked } from "../util/milestones";
import { Milestone } from "./../types/interfaces";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
interface MilestoneProps {
  milestone: Milestone;
  players: Player[];
}

export const MilestoneComponent: React.FC<MilestoneProps> = (
  props: MilestoneProps
) => {
  return (
    <Box
      sx={{
        display: "flex",
        borderBottom: 1,
        borderColor: "divider",
        justifyContent: "space-between",
      }}
    >
      <Typography
        sx={{
          display: "flex",
          flex: 1,
          fontWeight: "bold",
          alignItems: "center",
        }}
      >
        <Box sx={{ paddingRight: 1 }}>
          <img
            src={getIconForMilestone(props.milestone)}
            alt={props.milestone.milestoneName}
            width="24"
            height="32"
          />
        </Box>
        {props.milestone.milestoneName}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          flexWrap: "wrap",
        }}
      >
        <Typography>
          {props.players.map((player) => {
            return (
              <Box>
                {player.username}{" "}
                {doesPlayerHaveMilestoneUnlocked(props.milestone, player) ? (
                  <CheckCircleIcon fontSize="small" color="success" />
                ) : (
                  <CancelIcon fontSize="small" color="error" />
                )}
              </Box>
            );
          })}
        </Typography>
      </Box>
    </Box>
  );
};
