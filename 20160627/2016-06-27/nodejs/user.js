var http = require('http'),
	fs = require('fs'),
	mysql = require('mysql'),
	qs = require('querystring');


var server = http.createServer(function(request,response){
	//localhost:8081/user.html
	//localhost:8081/api?...
	if(request.url.indexOf('?')!=-1){
		var arr = request.url.split('?')
		//act=log&username=xxx&password=xxx
		var GET = qs.parse(arr[1]);
		var act = GET['act'];
		switch(act){
			case 'log':
				var db = mysql.createConnection({
					host:'localhost',
					user:'root',
					password:'',
					database:'20160627'
				});
				var SQL = "SELECT * FROM user_tab WHERE username='"+GET['user']+"'";
				db.query(SQL,function(err,data){
					if(err){
						console.log('错了')
					}else{
						if(data.length){
							if(data[0].password==GET['pass']){
								response.end("{\"err\":0,\"msg\":\"登录成功\"}");
							}else{
								response.end("{\"err\":1,\"msg\":\"用户名或密码错误\"}");
							}
						}else{
							response.end("{\"err\":1,\"msg\":\"用户未注册\"}");
						}
					}
				});
				break;
			case 'add':
				var db = mysql.createConnection({
					host:'localhost',
					user:'root',
					password:'',
					database:'20160627'
				});
				var SQL = "SELECT * FROM user_tab WHERE username='"+GET['user']+"'";
				db.query(SQL,function(err,data){
					if(err){
						console.log('错了');
					}else{
						if(data.length){
							response.end("{\"err\":1,\"msg\":\"用户名已被占用\"}");
						}else{
							var SQL2 = "INSERT INTO user_tab VALUES('"+GET['user']+"','"+GET['pass']+"')";
							db.query(SQL2,function(err,data){
								if(err){
									response.end("{\"err\":1,\"msg\":\"注册失败\"}");
								}else{
									response.end("{\"err\":0,\"msg\":\"注册成功\"}");
								}
							});
						}
					}
				});
				break;
		}
	}else{
		fs.readFile('www'+request.url,function(err,data){
			if(err){
				response.end('404');
			}else{
				response.end(data);
			}
		});
	}
});
server.listen(8081);














