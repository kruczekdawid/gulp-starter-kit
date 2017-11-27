const gulp = require('gulp');
const rev = require('gulp-rev');
const revNapkin = require('gulp-rev-napkin');
const path = require('path');

const revJSTask = function() {
  return gulp.src(path.resolve(process.env.PWD, PATH_CONFIG.dest, '**/*.js'))
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

gulp.task('rev-js', revJSTask);
module.exports = revJSTask;
