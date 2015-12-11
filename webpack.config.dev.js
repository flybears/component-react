var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'webpack-hot-middleware/client',
        './demo/main.js'
    ],
    output: {
        path: __dirname + '/__build__',
        filename: 'bundle.js',
        publicPath: '/__build__/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel'],
                include: path.join(__dirname, 'demo')
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            }
        ]
    }
};