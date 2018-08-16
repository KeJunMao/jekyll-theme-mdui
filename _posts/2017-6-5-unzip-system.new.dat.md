---
layout: post
title: Linux环境下解包system.new.dat
date: 2017-6-5 0:0:0 +0800
categories: Living
tags: android rom
img: https://i.loli.net/2017/07/12/59660a50bad91.jpg
describe: Linux环境下解包system.new.dat
---
Android5.0后，ROM内部构造有了很大变化，原来熟悉的 "system"文件夹 在 "system.new.dat"文件 中，下面将介绍如何在Linux环境下解system.new.dat。

## 方法

####   Android5.0后，ROM内部构造有了很大变化，原来熟悉的 "system"文件夹 在 "system.new.dat"文件 中，下面将介绍如何在Linux环境下解system.new.dat。

1. 先下载解包的一个工具。http://pan.baidu.com/s/1sltYlpr（这链接要是死了也没办法）

2. 把文件都解压到桌面

3. 把ROM中的"system.transfer.list"和"system.new.dat"复制到桌面

4. 打开终端，先输入：

> cd ./桌面

5. 再输入一段命令让电脑在 "system.new.dat" 中提取"system.img"：

> ./sdat2img.py system.transfer.list system.new.dat system.img

6. 完成之后文件夹里会出现一个"system.img"，在这个"system.img"中提取文件，最后输入：

> sudo mkdir -p /mnt/rom sudo mount -t ext4 -o loop,ro,noexec,noload system.img /mnt/rom

#### 然后就能酌情♂修改这个ROM了。