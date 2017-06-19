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