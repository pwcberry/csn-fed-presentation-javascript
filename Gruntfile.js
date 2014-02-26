/* global module:false */
module.exports = function(grunt) {
	const port = 1995;
	// Project configuration
	grunt.initConfig({
		less: {
			theme: {
	            files: {
	                './css/carsales-theme.css': './css/src/carsales.less'
	            },
	            options: {
	            	livereload: true
	            }
			}
		},

		connect: {
			options: {
				port: port,
				livereload: 36022,
                hostname: 'localhost'
            },
            livereload: {
                options: {
                    open: true,
                    base: ['.']
                }
            }
		},

		watch: {
			theme: {
				files: [ 'css/src/*.less' ],
				tasks: 'themes',
				options: {
					livereload:true
				}
			},
			markdown: {
				files: ['./slides/*.md', '!./slides/outline.md'],
				options: {
					livereload:true
				}
			},
			livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                /* These are the files that are watched by live reload */
                files: [
                	'./*.html',
                	'./app/styles/*.css',
                	'./app/scripts/*.js'
                ]
            }
		}

	});

	// Dependencies
	grunt.loadNpmTasks( 'grunt-contrib-watch' );
	grunt.loadNpmTasks( 'grunt-contrib-less' );
	grunt.loadNpmTasks( 'grunt-contrib-connect' );

	// Default task
	grunt.registerTask( 'default', [ 'serve' ] );

	// Theme task
	grunt.registerTask( 'themes', [ 'less' ] );

	// Serve presentation locally
	grunt.registerTask( 'serve', [ 'connect', 'watch' ] );

};
