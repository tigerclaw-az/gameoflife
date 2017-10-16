module.exports = {
	coffee: {
		files: ['<%= appPath %>/scripts/{,*/}*.coffee'],
		tasks: ['coffee:dist']
	},
	coffeeTest: {
		files: ['test/spec/{,*/}*.coffee'],
		tasks: ['coffee:test']
	},
	compass: {
		files: ['<%= appPath %>/styles/{,*/}*.{scss,sass}'],
		tasks: ['compass:server', 'autoprefixer' ]
	},
	styles: {
		files: ['<%= appPath %>/styles/{,*/}*.css'],
		tasks: ['copy:styles', 'autoprefixer']
	},
	livereload: {
		options: {
			livereload: '<%= lrPort %>'
		},
		files: [
			'<%= appPath %>/*.html',
			'.tmp/styles/{,*/}*.css',
			'{.tmp,<%= appPath %>}/scripts/{,*/}*.js',
			'<%= appPath %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
		]
	}
};
