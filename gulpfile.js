var gulp = require('gulp');
	//sass = require('gulp-sass');
	const sass = require('gulp-sass')(require('sass'));
	
	
	
/*
gulp.task('myFirstTask', function(dora) {
 console.log('Ax ti gulpp!');  
 //Obyazatel'no postavit' callback, t.e. vizov funkcii dora
 dora();
});*/

gulp.task('sass', function(done) {
	 gulp.src('src/sass/**/*.scss')
	.pipe(sass())
	//.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest('prod/styles'));
	done();
});
	
gulp.task('watch', function() {
	gulp.watch('src/sass/**/*.scss', gulp.series('sass'));
	
})



