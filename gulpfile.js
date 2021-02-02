const gulp = require("gulp");
const sass = require("gulp-sass");
const concat = require("gulp-concat");

gulp.task("build_css", () => {
  return gulp
    .src("sass/**/*.scss")
    .pipe(sass())
    .pipe(concat("style.css"))
    .pipe(gulp.dest("public/stylesheets"));
});

gulp.task("watch_css", () => {
  gulp.watch("sass/**/*.scss", gulp.series("build_css"));
});
