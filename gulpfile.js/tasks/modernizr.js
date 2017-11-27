const gulp = require('gulp');
const gulpif = require('gulp-if');
const plumber = require('gulp-plumber');
const modernizr = require('gulp-modernizr-build');
const uglify = require('gulp-uglify');
const path = require('path');

const modernizrTask = function() {
  const paths = {
    src: path.resolve(process.env.PWD, PATH_CONFIG.src, PATH_CONFIG.modernizr.src, '**/*.{' + TASK_CONFIG.modernizr.extensions.join(',') + '}'),
    dest: path.resolve(process.env.PWD, PATH_CONFIG.dest, PATH_CONFIG.modernizr.dest)
  };

  return gulp.src(paths.src)
    .pipe(plumber())
    .pipe(modernizr('modernizr.js', {
      cssPrefix: 'has-'
    }))
    .pipe(gulpif(global.production, uglify()))
    .pipe(gulp.dest(paths.dest));
};

gulp.task('modernizr', modernizrTask);
module.exports = modernizrTask;
