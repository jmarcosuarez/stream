const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/index.js',
  ],
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        eslint: {
          configFile: path.join(__dirname, './.eslintrc'),
        },
        postcss: () => {
          return [autoprefixer];
        },
      },
    }),
    new webpack.ProvidePlugin({
      fetch: 'imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch',
    }),
  ],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/, // both .js and .jsx
        loader: 'eslint-loader',
        include: path.resolve(process.cwd(), 'src'),
        options: {
          fix: true,
        },
      },
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
          options: { presets: ['es2015'] },
        }],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { modules: true }
          },
        ],
      },
      {
        test: /\.(sass|scss)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },

      // Loaders for other file types can go here

    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: './dist',
    hot: true,
    historyApiFallback: true,
  },
};
