---
layout: post
title:  "如何安装 RVM 和 Ruby？"
date:   2017-05-27 14:19:06 +0800
categories: technology
tags: ruby rvm
img: https://ooo.0o0.ooo/2017/05/27/59292241a506c.jpg
---

Ruby Version Manager (RVM)，一个命令行工具。顾名思义，RVM可以方便的安装`gem`和`ruby`，这对想要安装 `Jekyll` 的萌新（我），简直不要太酸爽。

## RVM 安装

```bash
gpg --keyserver hkp://keys.gnupg.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3
\curl -sSL https://get.rvm.io | bash -s stable
source ~/.bashrc
source ~/.bash_profile
```

修改 RVM 的 Ruby 安装源到 Ruby China 的 [Ruby 镜像服务器](https://cache.ruby-china.org/)，这样能提高安装速度。

```shell
echo "ruby_url=https://cache.ruby-china.org/pub/ruby" > ~/.rvm/user/db
```

## Ruby 的安装与切换

列出已知的 Ruby 版本

```shell
rvm list known
```

我们会看到输出了：

```shell
# MRI Rubies
[ruby-]1.8.6[-p420]
[ruby-]1.8.7[-head] # security released on head
[ruby-]1.9.1[-p431]
[ruby-]1.9.2[-p330]
[ruby-]1.9.3[-p551]
[ruby-]2.0.0[-p648]
[ruby-]2.1[.10]
[ruby-]2.2[.6]
[ruby-]2.3[.3]
[ruby-]2.4[.0]
ruby-head

# for forks use: rvm install ruby-head-<name> --url https://github.com/github/ruby.git --branch 2.2
...
```

安装一个 Ruby 版本

```shell
rvm install 2.4.0
```

这里安装了最新的 2.4.0, rvm list known 列表里面的都可以拿来安装。

切换 Ruby 版本

```shell
rvm use 2.2.0
```

如果想设置为默认版本，这样一来以后新打开的控制台默认的 Ruby 就是这个版本

```shell
rvm use 2.4.0 --default
```

查询已经安装的ruby

```shell
rvm list
```

此时，输入`ruby -v`就会看到类似如下输出：

```shell
ruby 2.4.0p0 (2016-12-24 revision 57164) [x86_64-linux]
```

至此完成 RVM 与 Ruby 的安装

## 注意

请将 `终端-编辑-配置文件首选项-命令-以登录 shell 方式运行命令` 的复选框选中。

## 参考

* [RVM 实用指南](https://ruby-china.org/wiki/rvm-guide)
* [RVM: Ruby Version Manager](https://rvm.io/)