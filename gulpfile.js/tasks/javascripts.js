const gulp = require('gulp');
const gulpif = require('gulp-if');
const plumber = require('gulp-plumber');
const sourcemaps = require('gulp-sourcemaps');
const jshint = require('gulp-jshint');
const uglify = require('gulp-uglify');
const browserify = require('gulp-browserify');
const babelify = require('babelify');
const path = require('path');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const browserSync = require('browser-sync');

const javascriptsTask = function() {
  const paths = {
    src: path.resolve(process.env.PWD, PATH_CONFIG.src, PATH_CONFIG.javascripts.src, 'main.js'),
    dest: path.resolve(process.env.PWD, PATH_CONFIG.dest, PATH_CONFIG.javascripts.dest)
  };

  return gulp.src(paths.src)
    .pipe(plumber())
    .pipe(jshint())
    .pipe(browserify({
      debug: true,
      extensions: ['es6'],
      transform: [
        babelify.configure({
          presets: ['es2015']
        })
      ]
    }))
    .pipe(gulpif(!global.production, sourcemaps.init({
      loadMaps: true
    })))
    .pipe(gulpif(global.production, uglify()))
    .pipe(gulpif(!global.production, sourcemaps.write()))
    .pipe(gulp.dest(paths.dest))
    .pipe(browserSync.reload({
      stream: true
    }));
}

gulp.task('javascripts', javascriptsTask);
module.exports = javascriptsTask;
