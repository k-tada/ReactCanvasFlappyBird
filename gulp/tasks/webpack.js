var gulp = require('gulp');
var babel = require('gulp-babel');
var webpack = require('gulp-webpack');
var config = require('../config');

gulp.task('webpack', function() {
  gulp.src( config.webpack.entry )
      .pipe( webpack( config.webpack ) )
      .pipe( gulp.dest( config.js.dest ) );
});
