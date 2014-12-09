module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    concat: {
      files: {
        'build/development/static/all.js': ['src/js/*.js'],
        'build/development/static/all.css': ['src/css/*.css']
      }
    },

    watch: {
      scripts: {
        files: ['src/js/*.js', 'src/css/*.css']
      },
    }

    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['concat']);

};