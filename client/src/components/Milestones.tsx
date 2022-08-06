import { Player } from "oldschooljs/dist/meta/types";
import React from "react";
import { MilestoneType } from "../types/enums";
import { Milestone } from "../types/interfaces";
import { getAllMilestonesForType } from "../util/milestones";
import { MilestoneComponent } from "./Milestone";

interface MilestonesProps {
  milestoneType: MilestoneType;
  players: Player[];
}

export const Milestones: React.FC<MilestonesProps> = (
  props: MilestonesProps
) => {
  const allMilestonesForType: Milestone[] = getAllMilestonesForType(
    props.milestoneType
  );

  return (
    <>
      {allMilestonesForType.map((milestone) => {
        return (
          <MilestoneComponent milestone={milestone} players={props.players} />
        );
      })}
    </>
  );
};
