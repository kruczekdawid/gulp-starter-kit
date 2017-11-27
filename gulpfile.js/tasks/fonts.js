const gulp = require('gulp');
const plumber = require('gulp-plumber');
const path = require('path');
const browserSync = require('browser-sync');

const fontsTask = function() {
  const paths = {
    src: path.resolve(process.env.PWD, PATH_CONFIG.src, PATH_CONFIG.fonts.src, '**/*.{' + TASK_CONFIG.fonts.extensions.join(',') + '}'),
    dest: path.resolve(process.env.PWD, PATH_CONFIG.dest, PATH_CONFIG.fonts.dest)
  };

  return gulp.src([paths.src])
    .pipe(plumber())
    .pipe(gulp.dest(paths.dest))
    .pipe(browserSync.reload({
      stream: true
    }));
}

gulp.task('fonts', fontsTask);
module.exports = fontsTask;
