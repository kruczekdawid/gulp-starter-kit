const gulp = require('gulp');
const gulpif = require('gulp-if');
const plumber = require('gulp-plumber');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const cssnano = require('gulp-cssnano');
const path = require('path');
const browserSync = require('browser-sync');

const stylesheetsTask = function() {
  const paths = {
    src: path.resolve(process.env.PWD, PATH_CONFIG.src, PATH_CONFIG.stylesheets.src, 'main.scss'),
    dest: path.resolve(process.env.PWD, PATH_CONFIG.dest, PATH_CONFIG.stylesheets.dest)
  };

  if (TASK_CONFIG.stylesheets.sass && TASK_CONFIG.stylesheets.sass.includePaths) {
    TASK_CONFIG.stylesheets.sass.includePaths = TASK_CONFIG.stylesheets.sass.includePaths.map(function(includePath) {
      return path.resolve(process.env.PWD, includePath);
    });
  }

  return gulp.src([paths.src])
    .pipe(plumber())
    .pipe(gulpif(!global.production, sourcemaps.init()))
    .pipe(sass(TASK_CONFIG.stylesheets.sass))
    .pipe(gulpif(global.production, cssnano(TASK_CONFIG.stylesheets.cssnano)))
    .pipe(gulpif(!global.production, sourcemaps.write()))
    .pipe(gulp.dest(paths.dest))
    .pipe(browserSync.reload({
      stream: true
    }));
}

gulp.task('stylesheets', stylesheetsTask);
module.exports = stylesheetsTask;
