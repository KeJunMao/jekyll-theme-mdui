# 定制导航栏

编辑 `_data/menus.yml` 即可自定导航栏。

## 使用方法

### 新增菜单

要新增菜单，只需按照如下格式添加到 `_data/menus.yml` 即可。

```yaml
- name: HOME
  url: /
  icon: home
```
> 导航栏的排序取决于 `_data/menus.yml` 中的顺序。你可以改变内容的顺序达到自定义顺序的目的。

## 参数详解

### name

定义名称，名称会显示在导航栏中。

### url

定义文件路径。

如果url为：

```yaml
url: /pages/test.html
```

则需在jekyll网站根目录新建一个pages文件夹，并创建一个test.html。

### icon

定义图标，图标会在移动端的侧边栏显示。