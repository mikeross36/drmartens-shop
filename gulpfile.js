const { src, dest, watch, series, parallel } = require("gulp");

const sass = require("gulp-sass")(require("sass"))
const autoprefixer = require("gulp-autoprefixer")
const cleancss = require("gulp-clean-css")
const terser = require("gulp-terser")
const concat = require("gulp-concat")
const imagemin = require("gulp-imagemin")
const embedsvg = require("gulp-embed-svg")
const mode = require("gulp-mode")();
const sourcemaps = require("gulp-sourcemaps")

const files = {
    scssPath: "app/scss/**/*.scss",
    jsPath: "app/js/**/*.js",
    imgPath: "app/images/**/*"
}

function scssTask() {
    return src(files.scssPath)
    .pipe(mode.development(sourcemaps.init()))
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer("last 2 versions"))
    .pipe(cleancss())
    .pipe(mode.development(sourcemaps.write()))
    .pipe(dest("dist/css"))
}

function jsTask() {
    return src(files.jsPath)
    .pipe(mode.development(sourcemaps.init()))
    .pipe(concat("all.js"))
    .pipe(terser())
    .pipe(mode.development(sourcemaps.write()))
    .pipe(dest("dist/js"))
}

function imageminTask() {
    return src(files.imgPath)
    .pipe(imagemin())
    .pipe(dest("dist/images"))
}

function embedSvgTask() {
    return src("*/.html")
        .pipe(embedsvg())
    .pipe(dest("dist/images"))
}

function watchTask() {
    watch([files.scssPath, files.jsPath], parallel(scssTask, jsTask))
    watch(files.imgPath, imageminTask)
    watch("*/.html", embedSvgTask)
}

exports.default = series(
    parallel(scssTask, jsTask),
    imageminTask,
    embedSvgTask,
    watchTask
)

exports.build = series(
    parallel(scssTask, jsTask),
    imageminTask,
    embedSvgTask,
)
