---
layout: post
title: Ubuntu Apache2一键SSL
data: 2018-03-24 0:0:0 +0800
categories: Living
img: https://i.loli.net/2018/03/24/5ab6066443977.png
tags: apache2 ssl
describe: 使用Certbot一键部署SSL环境
---
以前在网上试过很多的ssl部署教程，之后都失败了~~(说到底还是我太鶸)~

直到Kejun安利了我Certbot

## 什么是HTTPS
> HTTPS（全称：Hyper Text Transfer Protocol over Secure Socket Layer），是以安全为目标的HTTP通道，简单讲是HTTP的安全版。即HTTP下加入SSL层，HTTPS的安全基础是SSL，因此加密的详细内容就需要SSL。

> ——百度百科

## 为什么要使用HTTPS
> "毫无疑问，上锁是为了安全，上锁是未来趋势，上锁的网站更受搜索引擎待见。"

## 部署方法
> $ sudo apt-get update

> $ sudo apt-get install software-properties-common

> $ sudo add-apt-repository ppa:certbot/certbot

> $ sudo apt-get update

> $ sudo apt-get install python-certbot-apache

> $ sudo certbot –authenticator webroot –installer apache

#### 接下来按照脚本的说明进行

done~