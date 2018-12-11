# 攥写文章

要攥写文章只要在`_post`文件夹内新建文件即可。

## 如何使用

### 必须

我们期望你的文章必须包含以下头信息：

```yaml
---
layout: post
title: "Ubuntu安装Apache，MySQL，PHP以及phpMyAdmin"
date: 2016-04-14 10:24:49 +0800
categories: technology
tags: ubuntu apache mysql php phpmyadmin
img: https://ooo.0o0.ooo/2017/05/27/59292b1243dc9.jpg
describe: 还原了服务器，于是重装，顺路记录下来，路过的朋友们可以借鉴，LAMP Go!
---
```

### 可选

当启用[萌](/zh-cn/meng-configuration)选项时,为你的文章添加如下头信息会改善渲染速度：

```yaml
---
themecolor: "#fff"
themetextcolor: "#000"
---
```

文章最后更新日期

```yaml
---
lastupdate: 2017-06-25 12:24:49 +0800
---
```

当文章的创建日期于用户访问的日期相差100天时，将提示用户“本文最后更新于x天前，文中所描述的信息可能已发生改变，请谨慎使用。”，如果有`lastupdate`字段，则将计算用户访问日期于该字段的天数差。

## 参数详解

### 必须

#### layout

要使用的布局，必须为`post`

#### title

文章标题

#### date

文章创建日期

#### categories

文章所属分类，可使用空格添加多个分类

#### tags

文章包含的标签，可使用空格分开多个标签

#### img

文章头部图像

### 可选

#### themecolor

移动端的header背景颜色和theme-color

#### themetextcolor

移动端的header文本颜色

#### describe

为文章添加一段简介，简介将出现在文章卡片的下方；若不添加，则将默认使用文章开头的第一句话作为简介