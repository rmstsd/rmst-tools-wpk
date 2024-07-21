import * as path from 'path'
import * as webpack from 'webpack'
import webpackPaths from './utils/wpk.paths'

const config: webpack.Configuration = {
  watch: true,

  mode: 'development',
  target: 'electron-main',
  devtool: 'inline-source-map',
  entry: path.join(webpackPaths.srcMainPath, 'index.ts'),
  output: {
    path: webpackPaths.outputMainPath,
    filename: 'index.js',
    clean: true
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  }
}

export default config
