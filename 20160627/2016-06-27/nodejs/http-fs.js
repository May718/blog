var http = require('http'),
	fs = require('fs');

http.createServer(function(req,res){
	//req.url
	//  	/a.html 	/b.html 	/c.html
	// 		root/a.html root/b.html root/c.html
	fs.readFile('root'+req.url,function(err,data){
		if(err){
			res.write('404');
		}else{
			res.write(data);
		}
		res.end();
	});
	
}).listen(8081);







