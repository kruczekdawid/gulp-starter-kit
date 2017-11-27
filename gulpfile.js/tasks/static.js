const gulp = require('gulp');
const plumber = require('gulp-plumber');
const path = require('path');

const staticTask = function() {
  const paths = {
    src: path.resolve(process.env.PWD, PATH_CONFIG.src, PATH_CONFIG.static.src, '**/*'),
    dest: path.resolve(process.env.PWD, PATH_CONFIG.dest, PATH_CONFIG.static.dest)
  };

  return gulp.src(paths.src)
    .pipe(plumber())
    .pipe(gulp.dest(paths.dest));
};

gulp.task('static', staticTask);
module.exports = staticTask;
