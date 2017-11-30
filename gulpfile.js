// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var minify = require('gulp-minify-css');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename'),
    sourcemaps = require("gulp-sourcemaps"),
    del = require('del'),
    babel = require("gulp-babel"),
    browserSync = require('browser-sync').create();
var tinypng = require('gulp-tinypng-compress');

//Define the app path
var path = {
    all:[
        './template/*.html',
        './src/assets/css/*.css',
        './src/assets/js/*.js',
        './src/assets/js/lib/*.js'
    ],
    template:['./template/*.html'],
    css:['./src/assets/css/*.css'],
    js:[
        './src/assets/js/lib/zepto.min.js',
        //'./src/assets/js/lib/pre-loader.js',
        //'./src/assets/js/lib/reqAnimate.js',
        //'./src/assets/js/rem.js',
        //'./src/assets/js/common.js',
        //'./src/assets/js/wxshare.js',
        //'./src/assets/js/api.js',
        //'./src/assets/js/home.js'
    ],
    wechatJs:[
        './src/assets/js/lib/jquery.min.1.7.js',
        './src/assets/js/lib/pre-loader.js',
        './src/assets/js/lib/turn.min.js',
        './src/assets/js/rem.js',
        './src/assets/js/region.js',
        './src/assets/js/common.js',
        './src/assets/js/api.js',
        './src/assets/js/home.js',
        './src/assets/js/home_wechat.js',
    ],
    weiboJs:[
        './src/assets/js/lib/jquery.min.1.7.js',
        './src/assets/js/lib/pre-loader.js',
        './src/assets/js/lib/turn.min.js',
        './src/assets/js/rem.js',
        './src/assets/js/region.js',
        './src/assets/js/common.js',
        './src/assets/js/api.js',
        './src/assets/js/home.js',
        './src/assets/js/home_weibo.js',
    ],
    webJs:[
        './src/assets/js/lib/jquery.min.1.7.js',
        './src/assets/js/lib/pre-loader.js',
        './src/assets/js/lib/turn.min.js',
        './src/assets/js/rem.js',
        './src/assets/js/region.js',
        './src/assets/js/common.js',
        './src/assets/js/api.js',
        './src/assets/js/home.js',
        './src/assets/js/home_web.js',
    ],
    images:[
        './src/assets/*.{png,jpg,jpeg}',
        './src/assets/*/*.{png,jpg,jpeg}',
        './src/assets/*/*/*.{png,jpg,jpeg}'
    ],
};
// Browser-sync
gulp.task('browser-sync', function() {
    browserSync.init(path.all,{
        server: {
            baseDir: "./",
            startPath: ''
        }
    });
});

// Not all tasks need to use streams
// A gulpfile is just another node program and you can use any package available on npm
gulp.task('clean', function() {
    // You can use multiple globbing patterns as you would with `gulp.src`
    return del(['build']);
});


//css
gulp.task('css',['clean'],function () {
    // 1. 找到文件
    gulp.src(path.css)
        //.pipe(concat('style.css'))
        // 2. 压缩文件
        .pipe(minify())
        // 3. 另存为压缩文件
        .pipe(gulp.dest('./src/dist/css'));
});

// Concatenate & Minify
gulp.task('scripts_wechat',['clean'], function() {
    return gulp.src(path.wechatJs)
        .pipe(concat('all_wechat.js'))
        .pipe(gulp.dest('./src/dist'))
        .pipe(rename('all_wechat.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./src/dist/js'));
});
gulp.task('scripts_weibo',['clean'], function() {
    return gulp.src(path.weiboJs)
        .pipe(concat('all_weibo.js'))
        .pipe(gulp.dest('./src/dist'))
        .pipe(rename('all_weibo.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./src/dist/js'));
});

gulp.task('scripts_web',['clean'], function() {
    return gulp.src(path.weiboJs)
        .pipe(concat('all_web.js'))
        .pipe(gulp.dest('./src/dist'))
        .pipe(rename('all_web.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./src/dist/js'));
});

// Concatenate & Minify
gulp.task("tinypng", function(){
    gulp.src(path.images)
        .pipe(tinypng({
            key: '-ID8TBnbSlRuMCc_mMagta65Q7IDyaQ-',
            sigFile: './src/.tinypng-sigs',
            log: true
        })).on('error', function(err) {
            console.error(err.message);
        })
        .pipe(gulp.dest('./src/dist/'));
});

// Watch Files For Changes
gulp.task('watch', ['clean'],function() {
    gulp.watch(path.css,['css']);
    gulp.watch(path.wechatJs,['scripts_wechat']);
    gulp.watch(path.weiboJs,['scripts_weibo']);
    gulp.watch(path.web,['scripts_web']);
    gulp.watch(path.images,['tinypng']);
});

// Default Task
gulp.task('default', ['watch', 'css','scripts_wechat','scripts_weibo','scripts_web','browser-sync']);


