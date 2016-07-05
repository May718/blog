var http = require('http');

var server = http.createServer(function(request,response){
	//request 		请求 	客户端-》服务端
	//response 		响应 	服务端-》客户端
	console.log('Someone is coming');
	
	//response.write('welcome');
	response.end('welcome');
});
server.listen(8081);








