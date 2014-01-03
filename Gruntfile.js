module.exports = function (grunt) {
    grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
        autoprefixer: {
            dist: {
                files: {
                    'beta/css/style.css': 'beta/css/styles.css'
                }
            }
        },
		watch: {
			options: {
				liveReload: true,
			},
			SASSintoCSS: {
    			files: ['beta/sass/*.sass'],
				tasks: ['sass'],
				options: {
					spawn: false,
				}
			},
            styles: {
                files: ['beta/css/styles.css'],
                tasks: ['autoprefixer']
            }
        },
		imagemin: {
			dynamic: {
				files: [{
					expand: true,
					cwd: 'images/',
					src: ['**/*.{png,jpg,gif}'],
					dest: 'images/build/'
				}]
			}
		},
		sass: {
			dist: {
				options: {
        			style: 'nested'
      			},
      			files: {
        			'beta/css/styles.css': 'beta/sass/styles.sass'
      			}
    }
  }
    });
    grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.registerTask('default', ['sass', 'autoprefixer', 'imagemin']);
};