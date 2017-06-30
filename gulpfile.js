const child = require('child_process');
const browserSync = require('browser-sync').create();

const gulp = require('gulp');
const concat = require('gulp-concat');
const gutil = require('gulp-util');

const siteRoot = '_site';

gulp.task('jekyll', () => {
  const jekyll = child.exec('bundle exec jekyll b -w');

  const jekyllLogger = (buffer) => {
    buffer = buffer.toString();
    buffer = buffer.split(/\n/)
    buffer.forEach(function(message){
      if (message!=""){
        gutil.log('Jekyll: ' + message)
      }
    })
  };

  jekyll.stdout.on('data', jekyllLogger);
  jekyll.stderr.on('data', jekyllLogger);
});

gulp.task('serve', () => {
  browserSync.init({
    files: [siteRoot + '/**'],
    port: 4000,
    server: {
      baseDir: siteRoot
    }
  });
});

gulp.task('docs',() =>{
  const docs = child.exec('docsify serve docs');
  const docsifyLog = (buffer) => {
    buffer = buffer.toString();
    buffer = buffer.split(/\n/)
    buffer.forEach(function(message){
      if (message!=""){
        gutil.log('Docsify: ' + message)
      }
    });
  }

  docs.stdout.on('data', docsifyLog);
})
gulp.task('default', ['jekyll', 'serve', 'docs']);