import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Player, SkillsScore } from "oldschooljs/dist/meta/types";
import React from "react";
import { getIconForSkill } from "../util/icons";

interface PlayerSkillsProps {
  player: Player;
}

export const PlayerSkills: React.FC<PlayerSkillsProps> = (
  props: PlayerSkillsProps
) => {
  return (
    <>
      <TableContainer>
        <Table sx={{ maxWidth: 350 }} size="small">
          <TableHead>
            <TableRow sx={{ fontWeight: "bold" }}>
              <TableCell>
                <b>Skill</b>
              </TableCell>
              <TableCell>
                <b>Level</b>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.keys(props.player.skills).map((skill) => {
              return (
                <TableRow>
                  <TableCell>
                    <img
                      src={getIconForSkill(skill)}
                      alt={skill}
                      width="16"
                      height="16"
                    />{" "}
                    {skill.charAt(0).toUpperCase() + skill.slice(1)}
                  </TableCell>
                  <TableCell>
                    {props.player.skills[skill as keyof SkillsScore].level}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
