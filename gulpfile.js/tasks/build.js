const gulp = require('gulp');
const gulpSequence = require('gulp-sequence');

const buildTask = function(cb) {
  global.production = true;

  gulpSequence(
    'clean',
    ['javascripts', 'stylesheets', 'images', 'fonts', 'modernizr'],
    'html',
    'rev',
    'static',
    'size-report',
    cb
  );
};

gulp.task('build', buildTask);
module.exports = buildTask;
