# RSS

RSS文件（或称做摘要、网络摘要、或频更新，提供到频道）包含全文或是节录的文字，再加上发布者所订阅之网摘数据和授权的元数据。

你可使用插件来启用`rss`功能。

## 如何使用

编辑 `Gemfile`,添加：

```yaml
gem 'jekyll-feed'
```

编辑 `_config.yml` ,添加:

```yaml
gems:
  - jekyll-feed
```

最后执行下面命令即可：
```bash
bundle install
```