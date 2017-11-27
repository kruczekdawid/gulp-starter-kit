const gulp = require('gulp');
const revReplace = require('gulp-rev-replace');
const path = require('path');

const revUpdateHTMLTask = function() {
  const manifest = gulp.src(path.resolve(process.env.PWD, PATH_CONFIG.dest, 'rev-manifest.json'));

  return gulp.src(path.resolve(process.env.PWD, PATH_CONFIG.dest, PATH_CONFIG.html.dest, '**/*.html'))
    .pipe(revReplace({
      manifest: manifest
    }))
    .pipe(gulp.dest(path.resolve(process.env.PWD, PATH_CONFIG.dest, PATH_CONFIG.html.dest)));
};

gulp.task('rev-update-html', revUpdateHTMLTask);
module.exports = revUpdateHTMLTask;
