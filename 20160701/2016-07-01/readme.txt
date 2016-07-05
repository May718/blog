笔记
==============================================
html5
本地存储 		(localStorage)
 			cookie 			localStorage
使用 		麻烦 			简单
大小		4KB 			5MB
过期时间	session 		没有
传输		网络传输		不传输



配合服务器环境使用。

1.如何存
localStorage.attr = value;

2.如何取
localStorage.attr;

3.如何删
delete 	localStorage.attr;

//当值改变的时候触发
window.onstorage = function(ev){
	ev.key 			这个值的名字。
	localStorage[ev.key];
};


['abc','bcd','cde']

'abc,bcd,cde'

{"a":1,"b":2}
'[object Object]'

localStorage里面存的都是字符串


持久化 	序列化
对象-》字符串
JSON.stringif(obj)

var arr = [1,2,3,4];
var str = JSON.stringify(arr);
str 		'[1,2,3,4]'


var json = {"a":1,"b":2};
var str = JSON.stringify(json);
str 		'{"a":1,"b":2}'

会把你的数据变成标准的



反持久化  反序列化
字符串->对象
JSON.parse(str)

var str = '[1,2,3,4,5]';
var arr = JSON.parse(str);
arr 		[1,2,3,4,5];

var str = '{"a":1,"b":2}';
var json = JSON.parse(str);
json 		{"a":1,"b":2};

必须只能是标准的数据变成字符串。

'a=1&b=2'

{"a":1,"b"}

*购物车结算
*同步拖拽
=============================================
文件拖拽
	ondragenter 		拖进去
	ondragleave 		拖出去
	ondragover 			当鼠标在上面

	ondrop 				放下
		注意：ondrop事件如果想触发，就必须把ondragover的默认事件阻止。

当移入document的时候，需要让div显示，移出消失
document.ondragover = function(){
	oDiv.style.display='block';
	clearTimeout(oDiv.timer);
	oDiv.timer = setTimeout(function(){
		oDiv.style.display='none';
	},300);
};


如果div要释放
oDiv.ondragover=function(){
	return false;
};
oDiv.ondrop=function(){
	
};


ev.dataTransfer.files 			拖进来的文件列表
var oFile = ev.dataTranser.files[0];
oFile.name 			名字
oFile.size 			大小
oFile.type 			类型
		类型 		
		计算机中的类型“MIME-Type”

		text/plain 			文本文档 		.txt
		text/html 			文本html 		.html
		video/avi 			视频avi 		.avi
		image/jpeg 			图片jpg 		.jpg
		audio/mp3 			音频mp3 		.mp3

===================================================
文件读取
var reader = new FileReader();

reader.onload 			成功
	reader.result 		结果
reader.onerror
reader.onloadstart
reader.onloadend
reader.onprogress
	ev.loaded 		当前加载多少
	ev.total 		总数

读文件的方法
以文本形式读取
reader.readAsText(oFile);

base64形式读取
reader.readAsDataURL(oFile);


Base64 		网络上常见的数据。
	用在哪？
		图片
		背景
		canvas
		音频
		视频

	优点：
		不用解析，不用传输。

=======================================================
视频
PC 			flash
		flash手机不支持。
手机
	视频的类型：
		mp4、avi、wmv、mvb、webb、ogg、3gp

		mp4最好。。。
================================================
video 			视频标签
	controls 				控制台
	loop 					循环播放
	autoplay 				自动播放

很多html5标签不兼容。处理兼容：
在标签中直接写内容。

oV.play() 			播放
oV.pause() 			暂停

oV.currentTime 		当前播放时间

停止
oV.pause();
oV.currentTime = 0;

oV.timeupdate 			当时间更新

oV.volume 		音量
oV.muted 		静音

oV.duration 		总时间
===================================================
音频
audio 		玩法跟video一模一样
===================================================
周六周日：从第一天开始到现在所有的例子
			写到会

		






















