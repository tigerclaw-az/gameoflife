module.exports = {
	options: {
		dirs: ['<%= distPath %>']
	},
	html: ['<%= distPath %>/{,*/}*.html'],
	css: ['<%= distPath %>/styles/{,*/}*.css']
};
