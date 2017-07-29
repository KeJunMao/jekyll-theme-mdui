# 创建页面

我们有两种自定义页面，分别是标签云、友情链接。

## 使用方法

我们推荐将所有自定页面置于`pages`文件夹。

### 标签云

在`pages`文件夹内新建一个`.html`文件，并添加如下头信息：

```yaml
---
layout: tags
---
```

### 友情链接

在`pages`文件夹内新建一个`.html`文件，并添加如下头信息：

```yaml
---
layout: friends
---
```

友情链接的数据存储在`_data/friends.yml`文件内，要添加友情链接，只需要按如下格式追加即可：

```yaml
- name: MDUI
  image: 
  url: https://www.mdui.org/
  describe: 一套用于开发 Material Design 网页的前端框架
```

### 分类列表

> 我竭力使用纯liquid语法完成大部分事情，不幸的是，由于jekyll核心并不包括自动创建分类页面。为了照顾github page及其他不支持非安全插件的平台，我使用了妥协的办法解决。

在`pages`文件夹内新建一个`.html`文件，并添加如下头信息：

```yaml
---
layout: category_list
---
```

此时你便得到了你站点内得所有分类列表。

你可以在`_data`文件夹内新建一个`category.yml`以自定义分类卡片的背景。

```yaml
- name: technology
  img: https://ooo.0o0.ooo/2017/05/27/5929234e802ca.jpg
```

这时，你点击卡片时并不能跳转到**该分类列表下的所有文章**页，接着做

在根目录中新建一个`category`文件夹，然后在其中新建`CATEGORY.html`，并添加如下头信息：

```yaml
---
layout: category_content
---
```

!> 此处的`CATEGORY.html`应当是你实际的分类名，如：`technology.html`,区分大小写。***有多少个分类就新建多少个文件即可。***



## 参数详解

### 友情链接

#### name

名称/昵称

#### image

头像/logo

#### url

站点链接

#### describe

描述/介绍

### 分类列表

#### name

分类名称，确保你的文章有至少一篇使用过该分类。

#### img

分类列表中该分类卡片的背景图片
