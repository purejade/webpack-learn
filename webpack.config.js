var path = require('path')

module.exports = {
	entry:"./js/main.js",
	output:{
		path:path.join(__dirname, 'dist'),
		filename:"bundle.js"	
	},
	module:{
		preLoaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'jsxhint'
			}],
		loaders:[
			{test: /\.css$/, loader:"style!css"},
			{test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader' },
			{test: /\.jsx?$/, exclude:/(node_modules|bower_components)/,  loader: 'babel', 
				query: {
					        presets: ['react', 'es2015']
				} 
			}
		]
	}
};
