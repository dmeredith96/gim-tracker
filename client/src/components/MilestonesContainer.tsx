import { Box, Paper, Tab, Tabs, Typography } from "@mui/material";
import { Player } from "oldschooljs/dist/meta/types";
import React from "react";
import { MilestoneType } from "../types/enums";
import { Milestones } from "./Milestones";

interface MilestonesContainerProps {
  players: Player[];
}

export const MilestonesContainer: React.FC<MilestonesContainerProps> = (
  props: MilestonesContainerProps
) => {
  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  return (
    <Paper sx={{ width: "38vw" }}>
      <Typography variant="h3" align="left" sx={{ paddingLeft: "8px" }}>
        Milestones
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={selectedTab}
            textColor="secondary"
            indicatorColor="secondary"
            onChange={handleTabChange}
          >
            <Tab label="Crafting" />
          </Tabs>
        </Box>
        <Milestones milestoneType={selectedTab} players={props.players} />
      </Typography>
    </Paper>
  );
};
