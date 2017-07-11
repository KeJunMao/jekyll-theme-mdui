# Custom Navbar

Edit `_data / menus.yml` to customize the navigation bar.

## Instructions

### Add a menu

To add a menu, simply add it to `_data / menus.yml` as follows.

```yaml
- name: HOME
  url: /
  icon: home
```
> The navigation bar is sorted by the order in `_data / menus.yml`. You can change the order of content to achieve the purpose of customizing the order.

### Enable navigation bar search

To enable the navigation bar search, simply `_data /` name` field menus.yml` file to `navSearch` of` switch` is `true` to:

```yaml
- name: navSearch
  switch: true
```

## Detailed parameters

### menu

#### name

The name and name are displayed in the navigation bar.

#### url

Define the file path.

If url is:

```yaml
url: /pages/test.html
```

You need to create a new page folder in the jekyll website root directory and create a test.html.

#### icon

Define the icon, the icon will be displayed on the sidebar of the mobile side.

### navigation bar search

#### name

Required, do not change

#### switch

Switch, `true` is enabled.