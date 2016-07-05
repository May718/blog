笔记
=======================================
transform
	rotate 		rotateX 	rotateY
	translate 	translateZ
	scale
	skew

	perspective(800-1400) 			透视

transform-style:preserve-3d; 			3D

perspective 和	preserve-3d 		都是加给父级。


transform-origin 		原点

注意：transform一定要给初始值。
div{-webkit-transform:perspectivey(800px) rotateX(0deg) translate(0px,0px);}

div:active{-webkit-transform:perspectivey(800px) rotateX(45deg) translate(100px,0px);}

3D盒子

官网作品展示

l2,l1,cur,r1,r2,,,,,,,
,l2,l1,cur,r1,r2,,,,,,
,,l2,l1,cur,r1,r2,,,,,
,,,l2,l1,cur,r1,r2,,,,
,,,,l2,l1,cur,r1,r2,,,
,,,,,l2,l1,cur,r1,r2,,
,,,,,,l2,l1,cur,r1,r2,

arr.unshift(arr.pop());

===============================================
翻书
	布局
	
iNow 		oBox 		oFront   	oBack 		oPage2
0 			1 			1 			2 			2
1 			2 			2 			3			3
2 			3 			3 			1 			1
3 			1 			1 			2			2
4 			2 			2 			3			3

iNow%3+1
(iNow+1)%3+1


爆炸
翻转
================================================
3D图片环
	浮起来 		旋转

	i*360/11

获取不到transform的具体值，用数字模拟。

===================================================
3D盒子
===================================================
css3其他知识。
选择器

css3END


作业：
===========================================
css3所有的例子一遍。

































