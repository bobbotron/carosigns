import {
  ADD_FAVORITE_ITEM,
  REMOVE_FAVORITE_ITEM,
  SET_SEARCH_TEXT,
  SET_SELECTED_LEVEL,
  SET_SELECTED_SIGN,
  SET_PRACTICE_MODE,
  ActionTypes as ActionType,
  SET_SEARCH_SELECTED_SIGN,
} from "./actions";

const initialState = {
  favorites: [],
  selectedSign: undefined,
  selectedLevel: undefined,
  searchText: "",
  practiceMode: { active: false },
};

type Action = {
  type: ActionType;
  payload: any;
};

function signsReducer(state = initialState, action: Action) {
  switch (action.type) {
    case ADD_FAVORITE_ITEM: {
      const f = state.favorites.filter((sign) => sign === action.payload.name);
      if (f.length === 0) {
        return {
          ...state,
          favorites: [...state.favorites, action.payload.name],
        };
      } else {
        return state;
      }
    }
    case REMOVE_FAVORITE_ITEM:
      return {
        ...state,
        favorites: state.favorites.filter(
          (sign) => sign !== action.payload.name
        ),
      };
    case SET_SEARCH_TEXT:
      return {
        ...state,
        searchText: action.payload,
        searchSelectedSign: undefined,
      };
    case SET_SEARCH_SELECTED_SIGN:
      return {
        ...state,
        searchSelectedSign: action.payload,
      };
    case SET_SELECTED_LEVEL:
      return {
        ...state,
        selectedLevel: action.payload,
      };
    case SET_SELECTED_SIGN:
      return {
        ...state,
        selectedSign: action.payload,
      };
    case SET_PRACTICE_MODE:
      if (action.payload.active) {
        return {
          ...state,
          searchText: "",
          selectedLevel: undefined,
          selectedSign: undefined,
          practiceMode: action.payload,
        };
      } else {
        return {
          ...state,
          practiceMode: action.payload,
        };
      }
    case "persist/REHYDRATE":
      return {
        ...state,
        selectedLevel: undefined,
        searchText: "",
        practiceMode: false,
      };
    default:
      return state;
  }
}

export default signsReducer;
