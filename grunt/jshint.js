module.exports = {
	options: {
		jshintrc: '.jshintrc'
	},
	all: [
		'Gruntfile.js',
		'<%= appPath %>/scripts/{,*/}*.js',
		'!<%= appPath %>/scripts/vendor/*',
		'test/spec/{,*/}*.js'
	]
};
