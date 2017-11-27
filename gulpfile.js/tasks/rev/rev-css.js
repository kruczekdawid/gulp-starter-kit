const gulp = require('gulp');
const rev = require('gulp-rev');
const revNapkin = require('gulp-rev-napkin');
const path = require('path');

const revCSSTask = function() {
  return gulp.src(path.resolve(process.env.PWD, PATH_CONFIG.dest, '**/*.css'))
    .pipe(rev())
    .pipe(gulp.dest(PATH_CONFIG.dest))
    .pipe(revNapkin({
      verbose: false,
      force: true
    }))
    .pipe(rev.manifest(path.resolve(process.env.PWD, PATH_CONFIG.dest, 'rev-manifest.json'), {
      merge: true
    }))
    .pipe(gulp.dest(''));
};

gulp.task('rev-css', revCSSTask);
module.exports = revCSSTask;
