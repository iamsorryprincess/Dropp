var gulp = require('gulp');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('css', function() {
  return gulp.src('css/*.less')
    .pipe(less())
    .pipe(gulp.dest('css'))
});

gulp.task('prefixes', function() {
    gulp.src('css/style.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('css'))
});

gulp.task('default', ['prefixes']);