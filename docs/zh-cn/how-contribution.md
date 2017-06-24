# 如何贡献

我们十分欢迎你改进、优化、排错主题。

## 主题

要对主题进行贡献，请务必阅读 [Jekyll Docs](https://jekyllrb.com/docs/home/)、[Liquid](https://shopify.github.io/liquid/)，以免造成一些困扰。

你只需fork主题,并使用 `git clone` `master`分支，然后在目录内执行`bundle install`和`npm install`,最后执行 `gulp jekyll serve`,即可开始开发。

访问 `127.0.0.1:4000` 可以预览主题，访问 `127.0.0.1:3001`可以打开browser-sync控制台。

我推荐`_layouts`文件夹的内容尽量只试用`liquid`的`include`语法，而不包含大量`html`.

所有的`html`都在`_includes` ，并将其组件化：

* analytics: 统计
* comment: 评论
* component: 全局小插件
* content: 内容
* content/component: 内容的小插件
* footer: 页脚
* header: 页眉
* meng: 萌文件
* head.html 核心

## 文档

要对文档进行贡献，你必须掌握中文和要翻译的语言，阅读[docsify](https://docsify.js.org/#/)文档，并能使用markdown书写。

你只需fork主题,并使用 `git clone` `master`分支，然后在目录内执行`npm install`,最后执行 `gulp docs`,即可开始撰写文档。

文档的所有内容均在 `/docs`.