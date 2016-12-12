import webpack from 'webpack';

export default {
  devtool: 'source-map',
	entry: './src/index.js',
	output: {
		path: './dist',
		filename: 'index.js'
	},
	resolve: {
		extensions: ['', '.js', 'json', '.scss', '.css',]
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
	    compress: {
	      warnings: false
	    }
	  })
	],
	module: {
		loaders: [
			{
				test: /\.js/,
				exclude: /node_modules/,
				loaders: ['babel']
			},
			{
			 test: /\.scss$/,
       exclude: [/\.module\.scss$/],
			 loader: 'style!css!sass?outputStyle=compressed'
		  },
      {
        test: /\.module\.scss$/,
        loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]!resolve-url-loader!postcss-loader!sass-loader'
      },
      {
        test: /\.json$/,
        loaders: ["json"]
      }
		]
	},
	sassLoader: {
		includePaths: [
			'./node_modules',
			// this is required only for NPM < 3.
	 	  // Dependencies are flat in NPM 3+ so pointing to
			// the internal grommet/node_modules folder is not needed
			'./node_modules/grommet/node_modules'
		]
	}
};
