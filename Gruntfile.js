/* global module:false */
module.exports = function(grunt) {
	var port = grunt.option('port') || 9000;
	// Project configuration
	grunt.initConfig({
		less: {
			theme: {
	            files: {
	                './css/carsales-theme.css': './css/src/carsales.less'
	            }
			}
		},

		connect: {
			server: {
				options: {
					port: port,
					base: '.'
				}
			}
		},

		watch: {
			theme: {
				files: [ 'css/src/*.less' ],
				tasks: 'themes'
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
