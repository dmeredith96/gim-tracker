import { Player } from "oldschooljs/dist/meta/types";
import { MilestoneType } from "../types/enums";
import { Milestone } from "../types/interfaces";

export function getAllMilestonesForType(
  milestoneType: MilestoneType
): Milestone[] {
  switch (milestoneType) {
    case MilestoneType.CRAFTING:
      return CRAFTING_MILESTONES;
    default:
      return [];
  }
}

export function doesPlayerHaveMilestoneUnlocked(
  milestone: Milestone,
  player: Player
): boolean {
  switch (milestone.milestoneType) {
    case MilestoneType.CRAFTING:
      return player.skills.crafting.level >= milestone.milestoneRequiredLevel;
    default:
      return false;
  }
}

// Crafting
const greenDhideBody: Milestone = {
  milestoneName: "Green Dragonhide Body",
  milestoneType: MilestoneType.CRAFTING,
  milestoneRequiredLevel: 63,
};

const blueDhideBody: Milestone = {
  milestoneName: "Blue Dragonhide Body",
  milestoneType: MilestoneType.CRAFTING,
  milestoneRequiredLevel: 71,
};

const redDhideBody: Milestone = {
  milestoneName: "Red Dragonhide Body",
  milestoneType: MilestoneType.CRAFTING,
  milestoneRequiredLevel: 77,
};

const blackDhideBody: Milestone = {
  milestoneName: "Black Dragonhide Body",
  milestoneType: MilestoneType.CRAFTING,
  milestoneRequiredLevel: 84,
};

const cutDragonstone: Milestone = {
  milestoneName: "Cut Dragonstone",
  milestoneType: MilestoneType.CRAFTING,
  milestoneRequiredLevel: 55,
};

const dragonstoneRing: Milestone = {
  milestoneName: "Dragonstone Ring",
  milestoneType: MilestoneType.CRAFTING,
  milestoneRequiredLevel: 55,
};

const dragonstoneNecklace: Milestone = {
  milestoneName: "Dragonstone Necklace",
  milestoneType: MilestoneType.CRAFTING,
  milestoneRequiredLevel: 72,
};

const dragonstoneBracelet: Milestone = {
  milestoneName: "Dragonstone Bracelet",
  milestoneType: MilestoneType.CRAFTING,
  milestoneRequiredLevel: 74,
};

const dragonstoneAmulet: Milestone = {
  milestoneName: "Dragonstone Amulet",
  milestoneType: MilestoneType.CRAFTING,
  milestoneRequiredLevel: 80,
};

const cutOnyx: Milestone = {
  milestoneName: "Cut Onyx",
  milestoneType: MilestoneType.CRAFTING,
  milestoneRequiredLevel: 67,
};

const onyxRing: Milestone = {
  milestoneName: "Onyx Ring",
  milestoneType: MilestoneType.CRAFTING,
  milestoneRequiredLevel: 67,
};

const onyxNecklace: Milestone = {
  milestoneName: "Onyx Necklace",
  milestoneType: MilestoneType.CRAFTING,
  milestoneRequiredLevel: 82,
};

const onyxBracelet: Milestone = {
  milestoneName: "Onyx Bracelet",
  milestoneType: MilestoneType.CRAFTING,
  milestoneRequiredLevel: 84,
};

const onyxAmulet: Milestone = {
  milestoneName: "Onyx Amulet",
  milestoneType: MilestoneType.CRAFTING,
  milestoneRequiredLevel: 90,
};

const cutZenyte: Milestone = {
  milestoneName: "Cut Zenyte",
  milestoneType: MilestoneType.CRAFTING,
  milestoneRequiredLevel: 89,
};

const zenyteRing: Milestone = {
  milestoneName: "Zenyte Ring",
  milestoneType: MilestoneType.CRAFTING,
  milestoneRequiredLevel: 89,
};

const zenyteNecklace: Milestone = {
  milestoneName: "Zenyte Necklace",
  milestoneType: MilestoneType.CRAFTING,
  milestoneRequiredLevel: 92,
};

const zenyteBracelet: Milestone = {
  milestoneName: "Zenyte Bracelet",
  milestoneType: MilestoneType.CRAFTING,
  milestoneRequiredLevel: 95,
};

const zenyteAmulet: Milestone = {
  milestoneName: "Zenyte Amulet",
  milestoneType: MilestoneType.CRAFTING,
  milestoneRequiredLevel: 98,
};

const slayerRing: Milestone = {
  milestoneName: "Slayer Ring",
  milestoneType: MilestoneType.CRAFTING,
  milestoneRequiredLevel: 75,
};

const CRAFTING_MILESTONES: Milestone[] = [
  greenDhideBody,
  blueDhideBody,
  redDhideBody,
  blackDhideBody,
  cutDragonstone,
  dragonstoneRing,
  dragonstoneNecklace,
  dragonstoneBracelet,
  dragonstoneAmulet,
  cutOnyx,
  onyxRing,
  onyxNecklace,
  onyxBracelet,
  onyxAmulet,
  cutZenyte,
  zenyteRing,
  zenyteNecklace,
  zenyteBracelet,
  zenyteAmulet,
  slayerRing,
];
