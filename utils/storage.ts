import AsyncStorage from "@react-native-async-storage/async-storage";

export type GratitudeEntry = {
  id: string;
  text: string;
  date: string; // YYYY-MM-DD
};

const GRATITUDE_KEY = "gratitude_entries";

/**
 * Get all gratitude entries
 */
export const getAllGratitudes = async (): Promise<GratitudeEntry[]> => {
  try {
    const data = await AsyncStorage.getItem(GRATITUDE_KEY);

    if (!data) return [];

    return JSON.parse(data);
  } catch (error) {
    console.log("Error getting gratitudes:", error);
    return [];
  }
};

/**
 * Get today's gratitude
 */
export const getTodayGratitude = async () => {
  const gratitudes = await getAllGratitudes();

  const today = new Date().toISOString().split("T")[0];

  return gratitudes.find(
    (gratitude) => gratitude.date === today
  );
};

/**
 * Save today's gratitude
 * Only one gratitude per day
 */
export const saveTodayGratitude = async (
  text: string
) => {
  try {
    const gratitudes = await getAllGratitudes();

    const today = new Date().toISOString().split("T")[0];

    const existingIndex = gratitudes.findIndex(
      (gratitude) => gratitude.date === today
    );

    const newEntry: GratitudeEntry = {
      id: Date.now().toString(),
      text,
      date: today,
    };

    if (existingIndex !== -1) {
      gratitudes[existingIndex] = {
        ...gratitudes[existingIndex],
        text,
      };
    } else {
      gratitudes.unshift(newEntry);
    }

    await AsyncStorage.setItem(
      GRATITUDE_KEY,
      JSON.stringify(gratitudes)
    );
  } catch (error) {
    console.log("Error saving gratitude:", error);
  }
};

/**
 * Update today's gratitude
 */
export const updateTodayGratitude = async (
  text: string
) => {
  await saveTodayGratitude(text);
};