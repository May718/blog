<?php
$user = $_GET['user'];
$pass = $_GET['pass'];

if($user=='admin'&&$pass=='123456'){
	echo "登录成功。^_^";
}else if($user=='lilei'&&$pass=='123'){
	echo "登录成功。^_^";
}else{
	echo "用户名或密码有误!T_T";
}
?>