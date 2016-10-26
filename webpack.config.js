var path = require('path');

require('es6-promise').polyfill();

module.exports = {
  entry: {
        root: './client/app/Root.jsx'
    },
  output: {
    path: './public/',
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          plugins: ['transform-decorators-legacy' ],
          presets: ["es2015", "react", "stage-0"]
        }
      },
        { test: /\.css$/, loader: "style-loader!css-loader" },
        {
               test: /\.(eot|svg|ttf|woff|woff2)$/,
               loader: 'file?name=adapublic/fonts/[name].[ext]'
           },
    ]
  },
  resolve: {
    alias: {
      react: path.resolve('./node_modules/react'),
    },
  }
};

