<?php
/*
** 		user.php?act=xxx&username&password
** 			act
** 				add 		注册
** 				login 		登录
** 	return
** 			{"err":0/1,"msg":"提示信息"}
*/
$act = $_GET["act"];
$user = $_GET["username"];
$pass = $_GET["password"];

switch($act){
	case "login":
		/*
			1.这个用户名没注册呢。
			2.有这个用户，但是用户名密码错了。
			3.登录成功
		*/
		mysql_connect("localhost","root","");
		mysql_select_db("20160627");
		$SQL = "SELECT * FROM user_tab WHERE username='".$user."'";
		$result = mysql_query($SQL);
		$row = mysql_fetch_row($result);
		if($row){
			if($pass==$row[1]){
				echo "{\"err\":0,\"msg\":\"登录成功\"}";
			}else{
				echo "{\"err\":1,\"msg\":\"用户名或密码错误\"}";
			}
		}else{
			echo "{\"err\":1,\"msg\":\"用户未注册\"}";
		}
		break;
	case "add":
		/*
			1.查看有没有这个人
			2.插入
		*/
		mysql_connect("localhost","root","");
		mysql_select_db("20160627");
		$SQL = "SELECT * FROM user_tab WHERE username='".$user."'";
		$result = mysql_query($SQL);
		$row = mysql_fetch_row($result);
		if($row){
			echo "{\"err\":1,\"msg\":\"用户名已被占中，请再想一个。呵呵\"}";
		}else{
			$SQL = "INSERT INTO user_tab VALUES('".$user."','".$pass."')";
			mysql_query($SQL);
			echo "{\"err\":0,\"msg\":\"注册成功\"}";
		}
		break;
	default:
		break;
}
?>















