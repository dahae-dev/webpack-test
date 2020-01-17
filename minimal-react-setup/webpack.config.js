// const webpack = require('webpack');
// const path = require('path');
const HTMLWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  // entry: './src/index.js',
  // output: {
  //   path: path.join(__dirname, 'dist'), // __dirname + '/dist',
  //   publicPath: '/',
  //   filename: 'bundle.js'
  // },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader' // allows us to teach webpack how to run babel when webpack sees certain files
      },
      {
        test: /\.scss$/,
        use: [ // style-loader가 먼저 와야 에러가 나지 않음
          'style-loader', // Take CSS and adds it to the DOM by injecting a <style> tag
          'css-loader', // Allows webpack to load our CSS assets
          'sass-loader' // help webpack to compile sass to css. dependent on another package node-sass
        ] 
      },
      {
        test: /\.html$/,
        use: 'html-loader' // tell Webpack to produce an HTML page
      }
    ]
  },
  // resolve: {
  //   extensions: ['*', '.js', '.jsx']
  // },
  plugins: [
    // new webpack.HotModuleReplacementPlugin(),
    new HTMLWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ],
  // devServer: {
  //   contentBase: path.join(__dirname, 'dist'), // './dist',
  //   hot: true
  // },
  devtool: 'cheap-module-eval-source-map'
}

// https://dev.to/iamismile/how-to-setup-webpack-and-babel-for-react-59ph
// @babel/core :- It allows us to run babel from tools like webpack.