import { configureStore } from "@reduxjs/toolkit";
import favouritesReducer, {
  loadFromAsyncStorage,
  setFavourites,
} from "./favouritesSlice";
import appReducer from "./appSlice";

const store = configureStore({
  reducer: {
    favourites: favouritesReducer,
    app: appReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const initializeStore = async () => {
  const favValue = await loadFromAsyncStorage();
  store.dispatch(setFavourites(favValue));
};

initializeStore();

export default store;
