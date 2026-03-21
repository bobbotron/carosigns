module.exports = {
  preset: "react-native",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "node",
  transformIgnorePatterns: [
    "node_modules/(?!((jest-)?react-native|@react-native(-community)?|@react-navigation|react-native-gesture-handler|react-native-reanimated|react-native-screens))",
  ],
  moduleNameMapper: {
    "^expo$": "<rootDir>/__mocks__/expo.js",
    "^@expo/vector-icons$": "<rootDir>/__mocks__/@expo/vector-icons.js",
    "^expo/src/winter/.*":
      "<rootDir>/__mocks__/expo/src/winter/runtime.native.js",
  },
};
