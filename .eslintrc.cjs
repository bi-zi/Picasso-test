module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:@typescript-eslint/recommended-requiring-type-checking",
		"plugin:react-hooks/recommended",
		"plugin:import/errors",
		"plugin:import/warnings",
		"plugin:import/typescript",
		"plugin:prettier/recommended",
	],
	settings: {
		"import/resolver": {
			"typescript": {}
		},
	},
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
		project: true,
		tsconfigRootDir: __dirname,
	},
	plugins: ["react-refresh", "prettier"],
	rules: {
		"import/order": [
			"error",
			{
				groups: [
					"builtin",
					"external",
					["parent", "sibling"],
					"index",
					"internal",
				],
				pathGroups: [
					{
						pattern: "@/src/**",
						group: "internal",
						position: "after",
					},
				],
				pathGroupsExcludedImportTypes: [],
				"newlines-between": "always",
				alphabetize: {
					order: "asc",
					caseInsensitive: true,
				},
			},
		],
		"react-refresh/only-export-components": [
			"warn",
			{ allowConstantExport: true },
		],
		"@typescript-eslint/no-misused-promises": "off",
		"@typescript-eslint/no-non-null-assertion": "off",
	},
};
