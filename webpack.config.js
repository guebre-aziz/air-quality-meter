const path = require(`path`);
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require(`clean-webpack-plugin`);
const Dotenv = require('dotenv-webpack');
module.exports = {
  watch: true,

  mode: `development`,
  entry: {
    index: `./src/index.js`
  },

  output: {
    filename: `[name].bundle.js`,
    path: path.resolve(__dirname, `publics`)
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html')
    }),
    new CleanWebpackPlugin(),
    new Dotenv()
  ],

  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource'
      }
    ],
  },
};
