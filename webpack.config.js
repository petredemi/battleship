const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    constructors: './src/constructors.js',
    test: './src/battleship.test.js',
    you : './src/you.js',
    computer: './src/computer.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },

  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
      template: './src/index.html',
    }),
  ],
  module: {
       rules: [
        // {
        //   test: /\.jsx?$/,
       //    exclude: ['node_modules'],
        //   use: ['babel-loader'],
        // },
         {
           test: /\.css$/i,
           use: ['style-loader', 'css-loader'],
         },
         {
           test: /\.(png|svg|jpg|jpeg|gif|wav|mp3)$/i,
          // use: [
          //     { 
          //         loader: 'file-loader',
          //         options: {
          //                name: '[./icons][name].[png]',
          //         }
          //     },
          // ],
           type: 'asset/resource',
         },
         {
           test: /\.(woff|woff2|eot|ttf|otf)$/i,
           type: 'asset/resource',
         },
         {
           test: /\.html$/i,
           loader: "html-loader",
         }      
    ],
  },
       resolve: {
         alias: {
           config$: './configs/app-config.js',
           react: './vendor/react-master',
         },
         extensions: ['.js', '.jsx'],
         modules: [
           'node_modules',
           'bower_components',
           'shared',
           '/shared/vendor/modules',
         ],
       },

};
