# ThreeJS-Shader
基于WebGL的Three.js 的Shader，记录学习GLSL过程中的一些特效demo.

可以直接阅读源码, 里面有详细注释, 从最简单的绘制线条到各种炫酷的特效,逐渐深入学习Shader！


## 001_Hello World：第一个shader程序！

第一个WebGL shader程序！使用three.js简单构建了一个基于WebGL的shader程序, 可以直接在浏览器运行预览，可以看到整个屏幕呈现红色的闪烁效果。

## 002_gradual：渐变色

在开始这个程序之前，我封装了一个Shader Manager模块用来管理Shader，以便于后续的Shader编写。    
这个shader也比较简单，根据uv坐标显示不同的颜色，来达到渐变效果。

## 003_line：绘制了直线，曲线。
该shader展示了如何绘制线条，如直线、smoothstep曲线、正弦曲线等等。

## 004_square：绘制正方形。
该shader展示了如何绘制一个彩色正方形。

## 005_circle：绘制圆形。
该shader展示了如何绘制圆形,并且通过不同的方式叠加造成一些奇特的特效。例如：绘制多个圆，两个圆相吸、融合效果，两圆相交（可以用该思路实现遮罩效果）等效果。

## 006_drawGraph：绘制各种图案。
结合不同的【造型函数】绘制各式各样的图案,这里展示了圆、圆环、花瓣、齿轮、风车、水滴等图形，并且可以结合时间变量【u_time】使其运动。
可以自己拓展【造型函数】来绘制自己想要的图案。

## 007_SharpEdgesAura：尖刃光环

## 008_fancyGraph：结合自定义造型函数绘制炫丽的图形。
一个小练习,绘制了一个不断变换的图形.

## 009_fancyGear：炫丽的小齿轮。
一个小练习,绘制了一些不断变换运动的彩色小齿轮.

## 010_matrix:矩阵

## 011_splitGrid：切割/平铺图案。

## 012_splitGrid_animation：平铺图案一个demo。

## 013_noise: 噪声的应用。

## 014_ripple：波纹动画

## 015_floridRipple: 炫丽的波纹 + 噪声

## 016_cell: 细胞