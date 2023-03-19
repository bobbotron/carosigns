// import axios from 'axios';

// Define action types
// export const GET_MOVIES = 'FETCH_MOVIES';
export const ADD_FAVORITE_ITEM = "ADD_FAVORITE_ITEM";
export const REMOVE_FAVORITE_ITEM = "REMOVE_FAVORITE_ITEM";
export const SET_SEARCH_TEXT = "SET_SEARCH_TEXT";
export const SET_SELECTED_LEVEL = "SET_SELECTED_LEVEL";
export const SET_SELECTED_SIGN = "SET_SELECTED_SIGN";
export const SET_PRACTICE_MODE = "SET_PRACTICE_MODE";

export const addFavorite = (sign) => (dispatch) => {
  dispatch({
    type: ADD_FAVORITE_ITEM,
    payload: sign,
  });
};

export const removeFavorite = (sign) => (dispatch) => {
  dispatch({
    type: REMOVE_FAVORITE_ITEM,
    payload: sign,
  });
};

export const setSearchText = (text) => (dispatch) => {
  dispatch({
    type: SET_SEARCH_TEXT,
    payload: text,
  });
};

export const setSelectedLevel = (level) => (dispatch) => {
  dispatch({
    type: SET_SELECTED_LEVEL,
    payload: level,
  });
};

export const setSelectedSign = (sign) => (dispatch) => {
  dispatch({
    type: SET_SELECTED_SIGN,
    payload: sign,
  });
};


export const setPracticeMode = (mode) => (dispatch) => {
  dispatch({
    type: SET_PRACTICE_MODE,
    payload: mode,
  });
};