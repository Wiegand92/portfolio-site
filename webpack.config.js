const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const webpack = require('webpack');
require('dotenv').config();

const mode = process.env.NODE_ENV || 'development';
const prod = mode === 'production';

const envVars = [
	new webpack.DefinePlugin({
		'process.env.API_KEY': JSON.stringify(process.env.API_KEY),
		'process.env.AUTH_DOMAIN': JSON.stringify(process.env.AUTH_DOMAIN),
		'process.env.PROJECT_ID': JSON.stringify(process.env.PROJECT_ID),
		'process.env.STORAGE_BUCKET': JSON.stringify(process.env.STORAGE_BUCKET),
		'process.env.MESSAGING_SENDER_ID': JSON.stringify(process.env.MESSAGING_SENDER_ID),
		'process.env.APP_ID': JSON.stringify(process.env.APP_ID),
		'process.env.DATABASE_URL': JSON.stringify(process.env.DATABASE_URL)
	})
];

module.exports = {
	entry: {
		'build/bundle': ['./src/main.js']
	},
	resolve: {
		alias: {
			svelte: path.dirname(require.resolve('svelte/package.json'))
		},
		extensions: ['.mjs', '.js', '.svelte'],
		mainFields: ['svelte', 'browser', 'module', 'main']
	},
	output: {
		path: path.join(__dirname, '/public'),
		filename: '[name].js',
		chunkFilename: '[name].[id].js'
	},
	module: {
		rules: [
			{
				test: /\.svelte$/,
				use: {
					loader: 'svelte-loader',
					options: {
						compilerOptions: {
							dev: !prod
						},
						emitCss: prod,
						hotReload: !prod,
						preprocess: require('svelte-preprocess')({
							postcss: {
								plugins: [
									require('autoprefixer'),
									require('tailwindcss')
								]
							}
						})
					}
				}
			},
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader'
				]
			},
			{
				// required to prevent errors from Svelte on Webpack 5+
				test: /node_modules\/svelte\/.*\.mjs$/,
				resolve: {
					fullySpecified: false
				}
			}
		]
	},
	mode,
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].css'
		}), ...envVars
	],
	devtool: prod ? false : 'source-map',
	devServer: {
		hot: true
	}
};
