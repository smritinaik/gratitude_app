import { GratitudeEntry } from "./storage";

/**
 * Calculate current streak
 */
export const calculateCurrentStreak = (
  gratitudes: GratitudeEntry[]
): number => {
  if (gratitudes.length === 0) return 0;

  const dates = gratitudes
    .map((item) => item.date)
    .sort((a, b) => b.localeCompare(a));

  const today = new Date();
  const todayString = today.toISOString().split("T")[0];

  // If today's gratitude isn't present,
  // streak is broken.
  if (!dates.includes(todayString)) {
    return 0;
  }

  let streak = 1;

  for (let i = 1; i < dates.length; i++) {
    const currentDate = new Date(dates[i - 1]);
    const previousDate = new Date(dates[i]);

    const diff =
      (currentDate.getTime() - previousDate.getTime()) /
      (1000 * 60 * 60 * 24);

    if (diff === 1) {
      streak++;
    } else {
      break;
    }
  }

  return streak;
};

/**
 * Calculate best streak ever
 */
export const calculateBestStreak = (
  gratitudes: GratitudeEntry[]
): number => {
  if (gratitudes.length === 0) return 0;

  const dates = gratitudes
    .map((item) => item.date)
    .sort();

  let best = 1;
  let current = 1;

  for (let i = 1; i < dates.length; i++) {
    const currentDate = new Date(dates[i]);
    const previousDate = new Date(dates[i - 1]);

    const diff =
      (currentDate.getTime() - previousDate.getTime()) /
      (1000 * 60 * 60 * 24);

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
 * Next milestone
 */
export const getNextGoal = (
  currentStreak: number
): number => {
  if (currentStreak < 7) return 7;
  if (currentStreak < 30) return 30;
  if (currentStreak < 90) return 90;
  if (currentStreak < 100) return 100;

  return currentStreak + 50;
};