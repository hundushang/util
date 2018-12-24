const uglifyjs = require('uglifyjs-webpack-plugin');
module.exports = {
	module: {
		rules: [{
			test: /\.js$/,
			loader: 'babel-loader',
			exclude: /node_modules/
		}]
	},
	plugins: [
		new uglifyjs({
			uglifyOptions: ({
	            compress: false
	        })
		})
	]
}