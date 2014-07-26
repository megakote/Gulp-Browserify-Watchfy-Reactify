'use strict';

var browserify = require('browserify'),
    gulp = require('gulp'),
    source = require('vinyl-source-stream'),
    watchify = require('watchify'),
    reactify = require('reactify'),
    notify = require("gulp-notify");

// https://gist.github.com/Sigmus/9253068
function handleErrors() {
  var args = Array.prototype.slice.call(arguments);
  notify.onError({ title: "Compile Error", message: "<%= error.message %>"}).apply(this, args);
  this.emit('end');
 }

function build(isWatching) {
  var bundler = browserify('./src/app.js', {
    cache: {},
    packageCache: {},
    fullPaths: true,
    debug: true
   });

   var bundle = function() {
    return bundler
      .bundle()
      .on('error', handleErrors)
      .pipe(source('app.js'))
      .pipe(gulp.dest('./build'));
   };

  if (isWatching)
    bundler = watchify(bundler).on('update', bundle);

  bundler.transform(reactify);

  return bundle();
}

gulp.task('build', [], function() { return build(false); });
gulp.task('watch', [], function() { return build(true); });
gulp.task('default', []);
