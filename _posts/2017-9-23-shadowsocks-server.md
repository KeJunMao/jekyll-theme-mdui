---
layout: post
title: ShadowSocks服务器部署
date: 2017-09-23 17:59:05 +0800
categories: Living
tags: VPN
img: https://i.loli.net/2017/10/02/59d16ad32dfff.png
describe: 国外VPS搭建ShadowSocks服务器
---
现在国家反VPN，所以我就想搭建一个VPN翻墙玩玩,反正也抓不到我。

## 方法

1. 先下载安装的一个工具。

> wget –no-check-certificate https://raw.githubusercontent.com/teddysun/shadowsocks_install/master/shadowsocks.sh

2.修改脚本权限

> chmod +x shadowsocks.sh  

3.执行脚本进行安装

> ./shadowsocks.sh 2>&1 | tee shadowsocks.log