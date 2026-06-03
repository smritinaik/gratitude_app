import { GratitudeEntry } from "./storage";

/**
 * CURRENT STREAK
 */
export const calculateCurrentStreak = (
  gratitudes: GratitudeEntry[]
): number => {
  if (gratitudes.length === 0) return 0;

  const dates = gratitudes
    .map((item) => item.date)
    .sort((a, b) => b.localeCompare(a));

  const today = new Date().toISOString().split("T")[0];

  if (!dates.includes(today)) return 0;

  let streak = 1;

  for (let i = 1; i < dates.length; i++) {
    const current = new Date(dates[i - 1]);
    const prev = new Date(dates[i]);

    const diff =
      (current.getTime() - prev.getTime()) / (1000 * 60 * 60 * 24);

    if (diff === 1) streak++;
    else break;
  }

  return streak;
};

/**
 * BEST STREAK
 */
export const calculateBestStreak = (
  gratitudes: GratitudeEntry[]
): number => {
  if (gratitudes.length === 0) return 0;

  const dates = gratitudes.map((i) => i.date).sort();

  let best = 1;
  let current = 1;

  for (let i = 1; i < dates.length; i++) {
    const prev = new Date(dates[i - 1]);
    const curr = new Date(dates[i]);

    const diff =
      (curr.getTime() - prev.getTime()) / (1000 * 60 * 60 * 24);

    if (diff === 1) {
      current++;
      best = Math.max(best, current);
    } else {
      current = 1;
    }
  }

  return best;
};

/**
 * NEXT MILESTONE GOAL
 */
export const getNextGoal = (streak: number): number => {
  const milestones = [7, 30, 90, 100];

  for (let i = 0; i < milestones.length; i++) {
    if (streak < milestones[i]) {
      return milestones[i];
    }
  }

  return streak + 50;
};