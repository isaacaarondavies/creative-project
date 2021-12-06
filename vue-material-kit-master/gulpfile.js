var gulp = require('gulp');
var license = require('gulp-license');
var pump = require('pump');

gulp.task('license', function (cb) {
  pump([
      gulp.src('./lib/*.js'),
      license('MIT', {tiny: true}),
      gulp.dest('./dist')
    ],
    cb
  );
});
