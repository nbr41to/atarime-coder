module.exports = {
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'next/core-web-vitals',
    'plugin:storybook/recommended',
    'prettier',
  ],
  plugins: ['unused-imports', 'import'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'no-console': ['error'],
    'no-unused-vars': ['error'],
    'unused-imports/no-unused-imports': ['error'],
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'import/order': [
      'error',
      {
        groups: [
          'type',
          'builtin',
          'external',
          'internal',
          ['parent', 'sibling'],
          'object',
          'index',
        ],
        'newlines-between': 'always',
        pathGroupsExcludedImportTypes: ['builtin'],
        alphabetize: { order: 'asc', caseInsensitive: true },
        pathGroups: [
          // ここに書いた順序で間に1行空行をあけつつ整頓される
          { pattern: '@/libs/**', group: 'internal', position: 'before' },
          { pattern: '@/generated/**', group: 'internal', position: 'before' },
          // ... 省略
          {
            pattern: '@/components/**',
            group: 'internal',
            position: 'before',
          },
        ],
      },
    ],
    'import/no-default-export': ['error'],
    /* off */
    'react/jsx-props-no-spreading': ['off'],
    'import/prefer-default-export': ['off'],
    'import/extensions': ['off'],
    'arrow-body-style': ['off'],
    'jsx-a11y/anchor-is-valid': ['off'],
  },
  overrides: [
    {
      // 実はいらない
      files: ['*.stories.tsx', 'pages/**/*'],
      rules: {
        'import/no-default-export': 'off',
      },
    },
    {
      files: ['*.tsx'],
      rules: {
        'react/jsx-filename-extension': 'off',
      },
    },
  ],
};
