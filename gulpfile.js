const gulp = require('gulp')
const svgSymbols = require('gulp-svg-symbols')
const rename = require('gulp-rename')
const filenamesToJson = require('gulp-filenames-to-json')
var fs = require('fs')

gulp.task(`sprites`, function () {
  return gulp
    .src(`icons/svg/*.svg`)
    .pipe(
      svgSymbols({
        templates: [`default-svg`],
        svgAttrs: {
          id: 'icon-%f'
        },
        slug: function (name) {
          return name //preserves the original name without modifications
        }
      })
    )
    .pipe(rename('telicon.svg'))
    .pipe(gulp.dest(`.`))
})

gulp.task('json', function () {
  return gulp
    .src('icons/svg/*.svg')
    .pipe(filenamesToJson())
    .pipe(rename('telicon-list.json'))
    .pipe(gulp.dest('.'))
})
