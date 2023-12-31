// eslint-disable-next-line @typescript-eslint/no-var-requires
module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "react-hooks"],
  extends: ["airbnb-base", "plugin:@typescript-eslint/recommended", "prettier"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    "import/prefer-default-export": "off",
    "no-console": "warn",
    "no-unused-expressions": ["error", { allowShortCircuit: true }],
    "no-alert": "off",
    "no-restricted-globals": "off",
    "no-plusplus": "off",
    "import/no-unresolved": "off",
    "import/extensions": "off",
    "no-useless-escape": "off",
    "no-param-reassign": "warn",
    "class-methods-use-this": "warn",
    "no-new": "warn",
    "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
    "react-hooks/exhaustive-deps": "warn", // Checks effect dependencies
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": ["error"],
  },
};
