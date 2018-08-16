---
layout: post
title: Ubuntu屏蔽PHP Notice级别错误
data: 2018-03-24 0:0:0 +0800
categories: Living
img: https://i.loli.net/2018/03/24/5ab607ffc2f10.png
tags: php Ubuntu
describe: 修改php配置文件来屏蔽notice
---
##### 最近做了个功能类似一言的api，放到服务器上之后，出现了一堆notice开头的代码，心里不禁一声mmp

![Screenshot_2018-01-24-08-09-50-1-e1516868271465.jpg](https://i.loli.net/2018/03/24/5ab6081e3dd62.jpg)

##### 为了让这玩意正常运行，需要屏蔽这些notice错误。

## 修改配置文件

### 屏蔽notice可以通过修改位于/www/server/php/70/etc的php.ini来实现，不同版本的PHP，配置文件的位置可能不同，自己摸索吧

> $ cd /www/server/php/70/etc

> $ vim php.ini

#### 1.找到error_reporting = 的一行

#### 2.将参数修改为  E_ALL &~ E_NOTICE

#### 3.输入”:wq!“强行保存并退出

#### 4.然后重启php service

> $ service php-fpm restart

##### done~