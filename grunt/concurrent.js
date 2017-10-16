module.exports = {
	server: [
		'compass',
		// 'coffee:dist',
		'copy:styles'
	],
	test: [
		// 'coffee',
		'copy:styles'
	],
	dist: [
		'coffee',
		'compass',
		'copy:styles',
		'imagemin',
		'svgmin',
		'htmlmin'
	]
};
