var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify'); 
var minify = require('gulp-minify-css');
var rename = require('gulp-rename');
var htmlbuild = require('gulp-htmlbuild');
var ghPages = require('gulp-gh-pages');
var babel = require('gulp-babel');
var maps = require('gulp-sourcemaps');
var del = require('del');


gulp.task('js', function () {
  return gulp.src('js/*.js')
    .pipe(maps.init())
    .pipe(babel())
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(rename('all.min.js'))
    .pipe(maps.write('../maps'))
    .pipe(gulp.dest('dist'));
});


gulp.task('css', function () {
  return gulp.src('css/*.css')
    .pipe(minify())
    .pipe(rename('all.min.css'))
    .pipe(gulp.dest('dist'));
});


gulp.task('build', ['js', 'css'], function () {
  console.log('The CSS and JS files have been updated.');
});


gulp.task('watch', function () {
  gulp.watch('js/*.js', ['js']);
  gulp.watch('css/*.css', ['css']);
});


gulp.task('default', ['build']); // Single Gulp task "builds" site


gulp.task('clean', function () {
  del('dist');
});
