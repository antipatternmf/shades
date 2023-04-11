module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 11,
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json', './tsconfig.node.json']
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'no-param-reassign': 'off',
    'arrow-body-style': 0,
    'class-methods-use-this': 0,
    'import/prefer-default-export': 0,
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'react/react-in-jsx-scope': 0,
    '@typescript-eslint/ban-ts-comment': 1,
    'react/require-default-props': 0,
    'react/button-has-type': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'react/jsx-props-no-spreading': 0,
    'object-curly-newline': 0,
    '@typescript-eslint/indent': 0,
    'operator-linebreak': 0,
    'implicit-arrow-linebreak': 0,
    'function-paren-newline': 0
  }
}
