/*global module:false*/
module.exports = function(grunt) {
  'use strict';

  // Project configuration.
  grunt.initConfig({
    lint: {
      files: ['grunt.js', 'lib/**/*.js', 'test/**/*.js']
    },
    test: {
      files: ['test/**/*.js']
    },
    browserify: {
      'example/http/node.js': {
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
      },
      'example/post/node.js': {
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
      },
      'example/debug/node.js': {
        options: {
          exports: [
            'require',
            'http',
            'events',
            'path',
            'vm',
            'crypto',
            'assert',
            'url',
            'buffer',
            'util',
            'querystring',
            'stream',
            'os',
            'process'
          ],
          require: {
            string_decoder: 'string_decoder-chromify',
            freelist: 'freelist-chromify',
            net: 'net-chromify',
            http_parser: 'http-parser-js',
            http: 'http-chromify',
            events: 'events',
            path: 'path',
            vm: 'vm',
            crypto: 'crypto',
            assert: 'assert',
            url: 'url',
            buffer: 'buffer',
            util: 'util',
            querystring: 'querystring',
            os: 'os-chromify',
            stream: 'stream'
          }
        }
      }
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
