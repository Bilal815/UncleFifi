// DEPS HERE
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const autoprefixer = require('autoprefixer')

module.exports = {
    // the output bundle will be optimized for production by default...
    // NOT suitable for development
    mode: 'production',

    // the app entry point is /src/index.js
    entry: path.resolve(__dirname, 'src', 'index.jsx'),
    // new addition here....
    // target: 'node', // support native modules
    output: {
        // the output of the webpack build will be in /dist directory
        path: path.resolve(__dirname, 'dist'),
        // publicPath: '/',
        // the filename of the JS bundle will be bundle.js
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devtool: "source-map",
    module: {
        rules: [
            // allows us to read js and jsx files...
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            // will allow me to use CSS
            /*
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    { loader: 'style-loader' },
                    { 
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: "[name]__[local]___[hash:base64:5]",
                            },														
                            sourceMap: true
                        }
                     },
                     { 
                         loader: 'postcss-loader',
                         options: {
                             ident: 'postcss',
                             plugins: () => [
                                 autoprefixer({})
                             ]
                         }
                      }
                ]
            },
            */
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            // will allow us to use images
            {
                test: /\.(png|jpe?g|gif)$/,
                loader: 'url-loader?limit=10000&name=img/[name].[ext]'
            }
        ]
    },
    // add a custom index.html as the template
    plugins: [
        new HtmlWebpackPlugin(
            { 
                template: path.resolve(__dirname, 'public', 'index.html'),
                title: "Portfolio",
                favicon: path.resolve(__dirname, "public", "favicon.png")
            })
    ]
}