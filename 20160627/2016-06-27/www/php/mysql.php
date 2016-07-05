<?php
//1.连接数据库
//mysql_connect(url,username,password);
mysql_connect("localhost","root","");
//2.选择一个库
//mysql_select_db(数据库名字);
mysql_select_db("20160627");

$SQL = "SELECT * FROM user_tab";

//3.查询
//mysql_query(sql语句);
$result = mysql_query($SQL);
//4.拿数据
//mysql_fetch_row($result);

while($row = mysql_fetch_row($result)){
	echo $row[0].','.$row[1].'<br />';
}

/*$row = mysql_fetch_row($result);
echo $row[0].','.$row[1];
$row = mysql_fetch_row($result);
echo $row[0].','.$row[1];
$row = mysql_fetch_row($result);
echo $row[0].','.$row[1];
$row = mysql_fetch_row($result);
echo $row[0].','.$row[1];*/
?>















