module.exports = function(grunt, config) {
	var lrSnippet = require('connect-livereload')({ port: '<%= lrPort %>' });
		mountFolder = function (connect, dir) {
			return connect.static(require('path').resolve(dir));
		};

	return {
		options: {
			port: 9000,
			hostname: 'localhost'
		},
		livereload: {
			options: {
				keepalive: true,
				middleware: function (connect) {
					return [
						lrSnippet,
						mountFolder(connect, '.tmp'),
						mountFolder(connect, 'app')
					];
				}
			}
		},
		test: {
			options: {
				middleware: function (connect) {
					return [
						mountFolder(connect, '.tmp'),
						mountFolder(connect, 'test')
					];
				}
			}
		},
		dist: {
			options: {
				middleware: function (connect) {
					return [
						mountFolder(connect, 'dist')
					];
				}
			}
		}
	}
};
