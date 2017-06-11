# 站点地图

站点地图是一个 jekyll 插件，它可以生成 sitemaps.org 兼容的站点地图。它是GitHub Pages 正式支持的插件。

## 如何使用

编辑 `Gemfile`,添加：

```yaml
gem 'jekyll-sitemap'
```

编辑 `_config.yml` ,添加:

```yaml
gems:
  - jekyll-sitemap
```

最后执行下面命令即可：
```bash
bundle install
```