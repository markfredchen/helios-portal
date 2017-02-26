import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const extractCss = new ExtractTextPlugin('app.[contenthash].css');
const extractAntd = new ExtractTextPlugin('antd.[contenthash].css');

const updateIndexHtml = require('./tools/updateIndexHTML');

const GLOBALS = {
    'process.env.NODE_ENV': JSON.stringify('production'),
    __DEV__: false
};

export default {
    entry: ['babel-polyfill', './src/index'],
    target: 'web',
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/',
        filename: 'app.[chunkhash].js',
        chunkFilename: '[id].[chunkhash].js'
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.DefinePlugin(GLOBALS),
        extractAntd,
        extractCss,
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new HtmlWebpackPlugin({
            filename: `${__dirname}/dist/index.html`,
            template: `${__dirname}/src/index.html`,
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
            }
        }),
        new updateIndexHtml()
    ],
    module: {
        loaders: [
            {test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel-loader']},
            {test: /\.eot(\?v=\d+.\d+.\d+)?$/, loader: 'file'},
            {test: /\.(woff|woff2)$/, loader: 'file-loader?prefix=font/&limit=5000'},
            {test: /\.ttf(\?v=\d+.\d+.\d+)?$/, loader: 'file-loader?limit=10000&mimetype=application/octet-stream'},
            {test: /\.svg(\?v=\d+.\d+.\d+)?$/, loader: 'file-loader?limit=10000&mimetype=image/svg+xml'},
            {test: /\.(jpe?g|png|gif)$/i, loaders: ['file']},
            {test: /\.ico$/, loader: 'file-loader?name=[name].[ext]'},
            {test: /(\.css|\.scss)$/, include: path.join(__dirname, 'node_modules/antd'), loader: extractAntd.extract('css')},
            {test: /(\.css|\.scss)$/, include: path.join(__dirname, 'src'), loader: extractCss.extract('css!postcss!sass')}
        ]
    }
};