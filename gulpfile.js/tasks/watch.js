const gulp = require('gulp')
const watch = require('gulp-watch')
const path = require('path')

const watchTask = function() {
  const watchableTasks = ['html', 'static', 'javascripts', 'stylesheets', 'images', 'fonts', 'modernizr', 'lint'];

  watchableTasks.forEach(function(taskName) {
    const taskPath = PATH_CONFIG[taskName];
    const taskConfig = TASK_CONFIG[taskName];
    const srcPath = path.resolve(process.env.PWD, PATH_CONFIG.src, taskPath.src);
    const globPattern = '**/*' + (taskConfig.extensions ? '.{' + taskConfig.extensions.join(',') + '}' : '');

    watch(path.join(srcPath, globPattern), function() {
      require('./' + taskName)();
    });
  })
}

gulp.task('watch', ['browser-sync'], watchTask);
module.exports = watchTask;
