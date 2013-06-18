exports.handle = function(req, res,next){
	res.locals.title=req.session.userName;
	var a = eval(req.params.id+'(req,res,next)');
};


var index=function(req, res,next){
	res.render('index');
}

