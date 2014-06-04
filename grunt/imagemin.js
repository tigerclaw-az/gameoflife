module.exports = {
	dist: {
		options: {
			cache: false
		},
		files: [{
			expand: true,
			pngquant: true,
			progressive: false,
			cwd: '<%= appPath %>/images',
			src: '{,*/}*.{png,jpg,jpeg}',
			dest: '<%= distPath %>/images'
		}]
	}
};
