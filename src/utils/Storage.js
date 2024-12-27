import AsyncStorage from "@react-native-async-storage/async-storage";
import data from "../../assets/data/destinations.json";

export const loadData = async () => {
  try {
    const storedData = await AsyncStorage.getItem("destinations");
    if (storedData) {
      return JSON.parse(storedData);
    } else {
      await AsyncStorage.setItem("destinations", JSON.stringify(data));
      return data;
    }
  } catch (error) {
    console.error("Error loading data", error);
    return [];
  }
};
