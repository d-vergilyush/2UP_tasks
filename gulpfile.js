var prName = 'homeWork_4';

var gulp                = require('gulp');
var browserSync         = require('browser-sync');
var sass                = require('gulp-sass');
var autoprefixer        = require('gulp-autoprefixer');
var concatCss           = require('gulp-concat-css');
var svgSprite           = require('gulp-svg-sprite');
var rename              = require("gulp-rename");
let cleanCss            = require('gulp-clean-css');


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
        .pipe(concatCss('style.css'))
        .pipe(rename({suffix: '.min', prefix: '', extname: '.css'}))
        .pipe(autoprefixer(['last 15 versions']))
        .pipe(cleanCss( {level: { 1: { specialComments: 0 } } }))
        .pipe(gulp.dest(prName + "/css"))
        .pipe(browserSync.stream());
});

gulp.task('svgSprite', function () {
    return gulp.src(prName + "/img/sprite/*.svg") // svg files for sprite
        .pipe(svgSprite({
                mode: {
                    stack: {
                        sprite: "../sprite.svg"  //sprite file name
                    }
                },
            }
        ))
        .pipe(gulp.dest(prName + "/img/icons"));
});


gulp.task('default', ['serve']);