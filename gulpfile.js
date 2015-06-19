var gulp = require('gulp'), 
  sass = require('gulp-sass') ,
  autoprefixer = require('gulp-autoprefixer'),
  minifycss = require('gulp-minify-css')

gulp.task('sass', function(){
  gulp.src('assets/scss/*.scss')
    .pipe(sass())
    .pipe(autoprefixer({browsers: ['last 2 versions'],cascade: false}))
    .pipe(minifycss())
    .pipe(gulp.dest('assets/css'))
});

gulp.task('watch', function(){
  gulp.watch('assets/scss/*.scss', ['sass'])
});

gulp.task('default', ['sass', 'watch']);
