const gulp = require('gulp');
const path = require('path');
const revReplace = require('gulp-rev-replace');

const revUpdateReferencesTask = function() {
  const manifest = gulp.src(path.resolve(process.env.PWD, PATH_CONFIG.dest, 'rev-manifest.json'))

  return gulp.src(path.resolve(process.env.PWD, PATH_CONFIG.dest, '**/**.{css,js}'))
    .pipe(revReplace({
      manifest: manifest
    }))
    .pipe(gulp.dest(PATH_CONFIG.dest));
};

gulp.task('rev-update-references', revUpdateReferencesTask);
module.exports = revUpdateReferencesTask;
