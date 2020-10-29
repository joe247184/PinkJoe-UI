import {createWebHashHistory, createRouter} from "vue-router";
import {h} from 'vue'
import Home from "./views/Home.vue";
import Doc from "./views/Doc.vue"
import DocDemo from './components/DocDemo.vue'
import SwitchDemo from './components/SwitchDemo.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import DialogDemo from "./components/DialogDemo.vue";
import TabsDemo from './components/TabsDemo.vue'
import Markdown from './components/Markdown.vue'

// @ts-ignore
import Intro from './markdown/Intro.md'
// @ts-ignore
import GetStart from './markdown/GetStart.md'
// @ts-ignore
import Install from './markdown/Install.md'

const history = createWebHashHistory()

const md = (mdContent) => {
  return h(Markdown, {content: mdContent, key: mdContent})
}

const router = createRouter({
  history,
  routes:[
    {path: '/', component: Home},
    {path: '/doc', component: Doc, children: [
        {path: '', component: DocDemo},
        { path: "intro", component: md(Intro) },
        { path: "get-started", component: md(GetStart) },
        { path: "install", component: md(Install) },
        {path: 'switch', component: SwitchDemo},
        {path: 'button', component: ButtonDemo},
        {path: 'dialog', component: DialogDemo},
        {path: 'tabs', component: TabsDemo},
      ]}
  ]
})

export default router