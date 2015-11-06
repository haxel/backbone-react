module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    bowerRequirejs: {
      target: {
        rjsConfig: 'assets/js/config.js'
      }
    },
    requirejs: {
      compile: {
        options: {
          baseUrl: "assets/js",
          name: "config",
          mainConfigFile: "assets/js/config.js",
          out: "main.min.js",
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-bower-requirejs');

  // Default task(s).
  grunt.registerTask('default', ['bowerRequirejs']);
  grunt.registerTask('compile', ['bowerRequirejs','requirejs']);

};
