module.exports = function(grunt) {
    "use strict";

    // Project configuration.
    grunt.initConfig({

        // Metadata.
        pkg: grunt.file.readJSON('package.json'),

        // Task configuration.
        clean: {
            dist: ['dist/js', 'dist/*.html', 'dist/img/', 'dist/css'],
            device: ['cdv-app/www/js', 'cdv-app/www/*.html', 'cdv-app/www/img/', 'cdv-app/www/css']
        },

        jshint : {
			src : [ 'js/**/*.js', '!js/libs/*.js'],
			options : {
				laxbreak : true,
				smarttabs : true,
				globals : {
					jQuery : false,
					Storage : false,
					localStorage : true,
					sessionStorage : true,
					window : false,
					console : false
				}
			}
		},

        watch: {
            html: {
            	files: ['*.html'],
            	tasks: ['copy:html']
            },
            lint: {
            	files: ['js/**/*.js', '!js/libs/**/*'],
            	tasks: ['jshint']
            },
            css: {
                files: ['css/**/*.*'],
                tasks: ['copy:css']
            }
        
        },
        
        copy : {
            html: {
                src : ['*.html'],
                dest: 'dist/'
            },
        	css : {
        		src : ['css/**/*.*'],
        		dest : 'dist/'
        	},
            device : {
                cwd: 'dist/',
                expand: true,
                src : ['**/*', '!js/**/*'],
                dest: 'cdv-app/www/'
            }
		},
        
        browserify: {
            device: {
                dest: 'cdv-app/www/js/todo.js',
                src: ['js/main.js']
            },
            web: {
                dest: 'dist/js/todo.js',
                src: ['js/main.js'],
                options: {
                    watch: true
                }
            }
        },
        
        connect: {
            server: {
                options: {
                    port: 8080,
                    base: 'dist'
                }
            }
        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-connect');
    
    // super dev tasks that runs all the watches and dev server!
    grunt.registerTask('dev', ['copy:html', 'copy:css', 'browserify:web', 'connect', 'watch']);
    
    // device distribution task
    grunt.registerTask('device', ['clean:device', 'browserify:device', 'copy:device']);
    
    // web distribution task.
    grunt.registerTask('web', ['clean:dist', 'jshint', 'browserify:web', 'copy:html', 'copy:css']);
    
    // Default task.
    grunt.registerTask('default', ['dev']);
};
