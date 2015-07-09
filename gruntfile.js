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
          'css/backbone.css': 'sass/backbone.scss'
  			}
  		}
    },
    typescript: {
      base: {
        src: ['playground/typescript/src/**/*.ts'],
        dest: 'playground/typescript/js',
        options: {
          module: 'amd',
          target: 'es5',
          basePath: 'playground/typescript/src',
          sourceMap: true,
          declaration: true
        }
      },
      docs: {
        src: ['docs/ts/**/*.ts'],
        dest: 'docs/js',
        options: {
          module: 'amd',
          target: 'es5',
          sourceMap: true,
          declaration: true
        }

      }
		},
    watch: {
      typescript: {
        files: 'playground/typescript/src/**/*.ts',
        tasks: ['compile-ts'],
        options: {
          interrupt: true
        }
      },
      docs: {
        files: 'docs/ts/**/*.ts',
        tasks: ['typescript:docs'],
        options: {
          interrupt: true
        }
  		}
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-typescript');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);
  grunt.registerTask('deploy', ['sass:dist']);
  grunt.registerTask('compile-ts', ['typescript']);
  grunt.registerTask('dev', ['watch:typescript']);
  grunt.registerTask('dev-docs', ['watch:typescript']);

};
