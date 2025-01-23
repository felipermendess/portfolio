import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  {
    rules: {
      semi: "error",
      "no-undef": "warn",
      "no-unused-vars": "error",
      "no-console": "error",
      eqeqeq: "error",
      "space-before-blocks": "error",
      indent: ["error", 2],
      "keyword-spacing": "error",
      "no-multiple-empty-lines": "error",
      "eol-last": ["error", "always"],
      "no-trailing-spaces": "error",
      "operator-assignment": "error",
      "no-inner-declarations": [
        "error",
        "functions",
        { blockScopedFunctions: "disallow" },
      ],
    },
  },
];
