const gulp = require('gulp');
const jshint = require('gulp-jshint');
const path = require('path');

const lintTask = function() {
  const srcPath = path.resolve(process.env.PWD, PATH_CONFIG.src, PATH_CONFIG.lint.src, '**/*');

  return gulp.src(srcPath)
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
};

gulp.task('lint', lintTask);
module.exports = lintTask;
