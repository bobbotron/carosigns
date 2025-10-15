import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Sign } from "../types/Sign";

interface AppState {
  selectedSign: any;
  searchSelectedSign: any;
  selectedLevel: any;
  searchText: string;
  practiceMode: any;
}
const initialState: AppState = {
  selectedSign: undefined,
  searchSelectedSign: undefined,
  selectedLevel: undefined,
  searchText: "",
  practiceMode: { active: false },
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setSearchText: (state, action: PayloadAction<string>) => {
      state.searchText = action.payload;
      state.searchSelectedSign = undefined;
    },
    setSearchSelectedSign: (state, action: PayloadAction<any>) => {
      state.searchSelectedSign = action.payload;
    },
    setSelectedLevel: (state, action: PayloadAction<any>) => {
      state.selectedLevel = action.payload;
    },
    setSelectedSign: (state, action: PayloadAction<Sign>) => {
      state.selectedSign = action.payload;
    },
    setPracticeMode: (state, action: PayloadAction<any>) => {
      if (action.payload.active) {
        state.searchText = "";
        state.selectedLevel = undefined;
        state.selectedSign = undefined;
        state.practiceMode = action.payload;
      } else {
        state.practiceMode = action.payload;
      }
    },
  },
});

const { actions, reducer } = appSlice;
export const {
  setSearchText,
  setSearchSelectedSign,
  setSelectedLevel,
  setSelectedSign,
  setPracticeMode,
} = actions;
export default reducer;
