# PinkJoe-UI
一个基于 Vue3 / TypeScript 开发的UI库

预览地址：http://alibaba_9_1839745911.gitee.io/pinkjoe-website

## 特别说明
这款组件库其实是我为了学习`vue3`以及巩固自己知识而写。

全程亲手编写，尽量不采用第三方库，包括你看到的官网也几乎都是我自己写的。

此库纯属个人练手项目，未经过系统严格的测试，所以**强烈不建议你将此 UI 库用于生产环境！**

## 运行方式
克隆项目之后运行：
```
npm i
yarn dev
```

## 打包
```
yarn build
```

## 安装
```
npm i raven-ui -S
```

## 开始
在你的代码中写入下面的代码

```
import {RvButton, RvTabs, RvTab, RvSwitch, RvDialog, openDialog} from "raven-ui"
import "raven-ui/dist/lib/ravenui.css";
```

## 代码示例

```
<template>
    <rv-button>按钮</rv-button>
</template>

<script>
import {RvButton, RvTabs, RvTab, RvSwitch, RvDialog, openDialog} from "raven-ui"
import "raven-ui/dist/lib/ravenui.css";

export default {
  components: {RvButton}
}
</script>
```
