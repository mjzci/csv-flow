const path = require('path')
const Dotenv = require('dotenv-webpack')

module.exports = {
  entry: [
    'regenerator-runtime/runtime',
    path.resolve(__dirname, './resources/js/app.js')
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      api: path.resolve(__dirname, 'resources/js/api'),
      components: path.resolve(__dirname, 'resources/js/components'),
      config: path.resolve(__dirname, 'resources/js/config'),
      constants: path.resolve(__dirname, 'resources/js/constants'),
      prestyles: path.resolve(__dirname, 'resources/js/prestyles'),
      scenes: path.resolve(__dirname, 'resources/js/scenes'),
      stores: path.resolve(__dirname, 'resources/js/stores'),
      utils: path.resolve(__dirname, 'resources/js/utils')
    }
  },
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'app.js'
  },
  plugins: [new Dotenv()],
  devServer: {
    contentBase: path.resolve(__dirname, './public'),
    historyApiFallback: true
  }
}
