import path from 'path';
import { merge } from 'webpack-merge';
import config, { __dirname } from './webpack.config.js';

export default merge(config, {
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'public'),
    },
  },
  devtool: 'eval-source-map',
  entry: path.resolve(__dirname, 'public/index.tsx'),
  mode: 'development',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'public'),
  },
});
