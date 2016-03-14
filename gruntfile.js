/*jshint boss: true, curly: true, eqeqeq: true, eqnull: true, expr: true,
	immed: true, noarg: true, onevar: true, quotmark: single, strict: true,
	trailing: true, undef: true, node: true */

module.exports = function (grunt) {

	'use strict';

	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		banner: '/*! <%= pkg.title || pkg.name %> - <%= grunt.template.today("yyyy-mm-dd") %> <%= pkg.author %> */\n',
		sass: {
			dev: {
				options: {
					sourceMap: true
				},
				files: [{
					expand: true,
					cwd: './scss',
					src: ['**/*.scss'],
					dest: './dist',
					ext: '.css'
				}]
			},
			dist: {
				files: '<%= sass.dev.files %>'
			}
		},
		notify: {
			dev: {
				options: {
					message: ' ' // Empty space to only show notifactions when an error occurs
				}
			}
		},
		watch: {
			grunt: {
				files: [ 'gruntfile.js'],
				options: {
					reload: true
				}
			},
			sass: {
				files: ['./scss/**/*.scss'],
				tasks: ['sass:dev', 'notify:dev'],
				options: {
					spawn: false,
					livereload: true
				}
			}
		}
	});

	grunt.registerTask('default', ['sass:dev', 'watch']);

};
