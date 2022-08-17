const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const del = require('del');
const ts = require('gulp-typescript');
const tsProject = ts.createProject('tsconfig.json');

const src = gulp.src;
const dest = gulp.dest;
const watch = gulp.watch;
const series = gulp.series;
const parallel = gulp.parallel;

const fileInclude = require('gulp-file-include');
const htmlmin = require('gulp-htmlmin');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const csso = require('gulp-csso');
const rename = require('gulp-rename');
const gcmq = require('gulp-group-css-media-queries');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const minify = require('gulp-minify');
const ttf2woff2 = require('gulp-ttf2woff2');

const server = () => {
  browserSync.init({
    server: {
      baseDir: './public'
    }
  });
};

const html = () => {
  return src('./src/html/*.html')
    .pipe(fileInclude())
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest('./public'))
    .pipe(browserSync.stream());
};

const scss = () => {
  return src('./src/sass/*.scss')
    .pipe(sass())
    .pipe(concat('style.css'))
    .pipe(autoprefixer())
    .pipe(gcmq())
    .pipe(dest('./public/css'))
    .pipe(csso())
    .pipe(rename({ suffix: '.min' }))
    .pipe(dest('./public/css'))
    .pipe(browserSync.stream());
};

const typescript = () => {
  return tsProject.src()
    .pipe(tsProject()).js
    .pipe(minify())
    .pipe(dest('./public/js'))
    .pipe(browserSync.stream());
};

const javascript = () => {
  return src('./src/js/*.js')
    .pipe(minify())
    .pipe(dest('./public/js'))
    .pipe(browserSync.stream());
};

const img = () => {
  return src('./src/img/**/*.{jpg,jpeg,svg,png,gif}')
    .pipe(imagemin({
      verbose: true
    }))
    .pipe(dest('./public/img'));
};

const icons = () => {
  return src('./src/icons/**/*.{jpg,jpeg,svg,png,gif}')
    .pipe(dest('./public/icons'));
};

const font = () => {
  return src('./src/fonts/**/*.{ttf,otf,eot,otc,ttc,woff,svg}')
    .pipe(ttf2woff2({ ignoreExt: true }))
    .pipe(dest('./public/fonts'));
};

const clear = () => {
  return del('./public');
};

const watcher = () => {
  watch('./src/html/**/*.html', html);
  watch('./src/sass/**/*.scss', scss);
  watch('./src/img/**/*.{jpg,jpeg,svg,png,gif}', img);
  watch('./src/fonts/**/*.{ttf,otf,eot,otc,ttc,woff,svg}', font);
  watch('./src/chunk/**/*.html', html);
  watch('./src/ts/**/*.ts', typescript);
  watch('./src/js/**/*.js', javascript);
};

exports.dev = series(
  clear,
  parallel(html, scss, typescript, javascript, img, font, icons),
  parallel(watcher, server)
);