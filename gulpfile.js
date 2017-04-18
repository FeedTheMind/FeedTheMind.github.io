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
var useref = require('gulp-useref');
var iff = require('gulp-if');
var csso = require('gulp-csso');

// For future reference/use

// gulp.task('js', function () {
//   return gulp.src('src/js/*.js')
//     .pipe(maps.init())
//     .pipe(babel())
//     .pipe(concat('all.js'))
//     .pipe(uglify())
//     .pipe(rename('all.min.js'))
//     .pipe(maps.write('../maps'))
//     .pipe(gulp.dest('dist/js'));
// });


// gulp.task('css', function () {
//   return gulp.src('src/css/*.css')
//     .pipe(minify())
//     .pipe(rename('all.min.css'))
//     .pipe(gulp.dest('dist/css'));
// });


// gulp.task('watch', function () {
//   gulp.watch('src/js/*.js', ['js']);
//   gulp.watch('src/css/*.css', ['css']);
// });


gulp.task('html', function () {
  return gulp.src('src/index.html')
    .pipe(useref())
    .pipe(iff('*.js', babel()))
    .pipe(iff('*.js', uglify()))
    .pipe(iff('*.css', csso()))
    .pipe(gulp.dest('dist'));
});


gulp.task('clean', function () {
  return del('dist');
});


gulp.task('assets', function(){
  return gulp.src(['src/img/**/*',
                   'src/slick/slick.css',
                   'src/slick/slick.min.js',
                  ], {base: './src'})
    .pipe(gulp.dest('dist'));
});


gulp.task('build', ['assets', 'html'], function () {
  console.log('Clean build: Finished');
});


gulp.task('default', ['clean'], function () {
  gulp.start('build');
}); // Single Gulp task "builds" site


gulp.task('deploy', function () {
  return gulp.src('./dist/**/*')
    .pipe(ghPages({branch: 'master'}));
});
