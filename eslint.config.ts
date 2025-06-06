import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import noTypeAssertion from "eslint-plugin-no-type-assertion";
import jsxA11y from "eslint-plugin-jsx-a11y";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  reactRefresh.configs.vite,
  jsxA11y.flatConfigs.recommended,
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    ignores: ["**/*.test.tsx", "**/*.styles.ts", "**/*.stories.ts"],
    plugins: {
      "no-type-assertion": noTypeAssertion,
    },
    rules: {
      "no-type-assertion/no-type-assertion": "error", // This are always future bugs. Unless used in test files
    },
  },
  {
    settings: { react: { version: "detect" } },
    plugins: { react: pluginReact },
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/forbid-component-props": "error",
    },
  },
  {
    settings: { react: { version: "detect" } },
    plugins: { react: pluginReact },
    files: ["**/*.svg"],
    rules: {
      "react/no-unknown-property": "off",
    },
  },
  {
    plugins: {
      "react-hooks": reactHooks,
    },
    rules: {
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
    },
  },
  {
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
      "no-restricted-syntax": [
        "error",
        {
          selector: "JSXAttribute[name.name='className']",
          message: "Using 'className' is forbidden.",
        },
        {
          selector: "JSXAttribute[name.name='style']",
          message: "Using 'style' is forbidden.",
        },
      ],
    },
  },
];
