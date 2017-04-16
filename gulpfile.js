var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify'); 
var minify = require('gulp-minify-css');
var rename = require('gulp-rename');
var htmlbuild = require('gulp-htmlbuild');
var ghPages = require('gulp-gh-pages');
var babel = require('gulp-babel');


gulp.task('js', function () {
  gulp.src('js/*.js')
    .pipe(babel())
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});


gulp.task('css', function () {
  gulp.src('css/*.css')
    .pipe(minify())
    .pipe(rename('all.css'))
    .pipe(gulp.dest('dist'));
});


gulp.task('default', ['js', 'css'], function () {
  console.log('The CSS and JS files have been updated.');
});


gulp.task('watch', function () {
  gulp.watch(['js/*', 'css/*'], ['default']);
});
