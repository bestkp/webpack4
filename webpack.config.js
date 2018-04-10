const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: "./src/index",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            { loader: "css-loader", options: { importLoaders: 1 } },
            "postcss-loader"
          ]
        })
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          use: [
            { loader: "css-loader", options: { importLoaders: 1 } },
            "postcss-loader",
            "less-loader"
          ],
          fallback: "style-loader"
        })
      },
      {
        test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 1024 * 1024
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: "[name].css",
      allChunks: false
    })
  ]
};
