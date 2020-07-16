module.exports = {
  root: true,
  extends: '@react-native-community',
  plugins: ['react', 'jsx-a11y', 'import'],
  rules: {
    'react/jsx-filename-extension': ['off'],
    'linebreak-style': ['off'],
    'no-undef': ['error'],
    'react/sort-comp': ['off'],
    'react/prefer-stateless-function': ['off'],
    'no-use-before-define': ['off'],
    'no-useless-concat': ['off'],
  },
};
