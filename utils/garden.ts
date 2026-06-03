export type GrowthStage =
  | "Dying Plant"
  | "Seed"
  | "Sprout"
  | "Plant"
  | "Tree"
  | "Flowering Tree";

export const getGrowthStage = (streak: number): GrowthStage => {
  if (streak === 0) return "Dying Plant";
  if (streak <= 6) return "Seed";
  if (streak <= 29) return "Sprout";
  if (streak <= 89) return "Plant";
  if (streak <= 99) return "Tree";
  return "Flowering Tree";
};

export const getDaysToNextStage = (streak: number): number => {
  if (streak === 0) return 1;
  if (streak <= 6) return 7 - streak;
  if (streak <= 29) return 30 - streak;
  if (streak <= 89) return 90 - streak;
  if (streak <= 99) return 100 - streak;
  return 0;
};

export const getNextStageName = (streak: number): GrowthStage | "Maxed" => {
  if (streak === 0) return "Seed";
  if (streak <= 6) return "Sprout";
  if (streak <= 29) return "Plant";
  if (streak <= 89) return "Tree";
  if (streak <= 99) return "Flowering Tree";
  return "Maxed";
};