const gulp = require('gulp');
const path = require('path');
const browserSync = require('browser-sync');

var browserSyncTask = function() {
  if (TASK_CONFIG['browser-sync'].server && TASK_CONFIG['browser-sync'].server.baseDir) {
    TASK_CONFIG['browser-sync'].server.baseDir = path.resolve(process.env.PWD, TASK_CONFIG['browser-sync'].server.baseDir);
  }

  return browserSync.init(TASK_CONFIG['browser-sync']);
}

gulp.task('browser-sync', browserSyncTask);
module.exports = browserSyncTask;
