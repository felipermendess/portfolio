import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  {
    rules: {
      semi: "error",
      "no-undef": "error",
      "no-unused-vars": "warn",
      "no-console": "warn",
      eqeqeq: "error",
      "space-before-blocks": "error",
      indent: ["error", 2],
    },
  },
];
