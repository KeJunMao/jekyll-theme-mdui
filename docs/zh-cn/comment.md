# 评论系统

目前，我们主题支持一种评论系统。

## 如何使用

### Disqus

要启用 Disqus 只需在`_data/site.yml`找到 `disqus:` 字段，然后按照参数填入自己的信息即可。

```yaml
disqus:
   disqus_shortname: "" # Your disqus 
   disqus_button: true # disqus load button
```

## 参数详解

### Disqus

#### disqus_shortname

你的 disuqs shortname

#### disqus_button

是否显示加载Disqus按钮，这有助于改善处在公开、平等、有序的网络审查地区的浏览者的体验。