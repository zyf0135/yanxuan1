var gulp = require("gulp");
//var sass = require("gulp-sass");
//var concat = require("gulp-concat");
//var uglify = require("gulp-uglify");
//var rename = require("gulp-rename");
//var minifycss = require("gulp-minify-css");
//sass编译

//gulp.task("sass",function(){
//	gulp.src("index.html").pipe(gulp.dest("dist"));
//});
gulp.task("copyfile",function(){
	gulp.src("index.html").pipe(gulp.dest("D:/Documents/Desktop/php/phpStudy/WWW/yanxuan/"));
});
gulp.task("copy-html",function(){
	gulp.src("*.html")
	.pipe(gulp.dest("D:/Documents/Desktop/php/phpStudy/WWW/yanxuan/"))
	})
gulp.task("copy-css",function(){
	gulp.src("css/*.css")
	.pipe(gulp.dest("D:/Documents/Desktop/php/phpStudy/WWW/yanxuan/css/"))
})                                                         
gulp.task("images",function(){                            
	gulp.src("images/**/*.{jpg,png,gif,bmp}")              
	.pipe(gulp.dest("D:/Documents/Desktop/php/phpStudy/WWW/yanxuan/images/"))
})                                                        
gulp.task("html",function(){                               
	gulp.src("html/*.html")                                
	.pipe(gulp.dest("D:/Documents/Desktop/php/phpStudy/WWW/yanxuan/html/"))
})                                                         
gulp.task("js",function(){                                
	gulp.src("js/*.js")                                    
	.pipe(gulp.dest("D:/Documents/Desktop/php/phpStudy/WWW/yanxuan/js/"))
})                                                         
gulp.task("php",function(){                               
	gulp.src("php/*.php")                                  
	.pipe(gulp.dest("D:/Documents/Desktop/php/phpStudy/WWW/yanxuan/php/"))
})

gulp.task("watchAll",function(){
	gulp.watch("*.html",["copy-html"]);
	gulp.watch("css/*.css",["copy-css"]);
	gulp.watch("images/*.{jpg,png,gif,bmp}",["images"]);
	gulp.watch("html/*.html",["html"]);
	gulp.watch("js/*.js",["js"]);
	gulp.watch("font/**",["font"]);
	gulp.watch("php/*.php",["php"]);
	//gulp.watch("scss/*.scss",["sass"]);
});

//自动监视
//gulp.task("watchAll",function(){
	//gulp.watch("/**/*",["copyAll"]);
	//
	//gulp.watch(["css/**/*","img/**/*","!img/12.jpg"],["copyNotFile"]);
	//gulp.watch(["img/*.jpg"],["copyImg"]);
	//gulp.watch(["*.scss"],["sass"]);
	
//});
