var path = require('path');
var webpack = require('webpack');
var I18nPlugin = require('i18n-webpack-plugin');
var languages = {
	'en_US': null,
	'zh_CN': require('./js/i18n/zh_CN.json')
};
module.exports = Object.keys(languages).map(function(language) {
	return {
		name: language,
		entry: {
			index: './js/index.js',
			temp: './js/temp.js'
		},
		output: {
			path: path.join(__dirname, 'build'),
			filename: language + '.[name].js',
			publicPath: './build/'
		},
		module: {
			loaders: [{
				test: /\.less$/,
				loader: 'style-loader!css-loader!less-loader'
			}, {
				test: /\.css$/,
				loader: 'style-loader!css-loader'
			}, {
				test: /\.(ttf|eot|svg|woff(2)?)(\?v=[\d.]+)?(\?[a-z0-9#-]+)?$/,
				loader: 'file-loader'
			}, {
				test: /\.(png|jpg|gif)$/,
				loader: 'url-loader?limit=8192'
			}]
		},
		plugins: [
			new I18nPlugin(
				languages[language]
			),
			new webpack.ProvidePlugin({
				$: 'jquery',
				jQuery: 'jquery',
				'window.jQuery': 'jquery',
				//Handlebars: 'handlebars/runtime'
			}),
			new webpack.DefinePlugin({
				'require.specified': 'require.resolve'
			})
		]
	};
});