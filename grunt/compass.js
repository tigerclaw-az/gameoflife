module.exports = {
	options: {
		sassDir: '<%= appPath %>/styles',
		cssDir: '.tmp/styles',
		generatedImagesDir: '.tmp/images/generated',
		imagesDir: '<%= appPath %>/images',
		javascriptsDir: '<%= appPath %>/scripts',
		fontsDir: '<%= appPath %>/styles/fonts',
		importPath: '<%= appPath %>/bower_components',
		httpImagesPath: '/images',
		httpGeneratedImagesPath: '/images/generated',
		httpFontsPath: '/styles/fonts',
		relativeAssets: false
	},
	dist: {},
	server: {
		options: {
			debugInfo: true
		}
	}
};
