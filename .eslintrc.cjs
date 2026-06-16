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
        "import",
        "no-only-tests",
        "perfectionist",
        "promise",
        "react-refresh",
        "sort-destructure-keys",
        "typescript-sort-keys",
    ],
    rules: {
        // General
        "dot-notation": "error",
        "eqeqeq": "error",
        "no-duplicate-imports": "error",
        "no-else-return": "error",
        "no-extra-boolean-cast": 0,
        "no-nested-ternary": "error",
        "no-only-tests/no-only-tests": "error",
        "no-param-reassign": "error",
        "no-unused-vars": "off",
        "promise/catch-or-return": ["error", { allowFinally: true }],
        "promise/no-nesting": "error",
        "@typescript-eslint/no-unused-vars": [
            "warn",
            {
                argsIgnorePattern: "^_",
                varsIgnorePattern: "^_",
                caughtErrorsIgnorePattern: "^_",
            },
        ],
        "no-magic-numbers": [
			"error",
			{
				"ignore": [-1, 0, 1],
				"ignoreArrayIndexes": true,
				"ignoreDefaultValues": true,
			},
		],
        "no-var": 1,
        "object-shorthand": [1, "properties"],
        "prefer-const": 1,
        "quotes": [
            1,
            "double",
            { avoidEscape: true, allowTemplateLiterals: true },
        ],
        "semi": [2, "always"],
        "sort-destructure-keys/sort-destructure-keys": "error",
        "sort-keys": "error",
        "yoda": "error",

		//=================================== Layout & Formatting ===================================//
        "arrow-parens": [1, "always", { requireForBlockBody: false }],
        "comma-dangle": ["error", "always-multiline"],
        "keyword-spacing": [1],
        "no-multiple-empty-lines": ["error", { max: 1 }],
        "no-trailing-spaces": 1,
        "object-curly-spacing": ["error", "always"],
        "padding-line-between-statements": [
            1,
            { blankLine: "always", prev: "*", next: "return" },
        ],
        "space-before-blocks": 1,

		//=================================== React ===================================//
        "jsx-quotes": ["error", "prefer-double"],

        "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
        "react/display-name": 0,
        "react/jsx-boolean-value": "error",
        "react/jsx-curly-brace-presence": "error",
        "react/jsx-key": 1,
        "react/jsx-no-duplicate-props": 1,
        "react/jsx-sort-props": ["error", { reservedFirst: ["key"] }],
        "react/jsx-uses-react": 1,
        "react/jsx-uses-vars": 1,
        "react/no-danger": 1,
        "react/no-direct-mutation-state": 1,
        "react/no-unknown-property": 1,
        "react/prefer-es6-class": 1,
        "react/prop-types": 1,
        "react/react-in-jsx-scope": "off",
        "react/self-closing-comp": 1,

        //=================================== Imports ===================================//
        "import/order": [
            "error",
            {
                alphabetize: {
                    order: "asc",
                },
                groups: [
                    "builtin",
                    "external",
                    "internal",
                    ["parent", "sibling", "index"],
                    "object",
                    "type",
                ],
                "newlines-between": "always",
                pathGroups: [
                    {
                        pattern: "react",
                        group: "builtin",
                        position: "before",
                    },
                    {
                        pattern: "~*/**",
                        group: "external",
                        position: "after",
                    },
                ],
                pathGroupsExcludedImportTypes: ["react"],
            },
        ],

		//=================================== Typescript ===================================//
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/naming-convention": [
            "error",
            {
                selector: "class",
                format: ["PascalCase"],
            },
            {
                selector: "enum",
                format: ["UPPER_CASE"],
            },
            {
                selector: "enumMember",
                format: ["UPPER_CASE"],
            },
            {
                selector: "interface",
                format: ["PascalCase"],
            },
            {
                selector: "typeAlias",
                format: ["PascalCase"],
            },
        ],
        "@typescript-eslint/no-empty-interface": "error",
        "typescript-sort-keys/interface": "error",
        "typescript-sort-keys/string-enum": "error",
    },
    settings: {
        react: { version: "detect" },
    },
    overrides: [
        {
            files: ["src/data/**/*.ts"],
            rules: {
                "sort-keys": "off",
                "perfectionist/sort-objects": [
                    "error",
                    {
                        type: "alphabetical",
                        order: "asc",
                        groups: ["name", "unknown"],
                        "custom-groups": { name: "name" },
                    },
                ],
            },
        },
        {
			"files": ["*.stories.tsx", "*.test.*"],
			"rules": {
				"no-magic-numbers": ["off"],
			},
		},

    ],
};
