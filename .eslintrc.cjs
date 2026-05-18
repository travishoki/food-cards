module.exports = {
    env: {
        browser: true,
        es2020: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react-hooks/recommended",
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
        "sort-destructure-keys/sort-destructure-keys": "error",
        "typescript-sort-keys/interface": "error",
        "typescript-sort-keys/string-enum": "error",
    },
}
