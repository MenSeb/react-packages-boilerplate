import path from 'path';
import { merge } from 'webpack-merge';
import config, { __dirname } from './webpack.config.js';

export default merge(config, {
  devtool: 'source-map',
  entry: path.resolve(__dirname, 'lib/index.js'),
  externals: {
    react: {
      amd: 'react',
      commonjs: 'react',
      commonjs2: 'react',
      root: 'React',
    },
    'react-dom': {
      amd: 'react-dom',
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      root: 'ReactDOM',
    },
  },
  mode: 'production',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },
});
