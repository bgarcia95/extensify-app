const path = require("path");

module.exports = {
  entry: "./src/app.js",
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        test: /\.s?css$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  devtool: "cheap-module-eval-source-map",
  devServer: {
    contentBase: path.join(__dirname, "public"),

    /* This is for BrowserRouter and will teel the dev-server to always serve up the index.html file for all unknown 404's 
    
    This tells the web-server that we will be handling routing via our client-side code and that should return the index for all 404 routes
    */
    historyApiFallback: true
  }
};

// loader (lets you customized the behaviour of webpack when it loads a given file. When a js file is used (for example converting es6 to es5))
