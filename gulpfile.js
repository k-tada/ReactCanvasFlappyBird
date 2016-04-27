var gulp = require('gulp');
var reqDir = require('require-dir');

reqDir('./gulp/tasks', { resource: true });

gulp.task('watch', function() {
  gulp.watch('./src/js/**/*.js', ['webpack']);
  gulp.watch('./src/*.html', ['copy']);
  gulp.start(['connect']);
});

gulp.task('build', ['copy', 'webpack']);
gulp.task('default', ['build', 'watch']);

