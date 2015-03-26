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
			src : [ 'js/*.js'],
			options : {
				laxbreak : true,
				smarttabs : true,
				globals : {
					$ : false,
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
            	tasks: ['jshint', 'copy:js']
            }
        },
        
        copy : {
        	js : {
        		src : ['js/**/*.js'],
        		dest: 'dist/'
        	},
        	jquery : {
        		src : ['bower_components/jquery/dist/jquery.min.js'],
        		dest : 'dist/'
        	},
        	css : {
        		src : ['css/*.*'],
        		dest : 'dist/'
        	}
		},
        
        browserify: {
            'dist/js/todo.js': ['/js/main.js']
        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-browserify');

    //JS distribution task.
    grunt.registerTask('dist-js', ['jshint', 'browserify']);

    // Full distribution task.
    grunt.registerTask('dist', ['clean', 'dist-js', 'copy']);
    
    // Default task.
    grunt.registerTask('default', ['dist']);
};