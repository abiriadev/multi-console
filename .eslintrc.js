module.exports = {
    env: {
        // "browser": true,
        commonjs: true,
        es6: true,
    },
    extends: [
        'eslint:recommended',
        'eslint-config-airbnb-base',
        'prettier',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 12,
    },
    rules: {
        // 'import/extensions': 'off',
        'import/no-unresolved': 'off',
        'no-console': 'off',
        'no-shadow': 0,
        'no-useless-constructor': 0,
        'no-empty-function': 0,
        // '@typescript-eslint/ban-types': 0,
        // 'no-unused-vars': 0,
        // 'no-use-before-define': 0,
        // '@typescript-eslint/no-explicit-any': 0,
        // 'no-unused-expressions': 0,
        // 'no-await-in-loop': 0,
        // '@typescript-eslint/no-unused-vars': 0,
    },
}