import {createApp, h} from 'vue'
import Dialog from './Dialog.vue'

const openDialog = (options: any) => {
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
          {
            default: content, title
          }
      )
    }
  })

  app.mount(div)
}

export default openDialog


/*
*
import Dialog from "./Dialog.vue";
import { createApp, h } from "vue";
export const openDialog = (options) => {
  const { title, content, ok, cancel } = options;
  const div = document.createElement("div");
  document.body.appendChild(div);
  const close = () => {
    app.unmount(div);
    div.remove();
  };
  const app = createApp({
    render() {
      return h(
        Dialog,
        {
          visible: true,
          "onUpdate:visible": (newVisible) => {
            if (newVisible === false) {
              close();
            }
          },
          ok, cancel
        },
        {
          title,
          content,
        }
      );
    },
  });
  app.mount(div);
};*/