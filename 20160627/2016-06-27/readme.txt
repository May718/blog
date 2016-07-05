笔记
===================================
文强
联系方式: 	13718079028
qq:  		1677160576
qq群：          522431670
======================================
后台:
php
选择php的原因：
1.市场占有率。
2.上手简单。
3.语法跟javascript惊人的相似。
=======================================
后台。必须配合服务器环境。

第一件事。创建php文件。
php标签
<?php
 	//your code
?>

输出
php如何输出 "Hello World!!!"

echo 你要输出的东西。

=======================================
语法
**客户端看不到后台的代码。为了安全。


运算

php中
+ 	的作用只有一个，就是运算加法。

php中字符串拼接：
. 			字符串拼接。


======================================
操作属性
js 	
	.
	person.showName();
	person.age;
php
	person->showName();
	person->age;
	

声明变量
js
	var 变量名 = 变量值;
php
	$变量名 = 变量值;


声明函数
js+php
	function 函数名(参数){
		//your code
		//return xxx;
	}
	函数名(参数);

=======================================
后台语言：
php如何接收前端提交的数据。
form
	get.post
ajax
	一模一样
==================================
用户注册、登录
=================================
数据库 	数据的仓库 	database
==================================
mysql
1.免费
2.轻量，简单。
3.mysql和php是好基友。
==================================
mysql
可视化管理工具。
phpMyAdmin 		mysql可视化管理工具
http://localhost/phpmyadmin/

====================================
库 		起到管理作用。相当于文件夹，不能直接存数据。管理表。
表 		相当于记事本。。真正写入数据的。

	行 		某一条数据
	列 		某一项数据
=========================================
字段 			每一列的名字
类型 			每个字段的类型
	CHAR 		字符 		'a' 	'b'
	VARCHAR 	字符串 		'abcdefg'
	TEXT 		大字符串(文本) 	
	INT 		整数 		12 	5
	FLOAT 		单精度浮点数 	12.5 	55.3
	DOUBLE 		双精度浮点数	12.543 	12.43

============================================
关于数据：就四种操作.
增删改查

php如何去操作mysql数据库
ajax 				
1.创建ajax对象 		
2.打开连接 			
3.发送请求 			
4.接收响应 			

php
1.连接数据库
mysql_connect(url,username,password);
2.选择库
mysql_select_db(数据库名字);
3.查询/插入/删除/修改
	a).有SQL语句

	$result = mysql_query($SQL);

4.获取结果
	$row = mysql_fetch_row($result);


SQL语句
数据库有自己的语言：SQL

规范。字母大写。

查询
SELECT * FROM 表名;

SELECT * FROM user_tab;

加条件
SELECT * FROM 表名 WHERE xxx=xxx;

SELECT * FROM user_tab WHERE username='lisi';


限制范围
SELECT * FROM 表名 LIMIT 从哪开始,拿多少
SELECT * FROM flow_tab LIMIT 0,10;
SELECT * FROM flow_tab LIMIT 10,10;
SELECT * FROM flow_tab LIMIT 20,10;

$page 		当前是第几页
$PAGE_SIZE 	每页的个数 	10
	($page-1)*$PAGE_SIZE 		$PAGE_SIZE
1 		0						,10
2 		10						,10
3 		20						,10
4 		30						,10
5 		40						,10

================================================

插入
INSERT INTO 表名 VALUES(值1,值2);

INSERT INTO user_tab VALUES('bajie','123')

=========================================
瀑布流
==========================================
==========================================
nodejs 		
==================================
1.语法就是js
2.性能高 			是php的86倍。
	
nodejs需要安装
官方网站:
http://nodejs.org/
安装：会安装qq，就会安装它。
	无限下一步。

验证是否安装成功：
	命令行中输入
		node -v 		回车

=======================================
如何玩node
创建js文件。
写js代码。
执行：
	node 文件名 	回车

nodejs不能去操作BOM和DOM

=========================================
nodejs 		搭建一个服务器
			http协议
引入模块
var http = require('http');

创建服务
var server = http.server(function(request,response){
	request.url 		用户请求路径。

	response.write(写入东西);
	response.end();
});
监听端口
server.listen(8081);

问题：
1.页面的代码写在js中不好。
2.修改页面之后需要重启服务器。
--------------------------------------------
读取文件。
var fs = require('fs'); 	file system
fs.readFile(路径,function(err,data){
	如果err是真的代表有错。
	否则没错
		data放的是文件的数据。
});
=======================================
用户注册+登录

nodejs本身不支持操作数据库。

npm 		node package manager
验证是否有npm
	命令行中输入	npm -v 	回车

mysql
安装模块
命令行中 		确保路径是当前目录。
	npm install mysql


引入模块
var mysql = require('mysql');

var db = mysql.createConnection({
	host:'地址',
	user:'用户名',
	password:'密码',
	database:'数据库名'
});
db.query(SQL,function(err,data){
	err代表错误信息，如果是真的代表有错，否则没错。
	data 	查询到的数据。
});

nodejs接收用户传递的参数。
	nodejs接收不了.自己手动去写。

	localhost:8080/u?act=login&username=root&password=123

	request.url
	/u?act=login&username=root&password=123
	act=login&username=root&password=123
================================================
作业：上课的跑通。







**需要用命令行
如何打开控制台。
按下：win+r 		运行中输入cmd 		回车
切换盘符	
		eg: 		
				切换到E盘
				E: 		回车

切换路径
	cd 	路径 			回车
回到上级 		
	cd ../ 		回车

清屏 		
	cls 		回车

退出
	exit 		回车

查看目录下文件
	dir 		回车

上下键切换历史命令

tab按键自动补全。









