//this will test the complexity of the functions in valuable number
var gulp = require('gulp');
complexity = require('gulp-complexity');
var ts = require('gulp-typescript');

gulp.task('default', function () {

    return gulp.src('src/app/views/arenas/arena-create/*.ts')
        .pipe(ts({
            noImplicitAny: true
        }))
		.pipe(complexity({breakOnErrors: false}));
});

gulp.task('testJS', function(){
	return gulp.src('*.js')
		.pipe(complexity());
});

gulp.task('testHTML', function(){
	return gulp.src('*.html')
		.pipe(complexity());
});
