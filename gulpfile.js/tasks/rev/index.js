const gulp = require('gulp');
const gutil = require('gulp-util');
const gulpSequence = require('gulp-sequence');

const revTask = function(cb) {
  gulpSequence(
    'rev-assets',
    'rev-update-references',
    'rev-js',
    'rev-css',
    'rev-update-html',
    cb
  );
};

gulp.task('rev', revTask);
module.exports = revTask;
