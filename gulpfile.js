var gulp = require('gulp');
var mocha = require('gulp-mocha');
var git = require('gulp-git');

gulp.task('default', function() {
  return gulp.src(['test/test.js'], { read: false })
    .pipe(mocha({
      reporter: 'spec'
    }))

});

gulp.task('add-push', function(){
  return gulp.src('./*')
    .pipe(git.add({args: '--no-all'}))
    .pipe(git.commit("This is commit from gulp"))
    .pipe(git.push());
});