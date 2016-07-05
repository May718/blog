//引入模块
var http = require('http'), 	//http模块
	fs = require('fs'); 		//文件系统模块

/*
**	创建服务
** 	params
** 			[request] 			请求
** 			[response] 			响应
*/
var server = http.createServer(function(request,response){
	//读取文件,在root目录下读取某个文件
	//err 			是否有错，有错是真的，没错是假的
	//data 			文件数据。
	fs.readFile('root'+request.url,function(err,data){
		if(err){
			response.write('404');
		}else{
			response.write(data);
		}
		response.end();
	});
});
server.listen(8081);


