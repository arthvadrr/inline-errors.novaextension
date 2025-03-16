export default [
	{
		ignores: ['node_modules/'],
	},
	{
		files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
		},
		rules: {
			'no-unused-vars': 'warn',
			'no-undef': 'error',
			'no-extra-semi': 'error',
		},
	},
];
