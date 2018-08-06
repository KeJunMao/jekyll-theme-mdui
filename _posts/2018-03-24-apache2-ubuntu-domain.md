---
layout: post
title: Ubuntu下Apache2三级域名解析
data: 2018-01-25 0:0:0 +0800
categories: Living
img: https://i.loli.net/2018/03/24/5ab6054d11949.png
tags: apache2
describe: 一个完整的域名由二个或二个以上部分组成，各部分之间用英文的句号，三级域名是形如“a.youa.baidu.com”的域名.
---
以前百度过好多次三级域名的解析方法，暂时网上似乎并没有解释怎么修改Apache配置文件，让三级域名指向所对应的目录。(至少我这只菜鸡没找到教程)

## 什么是三级域名
> “一个完整的域名由二个或二个以上部分组成，各部分之间用英文的句号”.”来分隔，最后一个”.”的右边部分称为顶级域名（TLD，）顶级域名“.”的左边部分称为一级域名，一级域名”.”的左边部分称为二级域名（SLD），二级域名的左边部分称为三级域名，以此类推，每一级的域名控制它下一级域名的分配。三级域名是形如“a.youa.baidu.com”的域名，可以当做是二级域名的子域名，特征为域名包含三个“.”，一般来说，三级域名都是免费的。——百度百科

## 修改配置文件
### 	修改apache2.conf
##### 首先修改位于/etc/apache2的apache2.conf

> $ cd /etc/apache2

> $ vim apache2.conf

##### 复制以下内容，把加粗的部分修改成自己的目录

> <Directory /var/www/html>

> Options Indexes FollowSymLinks

> AllowOverride None

> Require all granted

> </Directory>

##### 修改完成之后按"Esc"，输入":wq!"强行保存并退出

apache2.conf修改完成

### 	修改000-default.conf

##### 然后修改/sites-enabled目录下的000-default.conf

> $ cd sites-enabled

> $ vim 000-default.conf

##### 复制以下内容，ServerName后为想要解析的三级域名，DocumentRoot后为三级域名对应的网页目录

> <VirtualHost *:80>

> ServerName www.example.com

> ServerAdmin webmaster@localhost

> DocumentRoot /var/www/html

> ErrorLog ${APACHE_LOG_DIR}/error.log

> CustomLog ${APACHE_LOG_DIR}/access.log combined

> </VirtualHost>

#### 阿帕奇配置修改完成，重启apache2使配置生效

> $ service apache2 restart

## 解析域名

#### 我以百度云的解析方法做示范，各域名商的解析方法大同小异

![2333.png](https://i.loli.net/2018/03/24/5ab6047c0bd8f.png)

##### 主机记录为自己想要解析的三级域名

##### 记录值为自己肉鸡的IP地址

##### 等待域名解析生效

#### done~