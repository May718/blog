笔记
=================================================
H5群:522431670
===========================================
CSS3 			还是样式
		误区：认为css3和css2完全不同。
		css3是建立在css2的基础上。只不过多了一些新样式。
		阴影、动画、圆角、渐变、变形、高级运动。。。

HTML5 			依然还是html
		误区：认为HTML5和HTML4完全不同。
		HTML5是建立在HTML4的基础上。只不过多了一些新标签，新接口。

	HTML5/CSS3
		PC
		移动端	
		地图(geolocation)
		游戏(canvas)
		APP 		手机上的应用	application
			原生App 	用底层开发
					JAVA
					OC
				优势：性能高，能调用底层功能。
				劣势：最少需要两个团队。开发周期长，成本高。
			WebApp 		就是网页，只不过套了一个壳子。
				优势：一个团队搞定，跨平台。开发周期短，成本低。
				劣势：性能没有底层高。不能调用底层功能。

			混合App 		
					展示依然是网页
					功能是后台。
					框架
						AppCan
						phonegap
						。。。

		移动端： 	
			手机，pad，watch，平板，车载pad，电视
			移动端比pc端简单。
			pc端怎么写，移动端就怎么写。
			只需要注意尺寸。
			移动端（h5）不需要处理兼容。

=====================================================
html5新增
获取元素
	document.querySelectorAll('xxx'); 	获取一组元素
	document.querySelector(''); 		获取第一个
===================================================
class操作
	obj.classList 		这个元素class的集合。
			.length 			有多少个class
			.add() 				添加一个class
			.contains() 		查看是否包含某个class
			.remove() 			删除一个class
			.toggle() 			切换一个class
===================================================
自定义属性
	向后兼容
		data-index

	obj.dataset.index

===================================================
本地存储 
			localStorage 				cookie
大小		5MB 						4KB
生存周期 	不会过期，只要你不删就有 	session
使用 		简单 						复杂
传输 		不会传输 					会传输
===================================================
geolocation 			地理信息
		生活
			导航 		地图
		社交
			微信 		陌陌		qq
	经度、纬度、海拔、速度、朝向。。。
===================================================
WebSocket 			交互技术
		ajax 		单向交互
			客户端->服务端
		WebSocket 	双向交互
			客户端<->服务端
===================================================
WebWorker 			线程
	传统的js是单线程
	WebWorker就是多线程
	不会造成资源浪费。
		主线程
		子线程
===================================================
Canvas 			画布
	画图...效率特别高。
===================================================
视频、音频
video 		audio

===================================================
新增一些标签：
	1.“没用的” 		跟之前的标签一样，只不过更具有语义化
		section 	nav 	header 	footer...
	2.有用的
		canvas 		video 		audio
===================================================
CSS3 			
	在移动端：一定记住，用transform的东西，不用left，top.
	css3的样式，不会改变盒子模型。不会触发重排

===================================================
注意：以下笔记中，[]代表可选
css3
	运动
	transition:时间    	样式 		类型;
				1s 		all 		linear
				.4s 	width 		ease
				10ms 	left 		...

	transition:时间 样式 类型 [延迟];

	transition-duration 			时间
	transition-property 			样式
	transition-timing-function 		类型
	transition-delay 				延迟

===============================================
浏览器前缀 		浏览器
webkit 			chrome,safari,opera
moz 			firefox
ms 				ie
o 				opera 	
不加前缀		

eg:
-webkit-transition:1s all ease;
-moz-transition:1s all ease;
-ms-transition:1s all ease;
-o-transition:1s all ease;
transition:1s all ease;

js操作浏览器前缀
-webkit-transition 		WebkitTransition
-moz-transition 		MozTransition
-ms-transition 			msTransition
-o-transition 			OTransition
transition 				transition

========================================
上课的时候我只加webkit，其他的我不管，你们自己写的时候要加上。
========================================
颜色:
	英文单词 		red 	black 	yellow
	十六进制 		#f90 	#fa2344
	rgb 			rgb(0-255,0-255,0-255)
						r 	  g  	b
					数值越小颜色越深
	rgba 			rgb(r,g,b,alpha);

	只要是颜色出现的地方，都可以用rgba

===================================================
圆角
border-radius:四个角都变;
border-radius:左上右下   右上左下;
border-radius:左上 	右上左下 	右下；
border-radius:左上  右上  右下  左下;
===================================================
阴影
box-shadow:2px 2px 5px #000;
box-shadow:x偏移 y偏移 blur color;
box-shadow:[inset] x偏移 y偏移 blur [范围] color;
阴影叠加
box-shaodw:x y blur color,x y blur color....;

文字阴影
text-shadow:x y blur color;
====================================================
线性渐变
	-webkit-linear-gradient(color,color,color...);
	-webkit-linear-gradient([left\top\bottom\right],color,color,color...);
	-webkit-linear-gradient([deg],color,color,color...);

	跳跃渐变
	-webkit-linear-gradient(red 0%,red 10%,green 10%,green 20%....);

径向渐变
	-webkit-radial-gradient(color,color,color...);

重复
-webkit-repeating-linear-gradient
-webkit-repeating-radial-gradient

input type = "color"
	默认值必须写十六进制，不能简写。

=========================================
动画
animation
定义
	@keyframes 名字{
		from{}
		to{}
	}
调用
	animation-name:test; 					名字
	animation-duration:1s; 					时间
	animation-timing-function:ease; 		运动类型
	animation-iteration-count:infinite; 	重复次数
	animation-direction:alternate; 			运动方向
	animation-delay:1s; 					延迟
	animation-play-state:paused; 			播放状态
					paused 		暂停
					running 	开始

	animation:名字 时间 类型 次数 方向 延迟 状态；

=====================================================
contenteditable 		元素可编辑
====================================================
课上代码一遍。

作业：
按钮按下效果
开灯效果
信纸
发廊灯箱，更改颜色。
光照投影








