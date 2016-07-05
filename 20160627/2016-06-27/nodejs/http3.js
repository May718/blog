var http = require('http');

var server = http.createServer(function(request,response){
	switch(request.url){
		case '/1.html':
			response.write('<!doctype html><html><head><meta charset="utf-8"><meta name="author" content="智能社 - zhinengshe.com" /><meta name="copyright" content="智能社 - zhinengshe.com" /><meta name="description" content="智能社是一家专注于web前端开发技术的公司，目前主要提供JavaScript培训和HTML5培训两项服务，同时还推出了大量javascript基础知识教程，智能课堂为你带来全新的学习方法和快乐的学习体验。" /><title>智能社— http://www.zhinengshe.com</title><style>div{width:200px; height:200px; background:red;}</style><script>window.onload=function(){	var oDiv = document.body.children[0];	oDiv.onclick=function(){alert(1);	};};</script></head><body><div></div></body></html>');
			response.end();
			break;
		case '/2.html':
			response.write('<!doctype html><html><head><meta charset="utf-8"><meta name="author" content="智能社 - zhinengshe.com" /><meta name="copyright" content="智能社 - zhinengshe.com" /><meta name="description" content="智能社是一家专注于web前端开发技术的公司，目前主要提供JavaScript培训和HTML5培训两项服务，同时还推出了大量javascript基础知识教程，智能课堂为你带来全新的学习方法和快乐的学习体验。" /><title>智能社— http://www.zhinengshe.com</title><style>div{width:200px; height:200px; background:black;}</style><script>window.onload=function(){	var oDiv = document.body.children[0];	oDiv.onclick=function(){alert(2);	};};</script></head><body><div></div></body></html>');
			response.end();
			break;
		case '/3.html':
			response.write('<!doctype html><html><head><meta charset="utf-8"><meta name="author" content="智能社 - zhinengshe.com" /><meta name="copyright" content="智能社 - zhinengshe.com" /><meta name="description" content="智能社是一家专注于web前端开发技术的公司，目前主要提供JavaScript培训和HTML5培训两项服务，同时还推出了大量javascript基础知识教程，智能课堂为你带来全新的学习方法和快乐的学习体验。" /><title>智能社— http://www.zhinengshe.com</title><style>div{width:200px; height:200px; background:pink;}</style><script>window.onload=function(){	var oDiv = document.body.children[0];	oDiv.onclick=function(){alert(3);	};};</script></head><body><div></div></body></html>');
			response.end();
			break;
		default:
			response.write('404');
			response.end();
			break;
	}
});
server.listen(8081);








