// jest.setup.js
// Setup file for Jest

// Mock Expo
jest.mock("expo", () => ({
  // Mock any expo modules if needed
}));

// Mock @expo/vector-icons
jest.mock("@expo/vector-icons", () => ({
  // Mock the icon component
}));

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
