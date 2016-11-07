import gulp from 'gulp';
import webpack from 'webpack-stream';
import config from './webpack.config.js';
import nodemon from 'gulp-nodemon';

// import autoprefixer from 'gulp-autoprefixer';

gulp.task('default', (cb) => {
  const stream = nodemon({
    script: 'index.js',
    tasks: [`webpack`]
  });

  stream.on('restart', () => {
    console.log('Node server restarted due to changes');
  });

  console.log(`OK. Dev server is listening on port 3000`);

  cb();
});

gulp.task('webpack', function() {
  return gulp.src('src/routes/*.jsx')
    .pipe(webpack(config))
    .pipe(gulp.dest('public/scripts/'));
});
