var gulp = require('gulp');
var FwdRef = require('undertaker-forward-reference');
var license = require('gulp-license');
var pump = require('pump');

gulp.registry(FwdRef()); // or gulp.registry(new FwdRef());

gulp.task('license', function (cb) {
  pump([
      gulp.src('./lib/*.js'),
      license('MIT', {tiny: true}),
      gulp.dest('./dist')
    ],
    cb
  );
});
