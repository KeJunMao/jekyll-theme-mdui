# 多作者

多作者功能是为情侣博客，团队博客所打造。

## 如何使用

要启用多作者功能，只需将`site.yml`的 `many_authors`字段设为`true`即可。

多作者功能需要配合 Data 文件，你需要创建一个名叫`authors.yml`的文件到`_data`文件夹下。

其格式为:

```yaml
kejun:
  avatar: "https://ooo.0o0.ooo/2017/05/26/5928368d409dd.png"
  name: "KeJun"

test:
  avatar: "https://dummyimage.com/40x40/ffffff/000000.png&text=Test"
  name: "Test"
```

默认情况下，还是会使用`site.author`的值，所以，你必须在页面/文章中指定`author`。

如：

```yaml
layout: post
title:  "Ubuntu安装Apache，MySQL，PHP以及phpMyAdmin"
date:   2016-04-14 10:24:49 +0800
categories: technology
tags: ubuntu apache mysql php phpmyadmin
img: https://ooo.0o0.ooo/2017/05/27/59292b1243dc9.jpg
author: test
```

!> `author: test` ,`test` 区分大小写！

这样输出的作者名称和作者头像为:

**Test** 

![](https://dummyimage.com/40x40/ffffff/000000.png&text=Test)
