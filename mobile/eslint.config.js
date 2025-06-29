module.exports = {
    parser: '@typescript-eslint/parser',
    env: {
        jest: true,
        browser: true,
        es2021: true,
    },
    extends: [
        '@react-native-community',
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: [
        'react',
        'react-native',
        'react-hooks',
        'unused-imports',
        'import',
        '@typescript-eslint',
    ],
    rules: {
        semi: ['error', 'never'],
        'no-console': 2,
        'prettier/prettier': 2,
        'react/react-in-jsx-scope': 0,
        'no-use-before-define': 0,
        'no-unused-vars': 'error',
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/no-use-before-define': 0,
        'arrow-body-style': ['error', 'as-needed'],
        'import/order': [
            'error',
            {
                groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
                pathGroups: [
                    {
                        pattern: 'react',
                        group: 'builtin',
                    },
                    {
                        pattern: 'react-native',
                        group: 'builtin',
                    },

                    {
                        pattern: '@**',
                        group: 'internal',
                    },
                ],
                pathGroupsExcludedImportTypes: ['builtin'],
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true,
                },
            },
        ],
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
}
