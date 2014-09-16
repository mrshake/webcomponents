module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    jshint: { 
    	files: [
    	      'Gruntfile.js',
    	      'app/**/*.js'
    	      ]
    },
    watch: {
    	  files: ['<%= jshint.files %>'],
    	  tasks: ['jshint']
    	}
  });
  // Load a Grunt plugin.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-newer');
  // Default task(s).
  grunt.registerTask('default', ['newer:jshint:files', 'watch']);
};