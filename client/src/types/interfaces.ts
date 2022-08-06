import { MilestoneType } from "./enums";

export interface Milestone {
  milestoneName: string;
  milestoneType: MilestoneType;
  milestoneRequiredLevel: number;
}
