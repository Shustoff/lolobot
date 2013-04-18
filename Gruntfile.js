module.exports = function(grunt) {
	grunt.initConfig({
		concat: {
			options: {
				separator: ';'
			},
			dist: {
				src: [
					"js/libs/jquery.js",
					"js/libs/jquery-ui.js",
					"js/libs/underscore.js",
					"js/libs/angular.js",
					"js/libs/bootstrap-modal.js",
					"js/libs/easyTooltip.js",

					"js/data/skills.js",
					"js/data/masteries.js",
					"js/data/runes.js",
					"js/data/spells.js",
					"js/data/items.js",
					"js/data/images.js",
					"js/data/characters.js",
					"js/data/tooltip-items.js",
					"js/data/tooltip-masteries.js",
					"js/data/tooltip-skills.js",   
					"js/data/tooltip-spells.js",
					"js/data/tooltip-runes.js"
				],
				dest: 'js/min/lol.min.js'
			}
		},
		uglify: {
			options: {
				banner: '/*! Lol app file <%= grunt.template.today("dd-mm-yyyy") %> */\n'
			},
			dist: {
				files: {
					'js/min/lol.min.js': ['<%= concat.dist.dest %>']
				}
			}
		},
		cssmin: {
			combine: {
				files: {
					'css/app.min.css': [
						"css/bootstrap.css",
						"css/jquery-ui-1.8.18.custom.css",
						"css/jquery.ui.tabs.css",
						"css/app.css"
					]
				}
			},
			minify: {
				expand: true,
				cwd: 'css/',
				src: [
					"css/bootstrap.css",
					"css/jquery-ui-1.8.18.custom.css",
					"css/jquery.ui.tabs.css",
					"css/app.css"
				],
				dest: 'css/',
				ext: '.min.css'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	grunt.registerTask('concat-min-data', ['concat', 'uglify']);
};