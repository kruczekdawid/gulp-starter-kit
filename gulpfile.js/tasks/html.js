const gulp = require('gulp');
const gulpif = require('gulp-if');
const plumber = require('gulp-plumber');
const injectSvg = require('gulp-inject-svg');
const srcset = require('gulp-lazysizes-srcset');
const htmlmin = require('gulp-htmlmin');
const path = require('path');
const browserSync = require('browser-sync');

const htmlTask = function() {
  const paths = {
    src: path.resolve(process.env.PWD, PATH_CONFIG.src, PATH_CONFIG.html.src, '**/*.html'),
    dest: path.resolve(process.env.PWD, PATH_CONFIG.dest, PATH_CONFIG.html.dest)
  };

  return gulp.src(paths.src)
    .pipe(plumber())
    .pipe(injectSvg({
      base: PATH_CONFIG.dest
    }))
    .pipe(srcset({
      suffix: {
        1: '',
        2: '@2x'
      }
    }))
    .pipe(gulpif(global.production, htmlmin(TASK_CONFIG.html.htmlmin)))
    .pipe(gulp.dest(paths.dest))
    .pipe(browserSync.reload({
      stream: true
    }));
}

gulp.task('html', htmlTask);
module.exports = htmlTask;
