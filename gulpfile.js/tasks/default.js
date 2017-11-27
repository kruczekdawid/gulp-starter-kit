const gulp = require('gulp');
const gulpSequence = require('gulp-sequence');

const defaultTask = function(cb) {
  gulpSequence(
    'clean',
    ['javascripts', 'stylesheets', 'images', 'fonts', 'modernizr', 'lint'],
    'html',
    'static',
    'watch',
    cb
  );
};

gulp.task('default', defaultTask);
module.exports = defaultTask;
