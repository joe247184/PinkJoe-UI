// @ts-nocheck
import { md } from "./plugin/md";
import fs from 'fs'
import {baseParse} from '@vue/compiler-core'

export default {
  base: './',
  assetsDir: 'assets',
  plugins: [md()],
  vueCustomBlockTransforms: {
    demo: (options) => {
      const { code, path } = options
      const file = fs.readFileSync(path).toString()
      const parsed = baseParse(file).children.find(n => n.tag === 'demo')
      const content = parsed.children[0].content.split('$')

      const title = content[0].split(':')[1].trim()
      const subTitle = content[1].split(':')[1].trim()

      const main = file.split(parsed.loc.source).join('').trim()
      return `export default function (Component) {
        Component.__sourceCode = ${JSON.stringify(main)}
        Component.__sourceCodeTitle = ${JSON.stringify(title)}
        Component.__sourceCodeSubTitle = ${JSON.stringify(subTitle)}
      }`.trim()
    }
  }
};