import { Level, Sign } from "../types/Sign";
import { Dispatch } from "redux";

// Define action types
export const ADD_FAVORITE_ITEM = "ADD_FAVORITE_ITEM";
export const REMOVE_FAVORITE_ITEM = "REMOVE_FAVORITE_ITEM";
export const SET_SEARCH_TEXT = "SET_SEARCH_TEXT";
export const SET_SEARCH_SELECTED_SIGN = "SET_SEARCH_SELECTED_SIGN";
export const SET_SELECTED_LEVEL = "SET_SELECTED_LEVEL";
export const SET_SELECTED_SIGN = "SET_SELECTED_SIGN";
export const SET_PRACTICE_MODE = "SET_PRACTICE_MODE";

export type ActionTypes =
  | "ADD_FAVORITE_ITEM"
  | "REMOVE_FAVORITE_ITEM"
  | "SET_SEARCH_TEXT"
  | "SET_SEARCH_SELECTED_SIGN"
  | "SET_SELECTED_LEVEL"
  | "SET_SELECTED_SIGN"
  | "SET_PRACTICE_MODE"
  | "persist/REHYDRATE";

type SignAction = {
  type: string;
  payload: Sign;
};

type SearchAction = {
  type: string;
  payload: string;
};

type SearchSignSelection = {
  type: typeof SET_SEARCH_SELECTED_SIGN;
  payload: Sign;
};

export const addFavorite = (sign: Sign) => (dispatch: Dispatch<SignAction>) => {
  dispatch({
    type: ADD_FAVORITE_ITEM,
    payload: sign,
  });
};

export const removeFavorite =
  (sign: Sign) => (dispatch: Dispatch<SignAction>) => {
    dispatch({
      type: REMOVE_FAVORITE_ITEM,
      payload: sign,
    });
  };

export const setSearchText =
  (text: string) => (dispatch: Dispatch<SearchAction>) => {
    dispatch({
      type: SET_SEARCH_TEXT,
      payload: text,
    });
  };
export const setSearchSelectedSign =
  (sign: Sign) => (dispatch: Dispatch<SearchSignSelection>) => {
    dispatch({
      type: SET_SEARCH_SELECTED_SIGN,
      payload: sign,
    });
  };

export const setSelectedLevel = (level: Level) => (dispatch: any) => {
  dispatch({
    type: SET_SELECTED_LEVEL,
    payload: level,
  });
};

export const setSelectedSign =
  (sign: Sign) => (dispatch: Dispatch<SignAction>) => {
    dispatch({
      type: SET_SELECTED_SIGN,
      payload: sign,
    });
  };

export const setPracticeMode = (mode: any) => (dispatch: any) => {
  dispatch({
    type: SET_PRACTICE_MODE,
    payload: mode,
  });
};
