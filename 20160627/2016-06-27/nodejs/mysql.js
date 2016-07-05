var mysql = require('mysql');

var db = mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'',
	database:'20160627'
});
var SQL = 'SELECT * FROM user_tab';
db.query(SQL,function(err,data){
	console.log(data[3].username+','+data[3].password);
});