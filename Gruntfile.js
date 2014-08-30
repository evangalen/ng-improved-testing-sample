/* global module, require */

module.exports = function(grunt) {
    'use strict';

    //grunt plugins
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        karma: {
            unit: {
                configFile: 'karma.conf.js',
                singleRun: true
            }
        }
    });

    grunt.registerTask('test', ['karma']);

    grunt.registerTask('default', ['karma']);
};