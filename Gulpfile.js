const gulp = require('gulp'),
      maps = require('gulp-sourcemaps'),
      rename = require('gulp-rename'),
      plumber = require('gulp-plumber'),
      sass = require('gulp-sass'),
      crunch = require('gulp-csso'),
      concat = require('gulp-concat'),
      ugly = require('gulp-uglify'),
      babel = require('gulp-babel');


gulp.task('sass', () => {
   return gulp.src('src/scss/**/*.scss')
       .pipe(maps.init())
       .pipe(plumber())
       .pipe(sass())
       .pipe(maps.write('.'))
       .pipe(gulp.dest('./src/css'));
});

gulp.task('crunch', ['sass'], () => {
   return gulp.src('./src/css/app.css')
       .pipe(crunch())
       .pipe(rename('app.min.css'))
       .pipe(gulp.dest('./dist/css'));
});

gulp.task('transpile', () => {
    return gulp.src('src/js/es6/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('src/js/es5/'));
});

gulp.task('concat', ['transpile'], () => {
    return gulp.src(['./node_modules/underscore/underscore-min.js', './src/js/es5/api.js','./dist/lib/tinysort/tinysort.min.js', './src/js/es5/scripts.js'])
        .pipe(maps.init())
        .pipe(plumber())
        .pipe(concat('app.js'))
        .pipe(maps.write('.'))
        .pipe(gulp.dest('./src/js/es5'));
});

gulp.task('ugly', ['concat'], () => {
    return gulp.src('./src/js/es5/app.js')
        .pipe(ugly())
        .pipe(rename('app.min.js'))
        .pipe(gulp.dest('./dist/js'));
});

gulp.task('watchFiles', () => {
    gulp.watch('./src/js/**/*.js', ['ugly']);
    gulp.watch('./src/scss/**/*.scss', ['crunch']);
});

gulp.task('serve', ['watchFiles']);