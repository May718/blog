var fs = require('fs');

fs.readFile('a.txt',function(err,data){
	if(err){
		console.log('404');
	}else{
		console.log(''+data);
	}
});