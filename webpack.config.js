const HtmlPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
module.exports = [
	{
		entry: {
			client: "./src/client/index.js",
		},
		output: {
			path: path.resolve(__dirname, "dist"),
			filename: "[name].js",
		},
		module: {
			rules: [
				{
					test: /\.(js|jsx)$/,
					exclude: /node_modules/,
					use: {
						loader: "babel-loader",
					},
				},
				{
					test: /\.html$/,
					use: {
						loader: "html-loader",
					},
				},
				{
					test: /\.s[ac]ss$/i,
					use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
				},
				{
					test: /\.(png|jpe?g|gif)$/i,
					use: {
						loader: "file-loader",
					},
				},
			],
		},
		plugins: [
			new HtmlPlugin({
				filename: "index.html",
				template: "./src/client/index.html",
			}),
			new MiniCssExtractPlugin(),
		],
	},
	{
		target: "node",
		entry: {
			server: "./src/server.js",
		},
		// node: {
		// 	dns: "mock",
		// 	fs: "empty",
		// 	path: true,
		// 	url: false,
		// 	net: "empty",
		// },
		output: {
			path: path.resolve(__dirname),
			filename: "[name].js",
		},
		module: {
			rules: [
				{
					test: /\.(js|jsx)$/,
					exclude: /node_modules/,
					use: {
						loader: "babel-loader",
					},
				},
			],
		},
	},
];
