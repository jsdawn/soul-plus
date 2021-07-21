# soul-ui

Mobile UI Components built on Vue3 and Vite

## 使用 soul-ui

### 安装

```
yarn add soul-ui
```

### 完整引入

```
# main.js

import { createApp } from 'vue'

import SoulUI from 'soul-ui';
import 'soul-ui/es/soul-ui.css';

const app = createApp(App)
app.use(SoulUI)
```

### 按需引入

**Vue CLI**

借助 babel-plugin-import，我们可以只引入需要的组件，以达到减小项目体积的目的，首先安装 `babel-plugin-import`。

```
yarn add babel-plugin-import -D
```

然后，在 `babel.config.js` 中配置
```
module.exports = {
  plugins: [
    [
      "import",
      {
        libraryName: "soul-ui",
        libraryDirectory: "lib",
        customStyleName: (name) => {
          return `soul-ui/es/${name}.css`;
        },
      },
      "soul-ui",
    ],
  ]
};
```

**Vite**

首先，安装 `vite-plugin-style-import`:
```
yarn add vite-plugin-style-import -D
```

然后，在 `vite.config.js` 中配置
```
import styleImport from 'vite-plugin-style-import';

export default defineConfig({
  plugins: [
    vue(),
    styleImport({
      libs: [
        {
          libraryName: 'soul-ui',
          ensureStyleFile: true,
          resolveStyle: name => {
            return `soul-ui/es/${name}.css`;
          },
          resolveComponent: name => {
            return `soul-ui/es/${name}`;
          }
        }
      ]
    }),
    ...
  ]
})
```

**单文件组件中使用**


```
import { SoButton } from 'soul-ui';

export default {
  components: { SoButton }
};
```

这段代码在生产环境将被解析为
- `import SoButton from 'soul-ui/es/so-button'`;
- `import 'soul-ui/es/so-button.css'`
