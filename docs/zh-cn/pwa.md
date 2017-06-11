# PWA

Progressive Web App 带来的体验将网络之长与应用之长相结合。用户在浏览器标签中第一次访问时就能体会到它们的好处，因为不需要进行任何安装。在用户随着时间的推移增进与应用的关系后，其功能会变得越来越强大。它即使在不可靠网络上也能快速加载、能够发送相关推送通知、具有桌面图标，并且可采用顶层全屏体验的方式加载。

## 如何使用

要启用 PWA ，你必须启用HTTPS,并添加`manifest.json`和`sw.js`文件到网站根目录。

###  manifest.json 

这是一个基本示例，将下面的内容改为你自己的信息即可。

```json
{
  "name": "KeJun BLOG",
  "short_name": "KeJun",
  "icons": [{
        "src": "assets/images/touch/icon-128x128.png",
        "sizes": "128x128",
        "type": "image/png"
      }, {
        "src": "assets/images/touch/apple-touch-icon.png",
        "sizes": "152x152",
        "type": "image/png"
      }, {
        "src": "assets/images/touch/ms-touch-icon-144x144-precomposed.png",
        "sizes": "144x144",
        "type": "image/png"
      }, {
        "src": "assets/images/touch/chrome-touch-icon-192x192.png",
        "sizes": "192x192",
        "type": "image/png"
      }],
  "start_url": "/index.html?homescreen=1",
  "display": "standalone",
  "background_color": "#fdfdfd",
  "theme_color": "#2a7ae2"
}
```

其他帮助：
* [manifest.json|MDN](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/manifest.json)
* [Manifest File Format](https://developer.chrome.com/extensions/manifest)

###  Service Worker

你只需使用 [sw.js](https://github.com/KeJunMao/jekyll-theme-mdui/blob/master/sw.js) 即可。