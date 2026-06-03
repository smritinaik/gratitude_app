import AsyncStorage from "@react-native-async-storage/async-storage";

const GRATITUDE_KEY = "gratitude";

export const saveGratitude = async (text: string) => {
  try {
    await AsyncStorage.setItem(GRATITUDE_KEY, text);
  } catch (error) {
    console.log(error);
  }
};

export const getGratitude = async () => {
  try {
    return await AsyncStorage.getItem(GRATITUDE_KEY);
  } catch (error) {
    console.log(error);
    return null;
  }
};