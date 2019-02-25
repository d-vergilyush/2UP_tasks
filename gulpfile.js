var prName = 'homeWork_1';

var gulp                = require('gulp');
var browserSync         = require('browser-sync');
var sass                = require('gulp-sass');
var autoprefixer        = require('gulp-autoprefixer');
var concatCss           = require('gulp-concat-css');


gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: prName + "/"
    });

    gulp.watch(prName + "/sass/**/*.sass", ['sass']);
    gulp.watch(prName + "/**/*.html").on('change', browserSync.reload);
});

gulp.task('sass', function() {
    return gulp.src(prName + "/sass/*.sass")
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
        	browsers: ['last 2 versions'],
        	cascade: false
        	}))
        .pipe(concatCss('style.css'))
        .pipe(gulp.dest(prName + "/css"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);