const gulp = require('gulp');
const babel  = require('gulp-babel');

gulp.task('default', () => {
	gulp.src('src/**/*.js')
	.pipe(babel({
		presets: ['@babel/env',  '@babel/react']
	}))
	.pipe(gulp.dest('dist'));
});

