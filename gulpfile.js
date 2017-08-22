var gulp = require('gulp');
var embedTemplates = require('gulp-angular-embed-templates');

gulp.task('js:build', function () {
    gulp.src('src/**/*.js')
        .pipe(embedTemplates())
        .pipe(gulp.dest('./dist'));
});
