import gulp from "gulp";
import cp from "child_process";
import gutil from "gulp-util";
import postcss from "gulp-postcss";
import cssImport from "postcss-import";
import cssnext from "postcss-cssnext";
import BrowserSync from "browser-sync";
import webpack from "webpack";
import webpackConfig from "./webpack.conf";
import svgstore from "gulp-svgstore";
import svgmin from "gulp-svgmin";
import inject from "gulp-inject";
import imagemin from "gulp-imagemin";
import pngquant from "imagemin-pngquant";
import csso from "postcss-csso";
import changed from "gulp-changed";
import debug from "gulp-debug";
import cleanCss from "gulp-clean-css";
import gzip from "gulp-gzip";


const browserSync = BrowserSync.create();
const hugoBin = `./bin/hugo.${
  process.platform === "win32" ? "exe" : process.platform
}`;
const defaultArgs = ["-d", "../dist", "-s", "site"];

gulp.task("hugo", cb => buildSite(cb));
gulp.task("hugo-preview", cb =>
  buildSite(cb, ["--buildDrafts", "--buildFuture"])
);
gulp.task("build", ["css", "js", "cms-assets", "hugo", "img"]);
gulp.task("css2", ["css"]);
gulp.task("js2", ["js"]);
gulp.task("cms2", ["cms-assets"]);
gulp.task("hugo2", ["hugo"]);
gulp.task("img2", ["img"]);
gulp.task("build2", ["css", "js", "cms-assets", "hugo"]);
gulp.task("build-preview", ["css", "js", "cms-assets", "hugo-preview"]);

gulp.task("css", () =>
  gulp
    .src("./src/css/*.css")
    .pipe(
      postcss([
        cssImport({ from: "./src/css/main.css" }),
        cssnext(),
        csso({
          forceMediaMerge: true,
          clone: true,
          comments: false
        })
      ])
    )
    .pipe(cleanCss())
    .pipe(gzip())
    .pipe(gulp.dest("./dist/css"))
    .pipe(browserSync.stream())
);

gulp.task("cms-assets", () =>
  gulp
    .src("./node_modules/netlify-cms/dist/*.{woff,eot,woff2,ttf,svg,png}")
    .pipe(gulp.dest("./dist/css"))
);

gulp.task("js", cb => {
  const myConfig = Object.assign({}, webpackConfig);

  webpack(myConfig, (err, stats) => {
    if (err) throw new gutil.PluginError("webpack", err);
    gutil.log(
      "[webpack]",
      stats.toString({
        colors: true,
        progress: true
      })
    );
    browserSync.reload();
    cb();
  });
});

gulp.task("svg", () => {
  const svgs = gulp
    .src("site/static/img/vimages/*.svg")
    .pipe(svgmin())
    .pipe(svgstore({ inlineSvg: true }));

  function fileContents(filePath, file) {
    return file.contents.toString();
  }

  return gulp
    .src("site/layouts/partials/svg.html")
    .pipe(inject(svgs, { transform: fileContents }))
    .pipe(gulp.dest("./dist/img"));
});

gulp.task("img", () => {
  return gulp
    .src("site/static/img/*")
    .pipe(changed("./dist/img"))
    .pipe(debug())
    .pipe(
      imagemin({
        interlaced: true,
        progressive: true,
        svgoPlugins: [{ removeViewBox: false }],
        use: [pngquant()]
      })
    )
    .pipe(gulp.dest("./dist/img"))
    .pipe(browserSync.stream());
});

gulp.task("server", ["hugo", "css", "cms-assets", "js", "svg"], () => {
  browserSync.init({
    server: {
      baseDir: "./dist"
    }
  });
  gulp.watch("./src/js/**/*.js", ["js"]);
  gulp.watch("./src/css/**/*.css", ["css"]);
  gulp.watch("./site/static/img/vimages/*.svg", ["svg"]);
  gulp.watch("./site/**/*", ["hugo"]);
});

function buildSite(cb, options) {
  const args = options ? defaultArgs.concat(options) : defaultArgs;

  return cp.spawn(hugoBin, args, { stdio: "inherit" }).on("close", code => {
    if (code === 0) {
      browserSync.reload("notify:false");
      cb();
    } else {
      browserSync.notify("Hugo build failed :(");
      cb("Hugo build failed");
    }
  });
}
