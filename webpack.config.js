module.exports = {
  // デフォルト↓
  entry: './src/index.js',
  output: {
    // デフォルト distフォルダ
    path: `${__dirname}/dist`,
    // デフォルト main.js
    filename: 'done.js',
  },
  // デフォルト production
  mode: 'development',
};