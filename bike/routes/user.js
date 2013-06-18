var conn= require('../db').conn;


exports.login = function(req, res){
	res.render('auth/login');
};



exports.doLogin = function(req, res){
	conn.query('SELECT * from MANGER_USER where USER_NAME = "'+req.body.userName+'"', function(err, rows, fields) {
		  if (err) throw err;
		  if(rows.length>0){
			  res.locals.title=rows[0].USER_NAME;
			  req.session.userName=rows[0].USER_NAME;
			  res.redirect("/manage/index");
		  }else{
			  res.render('auth/login');
		  }
	});
};