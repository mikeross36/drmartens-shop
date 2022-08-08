const { src, dest, watch, series, parallel } = require("gulp")
const imagemin = require('gulp-imagemin');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const replace = require('gulp-replace');
const terser = require('gulp-terser');
const sass = require('gulp-sass')(require("sass"));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

const paths = {
    html: {
      src: ['./app/**/*.html'],
      dest: './dist/',
    },
    images: {
      src: ['./app/images/**/*'],
      dest: './dist/images/',
    },
    styles: {
      src: ['./app/scss/**/*.scss'],
      dest: './dist/css/',
    },
    scripts: {
      src: ['./app/js/**/*.js'],
      dest: './dist/js/',
    },
    cachebust: {
      src: ['./dist/**/*.html'],
      dest: './dist/',
    },
  };


function copyHtml() {
    return src(paths.html.src)
        .pipe(dest(paths.html.dest));
}

function optimizeImages() {
    return src(paths.images.src)
    .pipe(imagemin().on('error', (error) => console.log(error)))
    .pipe(dest(paths.images.dest));
}

function compileStyles() {
    return src(paths.styles.src)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(rename({ suffix: '.min' }))
    .pipe(sourcemaps.write('.'))
    .pipe(dest(paths.styles.dest));
}

function minifyScripts() {
    return src(paths.scripts.src)
    .pipe(sourcemaps.init())
    .pipe(concat("all.js"))
    .pipe(terser().on('error', (error) => console.log(error)))
    .pipe(rename({ suffix: '.min' }))
    .pipe(sourcemaps.write('.'))
    .pipe(dest(paths.scripts.dest));
}

function cacheBust() {
    return src(paths.cachebust.src)
    .pipe(replace(/cache_bust=\d+/g, 'cache_bust=' + new Date().getTime()))
    .pipe(dest(paths.cachebust.dest));
}

function watcher() {
    watch(paths.html.src, series(copyHtml, cacheBust));
    watch(paths.images.src, optimizeImages);
    watch(paths.styles.src, parallel(compileStyles, cacheBust));
    watch(paths.scripts.src, parallel(minifyScripts, cacheBust));
}

exports.copyHtml = copyHtml;
exports.optimizeImages = optimizeImages;
exports.compileStyles = compileStyles;
exports.minifyScripts = minifyScripts;
exports.cacheBust = cacheBust;
exports.watcher = watcher;

exports.default = series(
  parallel(copyHtml, optimizeImages, compileStyles, minifyScripts),
  cacheBust,
  watcher
);

