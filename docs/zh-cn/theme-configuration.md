# 主题配置

主题的配置都放置在了`_data/site.yml`文件内，这样你无需重启jekyll即可快速预览改动。

## 使用方法

只需编辑`_data/site.yml`文件，修改为你自己的信息即可。

```yaml
head: 
   favicon: "" #  the favicon
   high_res_favicon: "" #  the favicon using high quality format
   apple_touch_icon: "" # the iOS Home button icon
   keywords: "" #  the site keywords

uiux:
   android_chrome_color: "#eeeeee" #  the color of the Chrome address bar
   nprogress_color: "#29d" #  the color of the top loading progress bar
   nprogress_buffer: 200 # the top loading progress bar buffers

background: 
   purecolor: "#eeeeee" # the background color

img: 
   avatar: "" # your avatar

card: 
   card_shadow: 1 # card shadow (0-24), 0 is not displayed
   card_hoverable: false # When the hover to deepen the shadow

sns_share: # SNS Share Switch
   twitter: true
   facebook: false
   googleplus: false
   weibo: true
   linkedin: false
   qq: true
   telegram: true

disqus:
   disqus_shortname: "" # Your disqus 
   disqus_button: true # disqus load button

google_analytics: ""  # google analytics code

lang: "en-US"  # lang
```

## 参数详解

### head

用于配置生成的 HTML 文件的头部信息。

#### favicon

网站的 favicon

#### high_res_favicon

高清 favicon

#### apple_touch_icon

iOS 主屏按钮图标

#### keywords

网站关键词

### uiux

用于设置主题 UI 与 UX。

#### android_chrome_color
安卓 Chrome 浏览器的地址栏颜色。
#### nprogress_color
页面加载时顶部加载进度条的颜色。
#### nprogress_buffer
页面加载时顶部加载进度条的缓冲时间。

### background

用于站点背景设置

#### purecolor

背景颜色。填入颜色代码即可。

### img

站点图片设置

#### avatar

博主头像

### card

首页文章卡片

#### card_shadow

首页卡片阴影，支持0-24，0为无阴影。

#### card_hoverable

悬停是否加深阴影


### sns_share

SNS分享开关

#### twitter

开启分享到twitter

#### facebook

开启分享到facebook

#### googleplus

开启分享到googleplus

#### weibo

开启分享到weibo

#### linkedin

开启分享到linkedin

#### qq

开启分享到qq

#### telegram

开启分享到telegram

### disqus

disqus评论系统

#### disqus_shortname

你的disqus shortname

#### disqus_button

是否显示加载Disqus按钮，这有助于改善处在公开、平等、有序的网络审查地区的浏览者的体验。

### google_analytics

google analytics 

### lang

站点语言