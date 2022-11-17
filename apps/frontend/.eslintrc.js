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
	extends: ["plugin:react/recommended", "standard-with-typescript", "prettier"],
	overrides: [],
	ignorePatterns: [
		"**/*.graphql.ts",
		"**/*.d.ts",
		".eslintrc.js",
		"schema.graphql",
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
		"@typescript-eslint/member-delimiter-style": [
			"warn",
			{
				multiline: {
					delimiter: "semi",
					requireLast: true,
				},
				singleline: {
					delimiter: "semi",
					requireLast: false,
				},
				multilineDetection: "brackets",
			},
		],
		"@typescript-eslint/semi": "off",
		"@typescript-eslint/comma-dangle": "off",
		"@typescript-eslint/explicit-function-return-type": "off",
		"@typescript-eslint/quotes": ["warn", "double"],
		"prettier/prettier": ["warn"],
		"@typescript-eslint/no-empty-interface": "off",
		"no-tabs": "off",
		indent: "off",
		"@typescript-eslint/space-before-function-parentheses": "off",
		"react/react-in-jsx-scope": "off",
		"no-unused-vars": "off",
		"@typescript-eslint/no-unused-vars": "off",
		"@typescript-eslint/indent": "off",
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

