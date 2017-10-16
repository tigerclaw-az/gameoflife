module.exports = {
	dist: {
		files: [{
			dot: true,
			src: [
				'.tmp',
				'<%= distPath %>/*',
				'!<%= distPath %>/.git*'
			]
		}]
	},
	server: '.tmp'
};
