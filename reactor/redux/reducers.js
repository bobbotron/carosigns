import { ADD_FAVORITE_ITEM, REMOVE_FAVORITE_ITEM } from "./actions";

const initialState = {
  favorites: [],
};

function signsReducer(state = initialState, action) {
  const f = state.favorites.filter((sign) => sign === action.payload.name);
  switch (action.type) {
    case ADD_FAVORITE_ITEM:
      if (f.length === 0) {
        return {
          ...state,
          favorites: [...state.favorites, action.payload.name],
        };
      } else {
        return state;
      }
    case REMOVE_FAVORITE_ITEM:
      return {
        ...state,
        favorites: state.favorites.filter(
          (sign) => sign !== action.payload.name
        ),
      };
    default:
      return state;
  }
}

export default signsReducer;
