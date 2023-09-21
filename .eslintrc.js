module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@tanstack/eslint-plugin-query/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "react-hooks", "@tanstack/query"],
  rules: {
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    "react/jsx-filename-extension": [
      "warn",
      {
        extensions: [".tsx", ".jsx"],
      },
    ],
    "no-shadow": "off",
    "@typescript-eslint/explicit-function-return-type": [
      "off",
      { allowExpressions: true },
    ],
    "max-len": ["warn", { code: 150 }],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "import/prefer-default-export": "off",
    "react/jsx-curly-spacing": "off",
    "react/prop-types": "off",
    "no-multiple-empty-lines": [2, { max: 1 }],
    semi: "off",
    "@typescript-eslint/semi": ["error"],
    quotes: "off",
    "react/jsx-props-no-spreading": "off",
    "object-curly-newline": "off",
    "operator-linebreak": ["warn", "after"],
    "max-classes-per-file": ["error", 5],
    "react/no-array-index-key": "warn",
    "no-alert": "off",
    "no-unused-expressions": [
      "warn",
      { allowShortCircuit: true, allowTernary: true },
    ],
    "react/require-default-props": "off",
    "@tanstack/query/exhaustive-deps": "error",
    "@tanstack/query/prefer-query-object-syntax": "error",
  },
  overrides: [
    {
      // don't need this rule in non-ts files
      files: ["*.js", "*.jsx"],
      rules: {
        "@typescript-eslint/explicit-function-return-type": "off",
      },
    },
  ],
  settings: {
    "import/resolver": {
      typescript: {},
    },
  },
};
