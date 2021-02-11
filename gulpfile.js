const fs = require("fs");
const path = require("path");
const gulp = require("gulp");
const data = require("gulp-data");
const rename = require("gulp-rename");
const nunjucksRender = require("gulp-nunjucks-render");

function getDataForFile(file) {
  // console.log(file.path);
  const dataFilePath = file.path.replace(".html", ".json");
  const data = {};

  if (file.path.indexOf("routes") >= 0) {
    data.routeId = file.relative.replace(/\/.+\..+/g, "");
  }

  try {
    const tplData = JSON.parse(fs.readFileSync(dataFilePath));
    return { ...data, ...tplData };
  } catch (e) {
    return data;
  }
}

function images() {
  // const dirSync = require("gulp-directory-sync");
  // return gulp
  //   .src("")
  //   .pipe(dirSync("static", "build/static"))
  //   .on("error", function (err) {
  //     console.log(err.toString());
  //     this.emit("end");
  //   });
  return gulp
    .src("static/**/*.*", { base: "static" })
    .pipe(gulp.dest(path.join("build", "static")));
}

function templates() {
  return gulp
    .src("src/routes/**/*.html")
    .pipe(data(getDataForFile))
    .pipe(
      nunjucksRender({
        path: "src",
        ext: ".html",
        // envOptions: {
        //   watch: true
        // },
      })
    )
    .on("error", function (err) {
      console.log(err.toString());

      this.emit("end");
    })
    .pipe(
      rename((path) => {
        path.dirname = path.dirname === "home" ? "" : path.dirname;
      })
    )
    .pipe(gulp.dest("build"));
}

function watch() {
  const { watch } = require("gulp");
  const watchImages = watch(["static/**/*.*"]);
  const watchTemplates = watch(["src/**/*.{html,json}"]);

  watchImages.on("change", images);
  watchImages.on("link", images);
  watchImages.on("unlink", images);
  watchTemplates.on("change", templates);
}

const start = gulp.series(templates, images, watch);

const build = gulp.series(templates, images);

exports.start = start;
exports.default = build;
