const path = require('path');
const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      // ... other rules
    ],
  },
};
