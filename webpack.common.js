const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require("path");
const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        "/assets": "./src/scripts/index.js"
    },
    plugins: [
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name]/stylesheets/index.css",
            chunkFilename: "[id].css"
        }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'tamsin.io',
            template: 'src/templates/index.pug',
            favicon: "src/assets/favicon.png",
            meta: {
                'viewport': 'width=device-width,initial-scale=1,shrink-to-fit=no',
                'theme-color': '#1d1d1d',
                'description': 'Vue+Pug+Sass mockup by Dylan Davies'
            }
        })
    ],
    devtool: "source-map",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name]/scripts/index.js"
    },
    resolve:{
        alias: {
            '@': path.resolve('src'),
            '{p}': path.resolve('src/pages'),
            '{c}': path.resolve('src/components')
        }
    },
    module: {
        rules: [
            {
                test: /\.pug$/,
                oneOf: [
                  {
                    resourceQuery: /^\?vue/,
                    use: ['pug-plain-loader']
                  },
                  {
                    use: ['pug-loader']
                  }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                  MiniCssExtractPlugin.loader,
                  {
                      loader: 'css-loader',
                      options: {
                          importLoaders: 1
                      }
                  },
                  {loader: 'postcss-loader',
                    options: {
                        plugins: () => [autoprefixer({
                            grid:true
                        })]
                    },
                  },
                  {
                    loader: 'sass-loader'
                  }
                ],
              },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'],
                    plugins: ['@babel/plugin-transform-classes']
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            },
            {
              test: /\.(png|jpe?g|gif|svg|ttf|woff|woff2)(\?.*)?$/,
              use: [
                {
                    loader: 'url-loader',
                    options: {
                        esModule: false,
                        limit: 10000,
                        name:'/assets/img/[hash].[ext]' 
                    }
                }
              ]
            },
        ]
    }
}