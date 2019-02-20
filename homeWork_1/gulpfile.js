var gulp                = require('gulp');
var browserSync         = require('browser-sync');
var sass                = require('gulp-sass');
var autoprefixer        = require('gulp-autoprefixer');
var concatCss           = require('gulp-concat-css');


gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "src/"
    });

    gulp.watch("src/sass/*.sass", ['sass']);
    gulp.watch("src/*.html").on('change', browserSync.reload);
});

gulp.task('sass', function() {
    return gulp.src("src/sass/*.sass")
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
        	browsers: ['last 2 versions'],
        	cascade: false
        	}))
        .pipe(concatCss('style.css'))
        .pipe(gulp.dest("src/css"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);