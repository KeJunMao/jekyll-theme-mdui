---
layout: post
title:  "如何安装 Jekyll ？"
date:   2017-05-27 14:57:06 +0800
categories: technology
tags: jekyll ruby gem ubuntu
img: https://ooo.0o0.ooo/2017/05/27/5929234e802ca.jpg
---

Jekyll 一个可以将纯文本转换成静态网站的工具。本站正是使用`jekyll`生成并托管在`coding page`上的。

安装 `jekyll` 及其简单。

## 检查环境

1. GNU/Linux, Unix, 或 macOS 。
2. Ruby 2.0 以上（含2.0）。
3. RubyGems
4. GCC 和 Make（通过`gcc -v` 和 `make -v` 检查是否已安装）。

## 安装 jekyll

```shell
# Install Jekyll and Bundler gems through RubyGems
~ $ gem install jekyll bundler

# Create a new Jekyll site at ./myblog
~ $ jekyll new myblog

# Change into your new directory
~ $ cd myblog

# Build the site on the preview server
~/myblog $ bundle exec jekyll serve

# Now browse to http://localhost:4000
```

$$
\sum_{i=1}^n x_ie_i
$$

## 参考

* [Installation](https://jekyllrb.com/docs/installation/)

* [Quick-start guide](https://jekyllrb.com/docs/quickstart/)