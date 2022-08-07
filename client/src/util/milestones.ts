import { Player } from "oldschooljs/dist/meta/types";
import { MilestoneType, MilestoneUnlockType } from "../types/enums";
import { Boost, Milestone } from "../types/interfaces";

export function getAllMilestonesForType(
  milestoneType: MilestoneType
): Milestone[] {
  switch (milestoneType) {
    case MilestoneType.CRAFTING:
      return CRAFTING_MILESTONES;
    case MilestoneType.HERBLORE:
      return HERBLORE_MILESTONES;
    default:
      return [];
  }
}

export function doesPlayerHaveMilestoneUnlocked(
  milestone: Milestone,
  player: Player
): MilestoneUnlockType {
  switch (milestone.milestoneType) {
    case MilestoneType.CRAFTING:
      if (player.skills.crafting.level >= milestone.milestoneRequiredLevel)
        return MilestoneUnlockType.YES;
      else if (
        player.skills.crafting.level +
          craftingBoosts.reduce((a, b) => a + b.boostLevel, 0) >=
        milestone.milestoneRequiredLevel
      )
        return MilestoneUnlockType.WITH_BOOST;
      else return MilestoneUnlockType.NO;
    case MilestoneType.HERBLORE:
      if (player.skills.herblore.level >= milestone.milestoneRequiredLevel)
        return MilestoneUnlockType.YES;
      else if (
        player.skills.herblore.level +
          herbloreBoosts.reduce((a, b) => a + b.boostLevel, 0) >=
        milestone.milestoneRequiredLevel
      )
        return MilestoneUnlockType.WITH_BOOST;
      else return MilestoneUnlockType.NO;
    default:
      return MilestoneUnlockType.NO;
  }
}

// Crafting milestones
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

// Herblore milestones
const superRestores: Milestone = {
  milestoneName: "Super Restore",
  milestoneType: MilestoneType.HERBLORE,
  milestoneRequiredLevel: 63,
};

const superDefenses: Milestone = {
  milestoneName: "Super Defense",
  milestoneType: MilestoneType.HERBLORE,
  milestoneRequiredLevel: 66,
};

const antidotePlus: Milestone = {
  milestoneName: "Antidote+",
  milestoneType: MilestoneType.HERBLORE,
  milestoneRequiredLevel: 68,
};

const antifirePotion: Milestone = {
  milestoneName: "Antifire Potion",
  milestoneType: MilestoneType.HERBLORE,
  milestoneRequiredLevel: 69,
};

const rangingPotion: Milestone = {
  milestoneName: "Ranging Potion",
  milestoneType: MilestoneType.HERBLORE,
  milestoneRequiredLevel: 72,
};

const weaponPoisonPlus: Milestone = {
  milestoneName: "Weapon Poison+",
  milestoneType: MilestoneType.HERBLORE,
  milestoneRequiredLevel: 73,
};

const magicPotion: Milestone = {
  milestoneName: "Magic Potion",
  milestoneType: MilestoneType.HERBLORE,
  milestoneRequiredLevel: 76,
};

const staminaPotion: Milestone = {
  milestoneName: "Stamina Potion",
  milestoneType: MilestoneType.HERBLORE,
  milestoneRequiredLevel: 77,
};

const antidotePlusPlus: Milestone = {
  milestoneName: "Antidote++",
  milestoneType: MilestoneType.HERBLORE,
  milestoneRequiredLevel: 79,
};

const saradominBrew: Milestone = {
  milestoneName: "Saradomin Brew",
  milestoneType: MilestoneType.HERBLORE,
  milestoneRequiredLevel: 81,
};

const antivenom: Milestone = {
  milestoneName: "Antivenom",
  milestoneType: MilestoneType.HERBLORE,
  milestoneRequiredLevel: 87,
};

const antivenomPlus: Milestone = {
  milestoneName: "Antivenom+",
  milestoneType: MilestoneType.HERBLORE,
  milestoneRequiredLevel: 94,
};

const HERBLORE_MILESTONES: Milestone[] = [
  superRestores,
  superDefenses,
  antidotePlus,
  antifirePotion,
  rangingPotion,
  weaponPoisonPlus,
  magicPotion,
  staminaPotion,
  antidotePlusPlus,
  saradominBrew,
  antivenom,
  antivenomPlus,
];

// Stew boost
const spicyStew: Boost = {
  boostName: "Spicy Stew",
  boostLevel: 5,
};

// Crafting boosts
const mushroomPie: Boost = {
  boostName: "Mushroom Pie",
  boostLevel: 4,
};

const craftingBoosts: Boost[] = [mushroomPie, spicyStew];

// Herblore boosts
const botanicalPie: Boost = {
  boostName: "Botanical Pie",
  boostLevel: 4,
};

const greenmansAle: Boost = {
  boostName: "Greenman's Ale",
  boostLevel: 1,
};

const herbloreBoosts: Boost[] = [spicyStew, botanicalPie, greenmansAle];
