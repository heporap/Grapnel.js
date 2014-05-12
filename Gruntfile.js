module.exports = function(grunt) {
"use strict";
	
	grunt.initConfig({
//		pkg: grunt.file.readJSON('package.json'),
		banner: '/****\n'+
						' * Grapnel.js\n'+
						' * https://github.com/EngineeringMode/Grapnel.js\n'+
						' *\n'+
						' * @author Greg Sabia Tucker\n'+
						' * @link http://artificer.io\n'+
						' * @version 0.4.2\n'+
						' *\n'+
						' * Released under MIT License. See LICENSE.txt or http://opensource.org/licenses/MIT\n'+
						' * forked by Wicker Wings https://github.com/heporap/Grapnel.js */\n',
		uglify: {
			grapnel: {
				options: {
					banner: '<%= banner %>'
				},
				files: {
					'dist/grapnel.min.js': ['src/grapnel.js']
				}
			}
		},
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('default', ['uglify:grapnel']);
};
