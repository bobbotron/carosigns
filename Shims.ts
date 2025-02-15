import { UIManager, Platform, LogBox } from "react-native";

const useShims = () => {
  LogBox.ignoreLogs([/Support for defaultProps will be removed/]);
  if (__DEV__) {
    const ignoreErrors = ["Support for defaultProps will be removed"];

    const error = console.error;
    console.error = (...arg) => {
      for (const error of ignoreErrors) if (arg[0].includes(error)) return;
      error(...arg);
    };

    LogBox.ignoreLogs(ignoreErrors);
  }
};

export default useShims;
