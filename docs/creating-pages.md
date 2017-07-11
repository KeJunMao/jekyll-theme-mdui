# Create a page

We have two custom pages, namely the tag cloud, links.

## Instructions

We recommend placing all custom pages in the `pages` folder.

### Tag Cloud

Create a new `.html` file in the`pages` folder and add the following header:

```yaml
---
layout: tags
---
```

### Links

Create a new `.html` file in the`pages`folder and add the following header:

```yaml
---
layout: friends
---
```

Links to the data stored in the `_data / friends.yml` file, to add links, just add the following format can be:

```yaml
- name: MDUI
  image: 
  url: https://www.mdui.org/
  describe: 一套用于开发 Material Design 网页的前端框架
```

## Detailed parameters

### Links

#### name

Name / nickname

#### image

Avatar / logo

#### url

Site link

#### describe

Description / introduction