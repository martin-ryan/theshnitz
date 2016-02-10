var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var reactify = require('reactify');
var babelify = require('babelify');
var rename = require("gulp-rename");
var notify = require('gulp-notify');
var gulp = require('gulp');
var gutil = require('gulp-util');
var browserSync = require('browser-sync').create();
// var reload = browserSync.reload;

//
//
function handleErrors() {
  var args = Array.prototype.slice.call(arguments);
  notify.onError({
    title: 'Compile Error',
    message: '<%= error.message %>'
  }).apply(this, args);
  this.emit('end'); // Keep gulp from hanging on this task
}
//
function buildWatchScript(file) {

  var props = {
    entries: [file],
    debug : true,
    transform: [reactify, babelify]
  };

  var bundler = watchify(browserify(props));

  function rebundle() {
    var stream = bundler.bundle();
    return stream
      .on('error', handleErrors)
      .pipe(source(file))
      .pipe(rename("bundle.js"))
      .pipe(gulp.dest('./public'))
  }

  bundler.on('update', function() {
    rebundle();
    gutil.log('Rebundle...');
  });

  return rebundle();
};
//
gulp.task('scripts-watch', function() {
  return buildWatchScript('./src/index.js');
});

//
//
// gulp.task('serve', function () {
//
//     // Serve files from the root of this project
//     browserSync.init({
//       proxy: "localhost:3000",
//       open: "local",
//       injectChanges: true,
//       files: ["public/**.*"]
//     });
//
//     // gulp.watch("./public").on("change", browserSync.reload);
// });

//
//
gulp.task('default', ['scripts-watch']);
