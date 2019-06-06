## 站点配置

站点配置，即`_config.yml`。

我们将大部分配置放置于`_data`文件夹内。实现无需重启jekyll即可快速预览。

## 使用方法

编辑`_config.yml`，填写自己的信息即可。

```yaml
title: "Jekyll-Theme-MDUI"
description: "A Jekyll theme based on MDUI"
url:
baseurl: ""
author: "KeJun"
paginate: 5
paginate_path: "/blog/page:num/"

theme: jekyll-theme-mdui
```

## 参数详解

### title

站点名称，会显示在导航栏左侧。

### description

站点描述，主要用于首页的 `<meta name="description">`

### url

站点网址，如

```yaml
url: https://kejun.me/blog/
```

### baseurl

站点目录。

如果你期望博客的访问为：`https://kejun.me/blog/`,那么该字段为：

```yaml
basseurl: "/blog"
```

如果你期望博客的访问为：`https://blog.kejun.me/`,那么该字段为：

```yaml
basseurl: ""
```

### author

作者/站长

### paginate

首页的分页数量

### paginate_path

分页生成的文件路径

### theme

请确保该字段为如下所示，否则您将无法使用本主题。

```yaml
theme: jekyll-theme-mdui
```
