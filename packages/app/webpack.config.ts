import * as webpack from 'webpack';
import path from 'path';
import { fileURLToPath } from 'url';

export const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const config: webpack.Configuration = {
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\\.[jt]sx?$/,
        use: ['ts-loader'],
      },
      {
        exclude: /node_modules/,
        test: /.s[ac]ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    modules: ['node_modules', path.resolve(__dirname, 'src')],
  },
};

export default config;
