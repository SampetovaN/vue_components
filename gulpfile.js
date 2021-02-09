'use strict';

var gulp = require('gulp');
var server = require('browser-sync').create();
var ts = require('gulp-typescript');


gulp.task("default", function () {
  var tsResult = gulp.src('build/*.ts')
      .pipe(ts({
          module: "amd",
          noImplicitAny: true,
          target: "es5",
          allowJs: true,
          outFile: 'app.js',
          moduleResolution: "node"
      }));
  return tsResult.js.pipe(gulp.dest("build"));
});

gulp.task('server', function () {
  server.init({
    server: 'build/',
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch('build/*.ts', gulp.series('default', 'refresh'));
});

gulp.task('refresh', function (done) {
  server.reload();
  done();
});

gulp.task('start', gulp.series('default', 'server'));
