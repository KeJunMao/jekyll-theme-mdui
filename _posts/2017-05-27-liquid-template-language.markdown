---
layout: post
title:  "Liquid 模板语言"
date:   2017-05-27 16:18:06 +0800
categories: Living
tags: liquid jekyll
img: https://ooo.0o0.ooo/2017/05/27/5929360544b21.jpg
describe: 此博文用于记录研究 jekyll 时遇到的有趣 `liquid` 语言片段。
---

## 统计捐赠

1. 在`_data`目录下创建一个名为`donate.yml`的文件。
2. 按如下格式填写：
```yml
- name: 张三
  money: 100
```
3. 在页面中输入{% raw %}
```liquid
{% for d in site.data.donate %}
{% capture allmoney = 0 %}{{ allmoney | plus: d.money }}{% endcapture %}
    <p {{ d.name }}：<b>{{ d.money }}元</b></p>
{% endfor %}
    <p><b>总金额： {{allmoney}}元</b></p>
 ```
{% endraw %}


## 标签云

> 效果就是本博客的tag，此外还需要配合js。

这个讲真，真的好累...

```liquid{% raw %}
{% capture tags %}
  {% for tag in site.tags %}
    {{ tag[0] }}
  {% endfor %}
{% endcapture %}

{% assign sortedtags = tags | split:' ' | sort %}

{% for tag in sortedtags %}
  {% assign index = site.tags[tag] | size %}
  {% assign fontsize = 14 %}
  {% assign color = 125 %}
  {% for i in (1..index) %}
  {% capture fontsize %}{{fontsize | plus:1.5}}{% endcapture %}
  {% endfor %}
  {% for i in (1..index) %}
  {% capture color %}{{ color | minus :15}}{% endcapture %}
  {% endfor %}
      <a id="{{ tag }}"  style="font-size:{{fontsize}}px;color:rgb({{color}},{{color}},{{color}})">{{ tag }}</a>
{% endfor %}
```
{% endraw %}

## 有用的站点

* [Jekyll/Liquid API 语法文档](http://alfred-sun.github.io/blog/2015/01/10/jekyll-liquid-syntax-documentation/)
* [Liquid](http://liquidmarkup.org/)
* [Jekyll DOCS](https://jekyllrb.com/docs/home/)
