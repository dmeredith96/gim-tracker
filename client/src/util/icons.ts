import { MilestoneType } from "../types/enums";
import { Milestone } from "../types/interfaces";

export function getIconForSkill(skill: string) {
  const uppercaseSkill = skill.charAt(0).toUpperCase() + skill.slice(1);
  const image = require("./../../public/icons/skills/" +
    uppercaseSkill +
    "_icon.png");
  return image;
}

export function getIconForMilestone(milestone: Milestone) {
  switch (milestone.milestoneType) {
    case MilestoneType.CRAFTING:
      return getIconForCraftingMilestone(milestone);
    default:
      return "";
  }
}

function getIconForCraftingMilestone(milestone: Milestone) {
  const image = require("./../../public/icons/crafting/" +
    milestone.milestoneName.replace(/ /g, "_") +
    ".png");
  return image;
}
