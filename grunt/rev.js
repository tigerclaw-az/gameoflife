module.exports = {
	dist: {
		files: {
			src: [
				'<%= distPath %>/scripts/{,*/}*.js',
				'<%= distPath %>/styles/{,*/}*.css',
				'<%= distPath %>/images/{,*/}*.{png,jpg,jpeg,gif,webp}',
				'<%= distPath %>/styles/fonts/*'
			]
		}
	}
};
