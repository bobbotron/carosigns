import AppController from "./carosigns/AppController";
import { Provider as PaperProvider } from "react-native-paper";
import { store } from "./carosigns/redux/store";
import { Provider } from "react-redux";
import Theme from "./carosigns/Theme";
import useShims from "./Shims";
import React from "react";

useShims();

export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider theme={Theme}>
        <AppController />
      </PaperProvider>
    </Provider>
  );
}
