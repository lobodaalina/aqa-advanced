import js from '@eslint/js';

export default [
	{
		...js.configs.recommended,

		ignores: ['build/**', 'coverage/**', 'node_modules/**', 'test.js'],

		files: ['**/*.js'],
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
		},

		rules: {
			indent: ['error', 'tab'],
			quotes: ['warn', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
			'arrow-parens': ['error', 'always'],
		},
	},
];
