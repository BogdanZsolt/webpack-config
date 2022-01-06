const path = require('path')
const miniCssExtractPlugin = require('mini-css-extract-plugin')
let mode = 'development'

if (process.env.NODE_ENV === 'production') {
 mode = 'production'
}

module.exports = {
  mode: mode,

  module: {
    rules: [
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [miniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [new miniCssExtractPlugin()],

  devtool: "source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    hot: true,
    port: 9000,
  },
};