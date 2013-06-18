/**
 * Module dependencies.
 */

var express = require('express');

var app = module.exports = express();

// config
// 配置公共环境
app.configure(function(){
	app.use(express.bodyParser());
	app.use(express.cookieParser('shhhh, very secret'));
	app.use(express.session());
	app.set('view engine', 'ejs');
	app.set('views', __dirname + '/views');
});
//定义开发环境
app.configure('development', function(){
	 app.use(express.static(__dirname + '/public'));
	 app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

//定义生产环境
app.configure('production', function(){
    var oneYear = 31557600000;
    app.use(express.static(__dirname + '/public', { maxAge: oneYear }));
    app.use(express.errorHandler());
});

  
var routes = require('./routes');
routes(app);



if (!module.parent) {
  app.listen(3000);
  console.log('Express started on port 3000');
}
