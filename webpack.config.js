const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const babelRoule = {
    test: /\.js$/,
    loader: 'babel-loader',
}

const cssRoule = {
    test: /\.css$/,
    use: ['style-loader', 'css-loader']
}

const imageRule = {
    test: /\.(png|svg|jpg|jpeg|gif)$/i,
    use: {
        loader: 'file-loader',
        options: {
            name: '[name].[ext]',
            outputPath: 'images', // Carpeta de salida para las imágenes
        },
    },
}

module.exports = (env, argv) => {
    const {mode} = argv
    const isProduction = mode === 'production'
    return {
        entry: './src/index.js',
        output: {
            filename: isProduction 
                ? '[name].[contenthash].bundle.js' // crea un archivo nuevo con hash distinto cada build para controlar el cache
                :'main.js',
            path: path.resolve(__dirname, 'build')
        },
        plugins: [
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                filename: 'index.html',
                template: 'src/index.html' 
            }),
            new HtmlWebpackPlugin({
                filename: 'pages/home.html',
                template: './src/pages/home.html',
                chunks: ['home']
            }),
            new HtmlWebpackPlugin({
                filename: 'pages/about.html',
                template: './src/pages/about.html',
                chunks: ['about']
            }),
            new HtmlWebpackPlugin({
                filename: 'pages/contact.html',
                template: './src/pages/contact.html',
                chunks: ['contact']
            }),
        ],
        module: {
            rules: [
                // babelRoule,
                cssRoule,
                imageRule
            ]
        },
        devServer: {
            open: true,
            port: 3000,
            compress: true,
        },
        // devtool: 'source-map' // mejor para debugear, pero lastra mucho rendimiento
    }
}