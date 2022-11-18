import AppController from "./AppController";
import {
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider,
} from "react-native-paper";

import { store } from "./redux/store";
import { Provider } from "react-redux";
import Theme from "./Theme";

export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider theme={Theme}>
        <AppController />
      </PaperProvider>
    </Provider>
  );
}
