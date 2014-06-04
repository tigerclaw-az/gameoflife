module.exports = {
	options: {
		port: 9000,
		hostname: 'localhost'
	},
	livereload: {
		options: {
			base: '<%= appPath %>'
		}
	},
	dist: {
		options: {
			base: '<%= distPath %>'
		}
	}
};
