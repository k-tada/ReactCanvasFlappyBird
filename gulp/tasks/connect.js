var gulp = require('gulp');
var connect = require('gulp-connect');

gulp.task('connect', function() {
  connect.server({
    root: './www/',
    port: 9080,
    livereload: true
  });
});
