module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'js/*.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },
    sass: {
			options: {
				sourceMap: true,
				outputStyle: 'compressed'
			},
			dist: {
				files: {
					'css/global.css': 'sass/global.scss',
          'css/article.css': 'sass/article.scss',
          'css/backbone.css': 'sass/backbone.scss',
          'jasmine/css/jasmine.css': 'sass/jasmine.scss'
				}
			}
    },
    copy: {
      deploy: {
        files: [
          { expand: true,
            cwd: 'bower_components/flexboxgrid/dist',
            src: ['flexboxgrid.min.css'],
            dest: 'css/'},
        ]
      }
		},
    handlebars: {
      'backbone-core': {
        options: {
          amd: true
        },
        files: {
          'backbone/js/templates/core.js': ['backbone/templates/core/*.hbs'],
        }
      },
      'backbone-pages': {
        options: {
          amd: true
        },
        files: {
          'backbone/js/templates/pages.js': ['backbone/templates/pages/*.hbs'],
        }
      },
      'jasmine-core': {
        options: {
          amd: true
        },
        files: {
          'jasmine/js/templates/core.js': ['jasmine/templates/core/*.hbs'],
        }
      },
      'backbone-pages': {
        options: {
          amd: true
        },
        files: {
          'jasmine/js/templates/pages.js': ['jasmine/templates/pages/*.hbs'],
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-handlebars');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-sass');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);
  grunt.registerTask('deploy', ['sass:dist',
                                'copy:deploy',
                                'handlebars:backbone-core',
                                'handlebars:backbone-pages']);

};
