const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    output: {
        filename: 'js/[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
    },
    plugins: [
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                { from: 'src/assets/images', to: 'images' },
                { from: 'src/assets/models', to: 'models' },
                { from: 'src/assets/sounds', to: 'sounds' },
                { from: 'public', to: '' }, // Copies everything from public to the root of dist
            ],
        }),
    ],
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
});
