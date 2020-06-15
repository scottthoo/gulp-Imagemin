var gulp = require('gulp');
var tinypng = require('gulp-tinypng-compress');
var imagemin = require('gulp-imagemin');

gulp.task('tinypng', function (cb) {
  gulp
    .src('/Users/scottthoo/Developer/CocoProjects/pok-deng/build/web-mobile/**/*.{png,jpg,jpeg}')
    .pipe(
      tinypng({
        key: 'FGMV8Zzk2dWXlLQSYCQ8Y5qzs1Z0gbKS',
        sigFile: './build/.tinypng-sigs',
        log: true,
      })
    )
    .pipe(gulp.dest('/Users/scottthoo/Developer/CocoProjects/pok-deng/build/web-mobile/'))
    .on('end', cb);
});

gulp.task('imagemin', function (cb) {
  gulp
    .src('/Users/scottthoo/Developer/CocoProjects/pok-deng/build/web-mobile/**/*.{png,jpg,jpeg}')
    .pipe(
      imagemin([
        imagemin.gifsicle({ interlaced: true }),
        imagemin.mozjpeg({ progressive: true }),
        imagemin.optipng({ optimizationLevel: 5 }),
      ])
    )
    .pipe(gulp.dest('/Users/scottthoo/Developer/CocoProjects/pok-deng/build/web-mobile/'))
    .on('end', cb);
});

gulp.task('default', function () {
  return console.log('Gulp is running...');
});
