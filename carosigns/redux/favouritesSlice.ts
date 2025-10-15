import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Sign } from "../types/Sign";

interface StoreState {
  favourites: string[];
}
const initialState: StoreState = {
  favourites: [],
};

const favouritesSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    setFavourites: (state, action: PayloadAction<any>) => {
      state.favourites = action.payload;
    },
    addFavourite: (state, action: PayloadAction<Sign>) => {
      // Prevent duplicates
      const f = state.favourites.filter((sign) => sign === action.payload.name);
      if (f.length === 0) {
        state.favourites = [...state.favourites, action.payload.name];
      }

      saveToAsyncStorage(state.favourites);
    },
    removeFavourite: (state, action: PayloadAction<any>) => {
      state.favourites = state.favourites.filter(
        (sign) => sign !== action.payload.name
      );
      saveToAsyncStorage(state.favourites);
    },
  },
});

const { actions, reducer } = favouritesSlice;
export const { addFavourite, removeFavourite, setFavourites } = actions;
export default reducer;

// Async Storage functions
const saveToAsyncStorage = async (favourites: string[]) => {
  try {
    await AsyncStorage.setItem("@favourites", favourites.toString());
  } catch (error) {
    console.error("Failed to save data to Async Storage:", error);
  }
};

export const loadFromAsyncStorage = async () => {
  try {
    const value = await AsyncStorage.getItem("@favourites");
    return value !== null ? value.split(",") : [];
  } catch (error) {
    console.error("Failed to load data from Async Storage:", error);
    return 0;
  }
};
