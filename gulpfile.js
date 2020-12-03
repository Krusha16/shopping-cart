const {src, dest, series, parallel} = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const terser = require('gulp-terser');
const concat = require('gulp-concat');
const imagemin = require('gulp-imagemin');

function htmlTask(){
  return src('src/*html')
  .pipe(dest('dist'))
}

function scriptsTask(){
  return src('src/js/*.js')
  .pipe(sourcemaps.init())
  .pipe(terser())
  .pipe(sourcemaps.write())
  .pipe(concat('all.js'))
  .pipe(dest('dist/js'))
}

function stylesTask(){
  return src(['src/css/style.css', 'src/css/new.css'])
  .pipe(sourcemaps.init())
  .pipe(autoprefixer())
  .pipe(sourcemaps.write())
  .pipe(concat('all.css'))
  .pipe(dest('dist/css'))
}

function imagesTask(){
  return src('src/images/*')
  .pipe(imagemin())
  .pipe(dest('dist/images'))
}

exports.html = htmlTask;
exports.scripts = scriptsTask;
exports.images = imagesTask;
exports.styles = stylesTask;
exports.images = imagesTask;
exports.default = series(htmlTask, imagesTask,scriptsTask, stylesTask);