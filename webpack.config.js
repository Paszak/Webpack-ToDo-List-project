const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const OptimizeJsPlugin = require('optimize-js-plugin');
const env = process.env.NODE_ENV || 'development';



console.log('NODE_ENV:', env);
module.exports = {
    entry: [
            'react-hot-loader/patch',
         './src/index.js'
        ],
            output: {
                path: path.resolve(__dirname, 'build'),
                filename: 'app.bundle.js'
            },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader"
            },
            {
            	test: /\.css$/,
            	use: [
	           		{ loader: 'style-loader'},
	            	{
	                	loader: 'css-loader',
	                	options: {
	                    	modules: true
	                	}
	            	}
	        	]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            filename: 'index.html',
            inject: 'body'
        }),
    ]

};

if (env === 'production') {
module.exports.plugins.push(
    new webpack.optimize.UglifyJsPlugin(),
    new OptimizeJsPlugin({
      sourceMap: false
    })
  );
};

