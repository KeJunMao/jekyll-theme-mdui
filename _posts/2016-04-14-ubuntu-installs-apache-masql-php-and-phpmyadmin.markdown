---
layout: post
title:  "Ubuntu安装Apache，MySQL，PHP以及phpMyAdmin"
date:   2016-04-14 10:24:49 +0800
categories: technology
tags: ubuntu apache mysql php phpmyadmin
img: https://ooo.0o0.ooo/2017/05/27/59292b1243dc9.jpg
author: test
describe: 还原了服务器，于是重装，顺路记录下来，路过的朋友们可以借鉴，LAMP Go!
---

## Apache

### 安装
```shell
apt-get update
apt-get install apache2
```

装好后，配置文件应该位于 `/etc/apache2` 中。默认的网站目录为 `/var/www/` 。

启动 Apache 的方法：

    service apache2 start

重启 Apache 的方法：

    service apache2 restart

停止 Apache 的方法：

    service apache2 stop

### 其他

Apache 的错误日志文件默认为 `/var/log/apache2/error.log` 。

如果你没有指定 `SeverName` ，可能会出现如下警告：

    apache2: Could not determine the server''s fully qualified domain name, using 127.0.0.1 for ServerName

解决方法为：

    vim /etc/apache2/apache2.conf

添加如下：

    ServerName localhost

## MySQL

### 安装

    apt-get install mysql-server

安装过程需要设定root账户和密码。

## PHP

### 安装

安装 PHP 使 PHP 代码可以在 Apache 服务器下运行，并连接我们的 MySQL 数据库：

    apt-get install php libapache2-mod-php php-mcrypt php-mysql

至此 PHP 已经部署完成。

### 安装 PHP 模块

你可以使用 `apt-cache search php- | less` 命令查看所有可用模块，按上下箭头滚动，按 `q` 退出。

### 其他

为了让 Apache 优先索引 PHP 文件：

    vim /etc/apache2/mods-enabled/dir.conf

然后将 PHP 索引文件移动到第一个位置，如下：

    <IfModule mod_dir.c>

    DirectoryIndex index.php index.html index.cgi index.pl index.xhtml index.htm

    </IfModule>

一些模块：

    apt-get install php-mysql php-curl php-gd php-intl php-pear php-imagick php-imap php-mcrypt php-memcache php-ming php-ps php-pspell php-recode php-snmp php-sqlite php-tidy php-xmlrpc php-xsl

## phpMyAdmin

### 安装

    apt-get install phpmyadmin

安装过程中会选择服务器以及配置。

### 使用 phpMyAdmin

安装后，还不能立即使用  `phpMyAdmin` ，因为它不在网站目录下。为了正常使用，只需把 phpMyAdmin 的配置文件包含到 Apache 的配置中。编辑 `apache2.conf`：

    vim /etc/apache2/apache2.conf

在文件中添加如下行：

    Include /etc/phpmyadmin/apache.conf

重启服务器：

    service apache2 restart

至此，你就可以通过`yourip/phpmyadmin`来访问 phpMyAdmin 了。