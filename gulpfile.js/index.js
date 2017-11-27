const gulp = require('gulp');
const requireDir = require('require-dir');

global.PATH_CONFIG = require('./path-config.json');
global.TASK_CONFIG = require('./task-config.json');

requireDir('./tasks', {
  recurse: true
});
