import {createApp, h} from 'vue'
import Dialog from './Dialog.vue'

export const openDialog = (options: any) => {
  const {title, content, ok} = options
  const div = document.createElement('div')
  document.body.appendChild(div)

  const close = ()=> {
    app.unmount(div)
    div.remove()
  }

  const app = createApp({
    render() {
      return h (
          Dialog,
          {
            visible: true,
            openByCode: true,
            ok,
            'onUpdate:visible': (newVal) => {
              if(newVal === false) {
                close()
              }
            }
          },
          // 第三个参数传入对象表插槽
          // https://vue3js.cn/docs/zh/guide/render-function.html#h-%E5%8F%82%E6%95%B0
          {
            default: content, title
          }
      )
    }
  })

  app.mount(div)
}
