### 本WIKI现已支持

## 导航栏/侧边栏相关

```yaml
---
navbar: false # 禁用导航栏
sidebar: false # 禁用侧边栏
sidebarDepth: 2 # 同时提取 h2 和 h3 标题(值为0-2,0为禁用)
---
```

### 特定文章的自定义布局

[参见vurpress中文文档有关内容](https://www.vuepress.cn/theme/default-theme-config.html#%E7%89%B9%E5%AE%9A%E9%A1%B5%E9%9D%A2%E7%9A%84%E8%87%AA%E5%AE%9A%E4%B9%89%E5%B8%83%E5%B1%80)

### 复制时添加版权信息

在开头插入此段即可（如果已有开头(结尾)的---请插入到---那部分内）

```yaml
---
 copyright:
    copyright: false # 当前页面无论复制多少时都不会添加版权信息
    minLength: 40 # 超过40个字时(此项优先于全局配置)
    authorName: MARYT # 作者姓名
  # authorName: { # 作者姓名,可以这样使用
  # "en-US": "MARYT",
  # "zh-CN": "MARYT"
  # },
    ###
    noCopy: false # 允许复制
    noSelect: false # 允许选中
---

```

### 提示/注意/警告

::: tip 1

提示

 ::: 

```
::: tip 1
提示
::: 
```

::: warning 1

注意

:::

```
::: warning 1
注意
::: 
```

 ::: danger 1

警告

:::

```
::: danger 1
警告
:::
```

### emoji

示例：:tada: :100: :bamboo: :gift_heart: :fire:

更多emoji请见https://www.webfx.com/tools/emoji-cheat-sheet/

