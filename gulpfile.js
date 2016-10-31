// npm install --save-dev gulp gulp-vulcanize
var gulp = require('gulp');
var vulcanize = require('gulp-vulcanize');

gulp.task('vulcanize', function() {
  return gulp.src('build/unbundled/src/*')
    .pipe(vulcanize({
      stripComments: true,
      inlineScripts: true,
      inlineCss: true
    }))
    .pipe(gulp.dest('build/unbundled/dist'));
});

// Files to update after build + vulcanize
// index.html
// service-worker.js
// (change paths to /dist)
