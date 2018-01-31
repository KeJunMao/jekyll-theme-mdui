# 萌配置

萌选项是为二次元爱好者推出的一项功能，默认为`false`。

你可以在`_data/site.yml`中将`meng`字段改为`true`。

```yaml
meng: true
```

## 如何使用

你需要创建`meng.yml`到`_data`文件夹内。

```yaml
title:  # Meng title
  switch: true # Meng title switch
  visible: "(*´∇｀*) 被发现啦~" # State is visible text
  hidden:  "(つェ⊂)看不到我~" # State is hidden text
  with_default_title: true # with default title
  reset_time: 1000 # If state is visible , reset default title times(ms)

cursor: # cursor
  switch: true # cursor switch
  auto_url: "https://ooo.0o0.ooo/2017/06/12/593ea1901c930.png" # State is auto style
  pointer_url: "https://ooo.0o0.ooo/2017/06/12/593ea3612fd77.png" # State is pointer style

console: # Meng console info
  switch: true # Meng console info switch
  theme_info: true # output theme info
  text: "Copyright © 2017 Jekyll-Theme-MDUI" # text
  color: "#fff" # text color
  background: "#448aff" # background color

header: # Meng header color + theme-color
  switch: true

background: # Meng background
  switch: true
  background_img: "https://ooo.0o0.ooo/2017/06/13/593fd8dacf986.jpg"
  transparent_header: true
  transparent_footer: true
  text_color: '#fff'

card: # Meng card
  switch: true
  background_color: 'rgba(255, 255, 255, 0.5)'
  card_img_opacity: '0.8'

live2d: # live2d ,see https://github.com/EYHN/hexo-helper-live2d
  switch: true
  model: "/assets/live2d/koharu/koharu.model.json" # model.json path
  drag: true # is drag ?
  width: 130 # canvas width
  height: 190 # canvas height
  bottom: 100 # canvas bottom
  leftOrRight: "right" # left or right
  offset: 10 # offset

animation: # animate.css, see https://github.com/daneden/animate.css
  switch: true # switch on and you can see the animation

music_player:
  player: "cplayer" #cplayer or aplayer
  button_color: "#1abc9c"
  music:
    title: 'Faded'
    author: 'Alan Walker'
    url: 'http://www.170mv.com/kw/other.web.rh01.sycdn.kuwo.cn/resource/n2/14/71/3899067167.mp3'
    pic: 'http://p4.music.126.net/8dzD62VK8jLDbhEqkmpIAg==/18277181788626198.jpg?param=130y130'

head_card:
  switch: true
  left_img: "https://ooo.0o0.ooo/2017/06/19/5947b272d418b.jpg"
  left_text: "『 · 如果真爱有颜色 』"
  right_img: "https://ooo.0o0.ooo/2017/06/08/5939484dc618e.png"
  offset_level: 2
```

## 参数详解

### title

萌标题

#### switch

萌标题开关，默认为`true`。

#### visible

当浏览器状态为`visible`时的标题文本。

#### hidden

当浏览器状态为`hidden`时的标题文本。

#### with_default_title

是否与默认标题一起显示，并作为后缀。

#### reset_time

当浏览器状态为`visible`时，重置为默认标题的延迟。

### cursor

萌光标

#### switch

萌光标开关

#### auto_url

`auto`状态下的样式

#### pointer_url

`pointer`状态下的样式

### console

萌 console info

#### switch

萌 console info 开关

#### theme_info

是否显示主题信息

#### text

自定义文本

#### color

文本颜色

#### background

背景颜色

### header

动态chrome状态栏、hearder颜色

#### switch

开关

### background

萌背景

#### switch

开关

#### background_img

图像地址

#### transparent_header

是否透明header

#### transparent_footer

是否透明footer

#### text_color

文本颜色

### card
萌卡片

#### switch
开关

#### background_color

卡片颜色，配合萌背景，使用rgba可做出透明效果。

#### card_img_opacity

卡片图片透明度

### live2d

为你的博客添加色气满满的live2d吧！

该功能使用[EYHN/hexo-helper-live2d](https://github.com/EYHN/hexo-helper-live2d/)开源项目。

#### switch
开关

#### model

模型json路径

#### drag

是否允许拖拽

#### width

canvas 宽度

#### height

canvas 高度

#### bottom

底部偏移

#### leftOrRight

左对齐或右对齐

#### offset

左对齐或右对齐的偏移

### animation

开启它你将看到动画效果

该功能使用[animate.css](https://github.com/daneden/animate.css)开源项目。

!> 该功能请尽量不要使用，期待完善吧！

#### switch

开关

### music_player

站点播放器

#### player

可选播放器 cplayer or aplayer

#### button_color

按钮颜色

#### music
音乐信息
* title
名称
* author
作者
* url
音乐链接
* pic
封面图

### head_card
头卡片

#### switch
开关

#### left_img
左边卡片图片

#### left_text
左边卡片文本

#### right_img
右边卡片图片（64x64）

#### offset_level

首页，文章页，自定义页距离顶部的偏移。（移动端默认为0）