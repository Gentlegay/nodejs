
var filter = require('./filter');
var user = require('./user');
var manage = require('./manage');

exports = module.exports = function(app){
	app.all('/manage/:id/:op?',filter.manager);
	app.get('/',function(req,res){
			res.redirect("/manage/index");
	});
	app.all('/manage/:id/:op?',manage.handle);
	app.get('/login',user.login);
	app.post('/login',user.doLogin);
};