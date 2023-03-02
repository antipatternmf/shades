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
    'no-param-reassign': 'off',
    'arrow-body-style': 0,
    'import/prefer-default-export': 0,
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'react/react-in-jsx-scope': 0,
    '@typescript-eslint/ban-ts-comment': 1,
    "react/jsx-boolean-value": "off",
    "jsx-a11y/label-has-associated-control": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-noninteractive-element-interactions": "off",
  },
};
