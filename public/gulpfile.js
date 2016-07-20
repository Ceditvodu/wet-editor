var gulp = require('gulp');
var uglifyjs = require('gulp-uglifyjs');
var concat = require('gulp-concat');

gulp.task('default', function() {
  gulp.src('../app/*.js')
  .pipe(uglifyjs('app.min.js', {
      outSourceMap: true
    }))
  .pipe(gulp.dest('app/'));
    gulp.src('../app/*.js')
        .pipe(concat('jdoc.js'))
        .pipe(gulp.dest('app/'));
  
});