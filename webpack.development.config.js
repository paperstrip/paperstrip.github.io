
const webpack = require('webpack')
const path = require('path');
const globalPath = "dist/";
const glob = require('glob');
const resolve = require('path').resolve;



const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

var config = {
  // TODO: Add common Configuration
  module: {

    rules: [

      {
        test: /\.(frag|vert|glsl)$/,
        use: [
          {
            loader: 'glsl-shader-loader',
            options: {}
          }
        ]
      },
      {
        test: /\.(glb|gltf|bin)$/,
        use:
          [
            {
              loader: 'file-loader',
              options:
              {
                outputPath: 'dist/assets/model'
              }
            }
          ]
      },
      {
        test: /\.js$|jsx/,
        exclude: /node_modules/,

      },
      // compile all .scss files to plain old css
      {
        test: /\.(scss|css|sass)$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              url: false,
            },
          },

          {
            loader: 'postcss-loader',

          },
          {
            loader: "sass-loader",
            options: {
              additionalData: '@import "common/_mixin";@import "common/_responsive";@import "common/_fonts";@import "common/_variables";',
              sassOptions: {
                includePaths: ['assets/stylesheets']
              }
            }


          }
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
              publicPath: 'dist/assets/fonts/'
            }
          },
        ]
      },
      {
        test: /.*\.(gif|png|jpe?g|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/',
              publicPath: 'dist/assets/images/'
            }
          },
        ]
      }
    ]
  },
};

var mainConf = Object.assign({}, config, {
  mode: "development",
  name: "mainConf",
  cache: false,

  stats: {
    colors: true
  },
  entry: {
    app: ['src/js/app.js', 'scr/scss/main.scss'],
  },

  output: {
    filename: '[name].min.js',
    path: path.resolve(globalPath),
    publicPath: 'dists/assets/',
    chunkFilename: 'chunks-min/[name].js'
  },
  devServer: {
    compress: true,
    hot: false,
    port: 3000,
    liveReload: true,
    host: '0.0.0.0', // Rend le serveur accessible à toutes les adresses IP sur le réseau local
    allowedHosts: 'all',
    headers: { 'Access-Control-Allow-Origin': '*' },
    static: {
      directory: path.resolve(__dirname, '/dist'),
      watch: true
    },
    proxy: {
      '*': {
        target: `http://localhost/`,
      },
    },
  },
  plugins: [
    /*new BrowserSyncPlugin(
      {
        host: 'localhost',
        port: 3000,

        proxy: 'http://localhost/morphose/'
      },
      {
        reload: false
      }
    ),*/
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    }),
    /*new webpack.ProvidePlugin({
      $: require.resolve('jquery'),
      jQuery: require.resolve('jquery')
    }),*/

    new MiniCssExtractPlugin({
      filename: 'main.min.css',
      chunkFilename: 'chunks-css/[name].css'
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/images', to: 'dist/assets/images/' },
      ]

    }),

  ],


});

module.exports = [
  mainConf
];

function toObject(paths) {
  var names = {};

  paths.forEach(function (path) {
    // you can define entry names mapped to [name] here
    names[path.split('/').slice(-1)[0]] = path;
  });

  return names;
}
