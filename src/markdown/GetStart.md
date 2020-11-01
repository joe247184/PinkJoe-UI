# 开始使用
请先[安装](#/doc/install)本组件库。

然后在你的代码中写入下面的代码

```
import {RvButton, RvTabs, RvTab, RvSwitch, RvDialog, openDialog} from "raven-ui"
import "raven-ui/dist/lib/ravenui.css";
```

## Vue 单文件组件

代码示例：

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