module.exports = {
	dist: {
		files: [{
			expand: true,
			dot: true,
			cwd: '<%= appPath %>',
			dest: '<%= distPath %>',
			src: [
				'*.{ico,png,txt}',
				'.htaccess',
				'images/{,*/}*.{webp,gif}',
				'styles/fonts/*'
			]
		}, {
			expand: true,
			cwd: '.tmp/images',
			dest: '<%= distPath %>/images',
			src: [
				'generated/*'
			]
		}]
	},
	styles: {
		expand: true,
		dot: true,
		cwd: '<%= appPath %>/styles',
		dest: '.tmp/styles/',
		src: '{,*/}*.css'
	}
};
