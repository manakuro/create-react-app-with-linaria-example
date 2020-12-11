module.exports = {
  extends: [
    'react-app',
    'eslint:recommended',
    'plugin:prettier/recommended',
    'prettier/react',
  ],
  plugins: ['babel'],
  rules: {
    quotes: ['error', 'single'],
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-unused-vars': process.env.NODE_ENV === 'production' ? 2 : 0,
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: false,
        trailingComma: 'all',
      },
    ],
  },
}
