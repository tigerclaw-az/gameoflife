// Generated on 2013-07-03 using generator-webapp 0.2.6
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {
    // measures the time each task takes
	require('time-grunt')(grunt);

	// load grunt config: https://github.com/firstandthird/load-grunt-config
	require('load-grunt-config')(grunt, {
		data: {
			appPath: '<%= package.appPath %>',
			buildPath: '<%= package.distPath %>'
		}
	});
};
