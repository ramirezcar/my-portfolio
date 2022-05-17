/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution")

module.exports = {
  root: true,
  env: {
    node: true,
    es2021: true,
    "vue/setup-compiler-macros": true,
  },
  parser: "vue-eslint-parser",
  extends: [
    "plugin:vue/vue3-recommended",
    "eslint:recommended",
  ],
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2021,
    ecmaFeatures: {
      globalReturn: false,
      impliedStrict: false,
      jsx: false,
    },
  },
  rules: {
    "semi": ["error", "never"],
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    indent: ["error", 2],
    "vue/script-indent": ["error", 2, { baseIndent: 1, switchCase: 1 }],
    "vue/no-unused-vars": "error",
    "vue/script-setup-uses-vars": "error",
    "vue/component-tags-order": [
      "error",
      {
        order: [["script", "template"], "style", "i18n"],
      },
    ],
    "vue/multi-word-component-names": ["error", {
      "ignores": ['Fa']
    }],
    "arrow-body-style": ["error", "as-needed"],
    "function-paren-newline": ["error", "multiline"],
  },
  overrides: [
    {
      files: ["*.vue"],
      rules: {
        indent: "off",
      },
    },
  ],
}