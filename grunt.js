/*global module:false*/
module.exports = function(grunt) {
  'use strict';

  var browserifyConfig = {
    entries: [],
    options: {
      exports: ['require', 'http'],
      require: {
        string_decoder: 'string_decoder-chromify',
        freelist: 'freelist-chromify',
        net: 'net-chromify',
        http_parser: 'http-parser-js',
        http: 'http-chromify'
      }
    }
  };

  // Project configuration.
  grunt.initConfig({
    lint: {
      files: ['grunt.js', 'lib/**/*.js', 'test/**/*.js']
    },
    test: {
      files: ['test/**/*.js']
    },
    browserify: {
      "example/plugin/node.js": browserifyConfig
    },
    watch: {
      files: '<config:lint.files>',
      tasks: 'lint test'
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true
      },
      globals: {}
    }
  });

  grunt.loadNpmTasks('grunt-browserify');

  // Default task.
  grunt.registerTask('default', 'browserify');

};
