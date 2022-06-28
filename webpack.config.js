const path = require("path");

module.exports = {
  mode: "development",
  entry: "./client/src/index.js",
  output: {
    path: path.resolve(__dirname, "./client/public"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
        }
      }
      // ,{
      //   test: /\.scss$/,
      //   exclude: /(node_modules)/,
      //   use: [
      //     {loader: 'style-loader'},
      //     {loader: 'css-loader'},
      //     {loader: 'postcss-loader',
      //       options: {
      //         postcssOptions: {
      //           plugins: function(){
      //             return [require('autoprefixer')]
      //           }
      //         }
      //       }
      //     },
      //     {loader: 'sass-loader'}
      //   ]
      // }
      ,{
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
};
