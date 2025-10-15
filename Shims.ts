import { LogBox } from "react-native";

const useShims = () => {
  LogBox.ignoreLogs([/Support for defaultProps will be removed/]);
};

export default useShims;
