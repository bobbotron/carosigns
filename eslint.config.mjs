import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import tsParser from "@typescript-eslint/parser";

/** @type {import('eslint').Linter.Config[]} */
export default [
  // JavaScript files
  { files: ["**/*.{js,mjs,cjs,jsx}"] },

  // TypeScript files - use @typescript-eslint parser and recommended rules
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: "./tsconfig.json",
        ecmaVersion: 2020,
        sourceType: "module",
        ecmaFeatures: { jsx: true },
      },
      globals: { ...globals.browser, ...globals.node },
    },
  },

  // Test files - add Jest globals
  {
    files: [
      "**/__tests__/**/*.{js,ts,tsx}",
      "**/*.test.{js,ts,tsx}",
      "**/*.spec.{js,ts,tsx}",
      "jest.setup.js",
      "__mocks__/**/*.{js,ts}",
    ],
    languageOptions: {
      globals: { ...globals.jest },
    },
  },

  // Shared globals for browser environment
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },

  // Recommended base configs
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,

  // React settings
  {
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];
