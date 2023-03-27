import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistStore, persistReducer } from "redux-persist";

import signsReducer from "./signsReducers";
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
//     applyMiddleware(...middleware)
//   ));

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["favorites"],
};

const rootReducer = combineReducers({
  signsReducer: persistReducer(persistConfig, signsReducer),
});

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
export const persistor = persistStore(store);
