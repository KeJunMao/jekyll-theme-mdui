# 更新主题

我们仅提供使用gem安装的更新方式。

## 如何使用

要更新主题，只要在终端使用`bundle`即可：

```bash
bundle update
```

## 注意事项

由于jekyll主题的特殊性，无法包括`_data`文件夹的内容,您需要手动更新这些文件。

访问 [Commits · KeJunMao/jekyll-theme-mdui](https://github.com/KeJunMao/jekyll-theme-mdui/commits/build) ,寻找`commits`为`feat(version)`开头的提交，然后查看改动，并按照改动修正已有的`_data`文件夹下的`.yml`文件即可。

当然，主题开发前期和大版本更新可能会有这个问题，一般不会影响正常使用，你大可不必理会。