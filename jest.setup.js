// jest.setup.js
// Setup file for Jest

// Mock react-native-paper
jest.mock("react-native-paper", () => ({
  Appbar: {
    // eslint-disable-next-line react/prop-types
    Action: ({ testID, onPress, icon, size }) => {
      const React = require("react");
      return React.createElement("button", {
        testID,
        onPress,
        "data-icon": icon,
        "data-size": size,
      });
    },
  },
}));
