# 评论系统

目前，我们主题支持三种评论系统。

* disqus
* livere
* gitment
* Valine

## 如何使用

### Disqus

要启用 Disqus 只需在`_data/site.yml`找到 `comment:`字段并将`used:`设置为`disqus`，然后按照参数填入自己的信息即可。

```yaml
comment:
  used: disqus 
  # disqus config
  disqus_shortname: "kejun" # Your disqus 
  disqus_button: false # disqus load button
```

### Livere

要启用 Livere 只需在`_data/site.yml`找到 `comment:`字段并将`used:`设置为`livere`，然后按照参数填入自己的信息即可。

```yaml
comment:
  used: livere # disqus,livere
  # livere config
  livere_type: 'city'
  livere_data_uid: 'MTAyMC8yOTM5Ni81OTY0'
```

### Gitment

要启用 Gitment 只需在`_data/site.yml`找到 `comment:`字段并将`used:`设置为`gitment`，然后按照参数填入自己的信息即可。

```yaml
comment:
  used: gitment # disqus,livere
  # gitment config
  owner: ""
  repo: ""
  client_id: ""
  client_secret: ""
```
### Valine

要启用 [Valine](https://xcss.github.io/Valine/) 只需在`_data/site.yml`找到 `comment:`字段并将`used:`设置为`valine`，然后按照参数填入自己的信息即可。

```yaml
comment:
  used: valine # disqus,livere
  # valine config
  valine_app_id: ''
  valine_app_key: ''
  valine_placeholder: "ヾﾉ≧∀≦)o来啊，快活啊!"
```

## 参数详解

### used

选择要使用的评论系统。

### disqus_shortname

你的 disuqs shortname

### disqus_button

是否显示加载Disqus按钮，这有助于改善处在公开、平等、有序的网络审查地区的浏览者的体验。

### livere_type

livere版本，默认值为`city`，如果你购买了livere，请填入`premium`。

### livere_data_uid

你的 data_uid。

### gitment

若使用gitment，请参考[imsun/gitment](https://github.com/imsun/gitment)

### valine_app_id
Your APP ID
### valine_app_key
Your APP KEY
### valine_placeholder
留言框占位提示文字