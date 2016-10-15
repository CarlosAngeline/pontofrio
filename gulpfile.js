//INIT
var gulp = require('gulp');

var sourcemaps = require('gulp-sourcemaps');

//PLUGINS
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

//PATHS
var config = {
    bootstrapDir: './bower_components/bootstrap-sass',
    publicDir: './html',
	bowerDir: './bower_components',
	sassPath: './sass',
	
};

//COMPILE SASS & CSS
gulp.task('css', function() {
    return gulp.src([config.sassPath + '/main.scss'])
    .pipe(sourcemaps.init())
    .pipe(sass({
        outputStyle: 'nested',
		removeComments: false,
		minifyCSS: true,
        includePaths: [
		config.bootstrapDir + '/assets/stylesheets',
		config.bowerDir + '/font-awesome/scss'
		],
    }))
    .pipe(sourcemaps.write())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest(config.publicDir + '/css'));
});

//FONTS & OTHERS
gulp.task('fonts', function() {
    return gulp.src([config.bootstrapDir + '/assets/fonts/**/*', config.bowerDir + '/font-awesome/fonts/**.*'])
    .pipe(gulp.dest(config.publicDir + '/fonts'));
});

//COPY JS FROM BOWER COMPONETS
gulp.task('js', function() {
     return gulp.src(config.bootstrapDir + '/assets/javascripts/bootstrap.min.js')
    .pipe(gulp.dest(config.publicDir + '/js'));
});

//MINIFY & CONCATE JS
gulp.task('compress', function() {
    return gulp.src([config.publicDir + '/js/get-shit-done.js' ])
      .pipe(concat('custom.js'))
      .pipe(rename({suffix: '.min'}))
      .pipe(uglify())
      .pipe(gulp.dest(config.publicDir + '/js'));
});

//WATCH ALL PROJECTS FOR CHANGES
gulp.task('watch', function() {
   // Watch .js files
  gulp.watch(config.publicDir + '/js/*.js', ['compress']);
   // Watch .scss files
  gulp.watch(config.sassPath + '/**/*.scss', ['css']);
   // Watch image files
  //gulp.watch('src/images/**/*', ['images']);
});

gulp.task('default', ['css', 'fonts', 'js', 'compress', 'watch']);