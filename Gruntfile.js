module.exports = function(grunt) {
    "use strict";

    // Project configuration.
    grunt.initConfig({

        // Metadata.
        pkg: grunt.file.readJSON('package.json'),

        // Task configuration.
        clean: {
            dist: ['dist/js', 'dist/*.html', 'dist/img/', 'dist/css', 'dist/bower_components']
        },

        jshint : {
			src : [ 'js/**/*.js', '!js/lib/*.js'],
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
            js: {
            	files: ['js/**/*.js'],
            	tasks: ['dist-js']
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
        	}
		},
        
        browserify: {
            'dist/js/todo.js': ['js/main.js']
        },
        
        connect: {
            server: {
                options: {
                    port: 8080,
                    base: 'dist',
                    keepalive: true
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
    
    //JS distribution task.
    grunt.registerTask('dist-js', ['jshint', 'browserify']);

    // Full distribution task.
    grunt.registerTask('dist', ['clean', 'dist-js', 'copy']);
    
    // Default task.
    grunt.registerTask('default', ['dist']);
};
