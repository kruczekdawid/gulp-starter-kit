const gulp = require('gulp');
const gulpif = require('gulp-if');
const plumber = require('gulp-plumber');
const imagemin = require('gulp-imagemin');
const path = require('path');
const browserSync = require('browser-sync');

const imagesTask = function() {
  const paths = {
    src: path.resolve(process.env.PWD, PATH_CONFIG.src, PATH_CONFIG.images.src, '**/*.{' + TASK_CONFIG.images.extensions.join(',') + '}'),
    dest: path.resolve(process.env.PWD, PATH_CONFIG.dest, PATH_CONFIG.images.dest)
  };

  return gulp.src([paths.src])
    .pipe(plumber())
    .pipe(gulpif(global.production, imagemin([
      imagemin.svgo({
        plugins: [
          { collapseGroups: false },
          { cleanupIDs: false }
        ]
      })
    ])))
    .pipe(gulp.dest(paths.dest))
    .pipe(browserSync.reload({
      stream: true
    }));
};

gulp.task('images', imagesTask);
module.exports = imagesTask;
