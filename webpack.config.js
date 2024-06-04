var webpack = require("webpack");
const path = require("path");
const fs = require('fs');


// include the js minification plugin

// include the css extraction and minification plugins
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// include the HTML templating plugin
const HTMLWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

function generateHtmlPlugins(templateDir) {
    const templateFiles = fs.readdirSync(path.resolve(__dirname, templateDir))
    return templateFiles.map(item => {
        // Split names and extension
        const parts = item.split('.')
        const name = parts[0]
        const extension = parts[1]
        return new HTMLWebpackPlugin({
            filename: `${name}.html`,
            template: path.resolve(__dirname, `${templateDir}/${name}.${extension}`)
        })
    })
}

// We will call the function like this:
const htmlPlugins = generateHtmlPlugins('./src/pages')

module.exports = {
    mode: 'development',
    entry: {
        app: ["./src/js/app.js", "./src/scss/main.scss"],
    },
    output: {
        filename: "js/main.[hash:8].js",
        path: path.join(__dirname, "./dist/"),
        chunkFilename: 'js/chunks/[name].js'

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
            directory: path.resolve(__dirname, '../dist'),
            watch: true
        },
        proxy: {
            '*': {
                target: `http://localhost/`,
            },
        },
    },

    module: {
        rules: [
            // perform js babelization on all .js files
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: '../dist/fonts/',
                        publicPath: '../',
                        emitFile: true,
                        esModule: false,
                    }
                }]
            },
            {
                test: /.*\.(gif|png|jpe?g|svg|webp)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: './images/[name].[ext]',
                            outputPath: 'images/',
                            publicPath: '../dist/images/'
                        }
                    },
                ]
            },

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
                                includePaths: ['src/scss']
                            }
                        }


                    }
                ]
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "css/main.[contenthash:8].css",
            chunkFilename: 'chunks-css/[name][contenthash:8].css',

            insert: (linkTag) => {
                const preloadLinkTag = document.createElement('link')
                preloadLinkTag.rel = 'preload'
                preloadLinkTag.as = 'style'
                preloadLinkTag.href = linkTag.href
                document.head.appendChild(preloadLinkTag)
                document.head.appendChild(linkTag)
            }

        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: 'src/images', to: 'images/' },
                { from: 'src/fonts', to: 'fonts/' },

            ]

        }),


    ].concat(htmlPlugins),

    resolve: {
        alias: {
            jquery: "jquery/src/jquery"
        }
    }
};