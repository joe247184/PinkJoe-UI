/*
* 要先引入UI库的css样式然后再引入vue以避免覆盖了组件内部css
* */
import './lib/common/common.scss'
import './common/index.scss'
import './lib/common/iconfont'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)
app.mount('#app')