module.exports = {
    env: {
        browser: true,
        es2020: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:react/recommended",
        "plugin:prettier/recommended",
    ],
    ignorePatterns: ["dist"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: [
        "@typescript-eslint",
        "no-only-tests",
        "react-refresh",
        "sort-destructure-keys",
        "typescript-sort-keys",
    ],
    rules: {
        "no-only-tests/no-only-tests": "error",
        "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
        "react/react-in-jsx-scope": "off",
        "sort-destructure-keys/sort-destructure-keys": "error",
        "typescript-sort-keys/interface": "error",
        "typescript-sort-keys/string-enum": "error",
    },
    settings: {
        react: { version: "detect" },
    },
}
