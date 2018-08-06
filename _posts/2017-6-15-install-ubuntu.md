---
layout: post
title: Easybcd引导安装Ubuntu及其衍生版
date: 2017-6-15 0:0:0 +0800
categories: Living
tags: ubuntu
img: https://i.loli.net/2017/07/12/596609c3ccf93.jpg
describe: 用EasyBCD,硬盘方式安装Ubuntu及其衍生版本
top: true
---
Ubuntu是比较主流的一款Linux，然而U盘启动对一些电脑来说比较蛋疼，下面我将介绍在Windows系统下使用Easybcd引导安装Ubuntu的方法。

## 准备

1.在网上下载easybcd，网上有很多，我就不说了
<br>
[购买Easybcd](https://neosmart.net/Store/)

2.下载你想要安装的Linux(Kubuntu，Elementary等等，都是Ubuntu衍生版，CentOS显然不是)

3.建议将镜像文件复制到C盘根目录，要是想省点事儿可以重命名成“2333.iso”

4.解压镜像里的“casper”文件夹到C盘根目录

5.把casper中的initrd.lz和vmlinuz复制到C盘根目录

6.把C盘根目录下的vmlinuz重命名成vmlinuz.efi

7.打开Easybcd

## 安装

8.点击 添加新条目

[](https://i.loli.net/2018/07/31/5b607cd2e5d43.png)

9.点击 NeoGrub

[](https://i.loli.net/2018/07/31/5b607cd600598.png)

10.点击 安装，然后出现卸载和配置。点击 配置，弹出一个文本文件。

[](https://i.loli.net/2018/07/31/5b607cd901b13.png)


11.将文件全部文本清除，复制以下内容:

> title Install Linux
<br/>
> root (hd0,0)
<br/>
> kernel (hd0,0)/vmlinuz.efi boot=casper iso-scan/filename=/2333.iso locale=zh_CN.UTF-8
<br/>
> initrd (hd0,0)/initrd.lz

## 其他

12.当然还得按自己的需求改一下，比如说:

“iso-scan/filename=/2333.iso”要改成自己的镜像名
<br/>
“(hd0,0)”全部要改成自己的引导分区，详见百度

13.保存文本,然后你就可以重启了
