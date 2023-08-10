import * as path from 'path';
import * as url from 'url';
import CopyWebpackPlugin from 'copy-webpack-plugin';

export const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

export default {
  devServer: {
    historyApiFallback: true,
    port: process.env.FRONTEND_PORT,
    proxy: {
      '/api': {
        target: `http://localhost:${process.env.BACKEND_PORT}`,
        router: () => `http://localhost:${process.env.FRONTEND_PORT}`,
        logLevel: 'debug',
      },
    },
    static: {
      directory: path.resolve(__dirname, 'public'),
    },
  },
  devtool: 'source-map',
  entry: path.resolve(__dirname, 'src/index.tsx'),
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.tsx?$/,
        use: ['ts-loader'],
      },
      {
        exclude: /node_modules/,
        test: /\.s[ac]ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        exclude: /node_modules/,
        test: /\.svg$/,
        use: [{ loader: '@svgr/webpack', options: { svgo: false } }],
      },
    ],
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [{ from: 'public' }, { from: 'lib/server.js' }],
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.scss', '.sass'],
    modules: ['node_modules', path.resolve(__dirname, 'src')],
  },
};
