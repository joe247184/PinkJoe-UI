# 开始使用
请先[安装](#/doc/install)本组件库。

然后在你的代码中写入下面的代码

```
import {rvButton, rvTabs, rvTab, rvSwitch, rvDialog, openDialog} from "ravenui"
```

就可以使用我提供的组件了。

## Vue 单文件组件

代码示例：

```
<template>
  <div>
    <rv-button>按钮</rv-button>
  </div>
</template>
<script>
import {rvButton, rvTabs, rvTab, rvSwitch, rvDialog, openDialog} from "ravenui"
export default {
  components: {rvButton}
}
</script>
```