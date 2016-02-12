'use strict';

module.exports = function (grunt) {

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    karma: {
      unit: {
        configFile: './test/karma.conf.js',
        autoWatch: false,
        singleRun: true
      },
    }
  });

  //single run tests
  grunt.registerTask('test:unit', ['karma:unit']);
}