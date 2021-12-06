var gulp = require('gulp');
var licenses = require('gulp-license');
var pump = require('pump');

function license(cb) {
  pump([
      gulp.src('./lib/*.js'),
      licenses('MIT', {tiny: true}),
      gulp.dest('./dist')
    ],
    cb
  );
};
