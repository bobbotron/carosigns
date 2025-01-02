import { Image } from "react-native";
import { Platform } from "react-native";

const ImageShim = () => {
  // fix resolveAssetSource call for web :^(
  if (Platform.OS === "web") {
    Image.resolveAssetSource = (source) => {
      // eslint-disable-next-line no-unused-labels
      uri: source;
    };
  }
};

export default ImageShim;
