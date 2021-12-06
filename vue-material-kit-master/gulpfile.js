var gulp = require('gulp');
var license = require('gulp-license');
var pump = require('pump');
var FwdRef = require('undertaker-forward-reference');

gulp.registry(FwdRef()); // or gulp.registry(new FwdRef());

gulp.task('default', gulp.series('forward-ref'));

gulp.task('forward-ref', function(cb){
  // do task things
  cb();
});

gulp.task('license', function (cb) {
  pump([
      gulp.src('./lib/*.js'),
      license('MIT', {tiny: true}),
      gulp.dest('./dist')
    ],
    cb
  );
});
