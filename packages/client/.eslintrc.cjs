module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 11,
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json', './tsconfig.node.json'],
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'react/jsx-props-no-spreading': 'off',
    "react/require-default-props": "off",
    'no-param-reassign': 'off',
    'arrow-body-style': 0,
    'class-methods-use-this': 0,
    'import/prefer-default-export': 0,
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'react/react-in-jsx-scope': 0,
    '@typescript-eslint/ban-ts-comment': 1
  },
};
