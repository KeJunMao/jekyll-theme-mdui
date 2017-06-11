# 定制 SNS

SNS 信息存在于所有页面的页脚，你可以添加最多11种到页面的页脚。

要修改sns信息，只需编辑`_data/sns.yml`文件即可。

我们推荐您添加 3-4 种，这样会更美观实用。

## 使用方法

要启用某SNS，您只需填写`url`字段即可启用:
```yaml
- name: github
  url: "https://github.com/KeJunMao"
```

!> 我们**不支持**新增SNS。支持的SNS有：bilibili、Facebook、Github、Gplus、Instagram、Linkedin、Telegram、Tumblr、Twitter、Weibo、Zhihu。

## 参数详解

### name

SNS名称，无需修改，除非你指定你在做什么。

### url

启用该sns的关键，填写任意字符，即可启动。
