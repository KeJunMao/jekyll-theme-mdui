# 主题配置

主题的配置都放置在了`_data/site.yml`文件内，这样你无需重启jekyll即可快速预览改动。

## 使用方法

只需编辑`_data/site.yml`文件，修改为你自己的信息即可。

```yaml
head: 
   favicon: "https://ooo.0o0.ooo/2017/05/27/59294212bc16e.png" #  the favicon
   high_res_favicon: "https://ooo.0o0.ooo/2017/06/08/5939484dc618e.png" #  the favicon using high quality format
   apple_touch_icon: "https://ooo.0o0.ooo/2017/06/08/5939484dc618e.png" # the iOS Home button icon
   keywords: "blog jekyll mdui theme" #  the site keywords

uiux:
   android_chrome_color: "#eeeeee" #  the color of the Chrome address bar
   nprogress_color: "#29d" #  the color of the top loading progress bar
   nprogress_buffer: 200 # the top loading progress bar buffers
   meng: false # meng

background: 
   purecolor: "#eeeeee" # the background color

img: 
   avatar: "https://ooo.0o0.ooo/2017/05/26/5928368d409dd.png" # your avatar

card: 
   card_shadow: 1 # card shadow (0-24), 0 is not displayed
   card_hoverable: false # When the hover to deepen the shadow

many_authors: false

sns_share: # SNS Share Switch
   twitter: true
   facebook: false
   googleplus: false
   weibo: true
   linkedin: false
   qq: true
   telegram: true
  
comment:
  used: "" # disqus,livere,gitment
  # disqus config
  disqus_shortname: "" # Your disqus 
  disqus_button: true # disqus load button
  disqus_proxy: false # # disqus proxy(Do not use)
  disqus_proxy_url: "" # (Do not use)
  disqus_api_key: "" # (Do not use)
  # livere config
  livere_type: 'city'
  livere_data_uid: ''
  # gitment config
  owner: ""
  repo: ""
  client_id: ""
  client_secret: ""
  #valine config
  valine_app_id: ''
  valine_app_key: ''
  valine_placeholder: "ヾﾉ≧∀≦)o来啊，快活啊!"

prism:
  themes: prism-okaidia
  components: 
    - bash 
  plugins: 

mathjax: true

google_analytics: ""  # google analytics code

baidu_site_verification: ""  # baidu site verification code
google_site_verification: ""  # google search console verification code

baidu_auto_push: false  # if you used baidu auto push to commit links

lang: "zh-CN"  # lang

deploy: "" # if you used coding pages

custom_css: "" # Use the assets/css/customCss.css

custom_js: "" # Use the assets/js/customJS.js
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

#### meng

是否启用萌选项。死宅真可怕。详情设置点击[这里](zh-cn/meng-configuration)。

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

## many_authors

是否启用多作者，若启用，请参阅[多作者](zh-cn/many_authors.md)。

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

### comment

[评论系统](zh-cn/comment.md)

### prism
代码高亮插件

#### themes

prism 主题。

> 可选值请参阅[Download ▲ Prism](http://prismjs.com/download.html).


#### components

高亮语言，已集成 HTML,CSS,JavaScript.

> 可选值请参阅[Download ▲ Prism](http://prismjs.com/download.html).

!> 这是一个数组

#### plugins

prism 插件

> 可选值请参阅[Download ▲ Prism](http://prismjs.com/download.html).

!> 这是一个正在开发的功能，该值为数组。

### google_analytics

google analytics 

### baidu_site_verification

百度验证码，用于[百度站长平台](http://zhanzhang.baidu.com)新增站点的验证

### google_site_verification

谷歌验证码，用于Google Search Console新增站点的验证，Google Search Console和Google Analytics配合起来使用更佳

使用时，请选择使用HTML标记作为验证方法，然后将content内的验证码复制到此处

### baidu_auto_push

是否开启百度链接提交自动推送方式，true为开启，false为关闭，开启后在页面被访问时，页面URL将立即被推送给百度，当然你也可以在[百度站长平台](http://zhanzhang.baidu.com)采用主动推送、sitemap推送或手动提交方式

### lang

站点语言

### deploy

如果你是coding银牌会员，并使用coding pages ，将该值设为`"coding"`,便可以关闭跳转页。