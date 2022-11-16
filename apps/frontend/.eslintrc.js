module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	parser: "@typescript-eslint/parser",
	parserOptions: {
		project: "tsconfig.json",
		tsconfigRootDir: __dirname,
		sourceType: "module",
		ecmaVersion: "latest",
	},
	root: true,
	extends: ["plugin:react/recommended", "prettier", "standard-with-typescript"],
	overrides: [],
	ignorePatterns: [
		"**/*.graphql.ts",
		"**/*.d.ts",
		".eslintrc.js",
		"",
		"jest.config.js",
		"webpack-hmr.config.js",
		".lintstagedrc.js",
	],
	settings: {
		react: {
			version: "detect",
		},
	},
	plugins: ["react", "unused-imports", "prettier"],
	rules: {
		"@typescript-eslint/explicit-function-return-type": "off",

		"prettier/prettier": ["warn"],
		"@typescript-eslint/no-empty-interface": "off",
		"no-tabs": "off",
		indent: ["warn", "tab"],
		"react/react-in-jsx-scope": "off",
		"no-unused-vars": "off",
		"@typescript-eslint/no-unused-vars": "off",
		"@typescript-eslint/indent": ["warn", "tab"],
		"unused-imports/no-unused-imports": "warn",
		"unused-imports/no-unused-vars": [
			"warn",
			{
				vars: "all",
				varsIgnorePattern: "^_",
				args: "after-used",
				argsIgnorePattern: "^_",
			},
		],
	},
};

