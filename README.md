# jekyll-theme-mdui

A Jekyll theme based on mdui

[demo](https://blog.kejun.space)

[![Version](https://img.shields.io/badge/version-0.2.3-green.svg?style=flat-square)]()
[![Jekyll](https://img.shields.io/badge/Jekyll-3.4+-green.svg?style=flat-square)](https://jekyllrb.com/)

[![Build Status](https://img.shields.io/travis/KeJunMao/jekyll-theme-mdui.svg?style=flat-square)](https://travis-ci.org/KeJunMao/jekyll-theme-mdui)
[![Gem](https://img.shields.io/gem/dt/jekyll-theme-mdui.svg?style=flat-square)](https://rubygems.org/gems/jekyll-theme-mdui/)

[![Author](https://img.shields.io/badge/author-KeJun-blue.svg?style=flat-square)](https://blog.kejun.space)

## Installation

We have two ways to install themes.

### First ways

Add this line to your Jekyll site's `Gemfile`:

```ruby
gem "jekyll-theme-mdui"
```

And add this line to your Jekyll site's `_config.yml`:

```yaml
theme: jekyll-theme-mdui
```

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install jekyll-theme-mdui

### Second ways

Fork this repo to your repo:

```shell
git clone https://github.com/yourname/jekyll-theme-mdui.git
cd jekyll-theme-mdui
bundle install
jekyll s -w
```

Or direct clone:

```shell
git clone https://github.com/KeJunMao/jekyll-theme-mdui.git
cd jekyll-theme-mdui
bundle install
jekyll s -w
```

## Usage

### _config

```yml
title: "My blog" # Your site title
description: "This is my blog." # Your site description
url: # Your site url
baseurl: # baseurl
author: "My" # Your name
avatar: "https://myAvatar.png" # Your avatar
lang: "zh-CN" # lang
paginate: 5 # paginate
paginate_path: "/blog/page:num/" # paginate path

disqus_shortname: "" # Your disqus shortname

google_analytics: "" # Your google analytics ID

gems: # paginate gem 
  - jekyll-paginate
```

### _data

* friends.yml
```yml
- name: MDUI # name
  image:  # avatar or logo
  url: https://www.mdui.org/ # url
  describe: 一套用于开发 Material Design 网页的前端框架
``` 
* menus.yml
```yml
- name: SEARCH # name
  url: /pages/menus/search.html # path
  icon: search # icon from https://www.mdui.org/docs/material_icon
```
Default does not display the editor.If you want the editor to appear in the menu:
```yml
- name: Editor # name
  url: /pages/editor.html # path
  icon: edit # icon from https://www.mdui.org/docs/material_icon
```
* sns.yml
```yml
- name: bilibili # name,supported:bilibili,facebook,github,gplus,instagram,linkedin,telegram,tumblr,twitter,weibo,zhihu
  url:  # url , if it is empty, it is not enabled
```


### search.json

```json
---
---
[
  {% for post in site.posts %}
    {
      "title"    : "{{ post.title | escape }}",
      "url"      : "{{ site.baseurl }}{{ post.url }}"
    } {% unless forloop.last %},{% endunless %}
  {% endfor %}
]
```

### tags.json
```json
---
---
{% capture tags %}
  {% for tag in site.tags %}
    {{ tag[0] }}
  {% endfor %}
{% endcapture %}
{% assign sortedtags = tags | split:' ' | sort %}
[
  {% for tag in sortedtags %}
    {
      "id"    : "{{ tag | escape}}",
      "post": [
          {% for post in site.tags[tag] %}
         {
            "title": "{{ post.title | escape }}",
            "excerpt": "{{ post.excerpt | strip_html | escape | strip_newlines}}",
            "url": "{{ site.baseurl }}{{ post.url }}"
         } {% unless forloop.last %},{% endunless %}
      {% endfor %}]
    } {% unless forloop.last %},{% endunless %}
  {% endfor %}
]
```
### manifest.json
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
Replace it with your logo:`assets/images/touch`

### _post

Add the following format to your posts:

```liquid
{% include tips.html content="protips" %}
{% include note.html content="note" %}
{% include warn.html content="warnings" %}
```

[demo](https://blog.kejun.space/living/2017/05/29/jekyll-theme-mdui.html)

## TODO

[TODO](https://blog.kejun.space/pages/menus/todo.html)

## Note

If you use the first method to install, you need to download the following files to your jekyll website root directory Or create a new file,And replace it with your own information:

* mainifest.json
* sw.js
* search.json
* tags.json
* _data/friends.yml
* _data/menus.yml
* _data/sns.yml
* assets/images/touch/*
* pages/*

How to use? See Usage.
## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/[USERNAME]/hello. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## Development

To set up your environment to develop this theme, run `bundle install`.

Your theme is setup just like a normal Jekyll site! To test your theme, run `bundle exec jekyll serve` and open your browser at `http://localhost:4000`. This starts a Jekyll server using your theme. Add pages, documents, data, etc. like normal to test your theme's contents. As you make modifications to your theme and to your content, your site will regenerate and you should see the changes in the browser after a refresh, just like normal.

When your theme is released, only the files in `_layouts`, `_includes`, and `_sass` tracked with Git will be released.

## License

The theme is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

