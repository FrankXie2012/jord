const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        index: 'src/js/index.js'
    },
    output: {
        // filename: 'bundle-[hash].js',
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'eval-source-map',
    // devtool: 'source-map',
    devServer: {
        contentBase: "src/html", // 本地服务器所加载的页面所在的目录
        historyApiFallback: true, // 不跳转
        inline: true, // 实时刷新
        port: 9090
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: {
                loader: "babel-loader"
            },
            include: path.join(__dirname, 'src')
                // }, {
                //     test: /\.css$/,
                //     use: [{
                //         loader: "style-loader"
                //     }, {
                //         loader: "css-loader"
                //     }]
                // }, {
                //     test: /\.scss$/,
                //     use: [{
                //         loader: "style-loader"
                //     }, {
                //         loader: "css-loader"
                //     }, {
                //         loader: "sass-loader"
                //     }]
        }, {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: "css-loader"
            })
        }, {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: ['css-loader', 'sass-loader']
            })
        }, {
            test: /\.(png|woff|woff2|eot|ttf|svg|jpg|gif)$/,
            loader: 'url-loader?limit=100000'
        }]
    },
    plugins: [
        // 设置生产环境全局变量，以便告诉所有类库，多虑不必要的代码
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new HtmlWebpackPlugin({
            template: __dirname + "/src/html/index.tmpl.html",
            // minify: {
            //     removeComments: true, //去注释
            //     collapseWhitespace: true, //压缩空格
            //     removeAttributeQuotes: true //去除属性引用
            // },
            filename: 'index.html',
            chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            template: __dirname + "/src/html/list.tmpl.html",
            filename: 'list.html',
            chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            template: __dirname + "/src/html/news.tmpl.html",
            filename: 'news.html',
            chunks: ['index']
        }),
        // new webpack.optimize.UglifyJsPlugin({
        //     comments: false, //去掉注释
        //     compress: {
        //         warnings: false
        //     }
        // }),
        new ExtractTextPlugin("style.css"),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ]
};
