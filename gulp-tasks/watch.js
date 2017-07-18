'use strict';

var gulp = require('gulp')
	, configs = require('./configs');

gulp.task('watch', function(){
	gulp.watch(configs.source.sass, ['sass']);
	gulp.watch(configs.source.js, ['scripts']);
});
