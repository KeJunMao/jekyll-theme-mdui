---
layout: post
title:  "使用 abd + fastboot 救我的 Nexus5x"
date:   2016-10-27 16:23:06 +0800
categories: Living
tags: android adb fastboot
img: https://ooo.0o0.ooo/2017/05/27/5929398cad637.jpg
---

安卓就是要折腾。

## 前言

因为折腾，在 xda 上看到了一个可以拥有 Pixel 的虚拟按键补丁，眼残没看评论，于是脑残刷了。
然后就炸了，于是我打开 [twrp][1] 双清一下打算刷 [CyanogenMod][2] ，但是，没刷成功，开机死活卡在 google 界面。然后尝试刷以前 [chroma rom][3] （一个不错的 rom 目前只有6.0.1），但是还是开不了机。
so，线刷。

## 一切的前提

要有 adb 和 fastboot 以及解锁。

## 下载固件

[官方线刷固件包][4]

下好后解压再解压，得到:

    system.img
    vendor.img
    boot.img
    recovery.img
    cache.img

## 刷机

长按电源+音量减进入 bootloader，用数据线连接电脑，输入 fastboot device 查看手机是否已经和电脑连接好。

如果 ok ，那么继续。

1. 刷入系统镜像

    `fastboot flash system system.img`

2. 刷入驱动

    `fastboot flash vendor vendor.img`

3. 刷入内核

    `fastboot flash boot boot.img`

4. 刷入Recovery

    `fastboot flash recovery recovery.img`

5. 清空cache分区

    `fastboot erase cache`

6. 清除缓存

    `fastboot flash cache cache.img`

7. 格式化全部数据

    `fastboot -w`

8. 重启

    `fastboot reboot`

## 完成

> 至此就完成了，但是折腾需谨慎。

  [1]: https://twrp.me/
  [2]: http://www.cyanogenmod.org/
  [3]: http://forum.xda-developers.com/nexus-5x/development/rom-chroma-11-08-2015-lockscreen-navbar-t3244199
  [4]: https://developers.google.com/android/nexus/images