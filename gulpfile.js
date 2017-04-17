// We use the require function again in order to load the gulp package
// into a gulp variable that can be used in our code.
var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');



// task, called 'myTask' will console.log('hello gulp')
// when we type 'gulp myTask'
gulp.task('myTask', function(){
  console.log('hello gulp');
});

// Another example..
// when we type 'gulp sayHello', 'hello!' will show in the console
gulp.task('sayHello', function() {
  console.log('hello!');
});

// 'gulp jsBrowserify', will take our js file 'pingpong-interface.js'
// bundle it into app.js and put app.js in the build/js folder
//**[WARNING]** We seperate our production files in the 'build' directory
gulp.task('jsBrowserify', function() {
  return browserify({ entries: ['./js/pingpong-interface.js'] })
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./build/js'));
});
