const nodeExternals = require('webpack-node-externals')
module.exports = {
  entry: './src/functions/graphql/index.ts',
  output: {
    filename: 'index.js',
    libraryTarget: 'this'
  },
  target: 'node',
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true
        }
      }
    ]
  },
  resolve: {
      extensions: [ '.ts', '.tsx', '.js' ]
  },
  externals: [nodeExternals()]
};