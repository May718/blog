<?php
$page = $_GET["page"];
$PAGE_SIZE = 10;
mysql_connect("localhost","root","");
mysql_select_db("20160627");
$SQL = "SELECT * FROM flow_tab LIMIT ".($page-1)*$PAGE_SIZE.",".$PAGE_SIZE;
$res = mysql_query($SQL);
$result = '[';
$first = true;
while($row = mysql_fetch_row($res)){
	if($first){
		$result .= "'".$row[0]."'";
	}else{
		$result .= ",'".$row[0]."'";
	}
	$first = false;
}
$result .= ']';
echo $result;
?>














