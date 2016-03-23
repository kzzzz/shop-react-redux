var gulp = require('gulp');
var watchify = require('watchify');


gulp.task('watch', ['watchify'], function () {

});

gulp.task('watchify', function () {

    return gulp.src('./src/app/index.jsx')
        .pipe(gulp.dest('./dist/'));

});