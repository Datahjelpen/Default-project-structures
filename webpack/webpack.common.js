const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/js/project_name.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'project_name.[chunkhash].js',
  },
  // externals: [
  //   {
  //     'window': 'window'
  //   }
  // ],
}
