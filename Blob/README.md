## 系统类模块

### 1.自动化导入路由

插件名称：**vite-plugin-pages**

介绍：无需配置路由信息，自动根据目录结构生成对应的路由

安装方式:

```
pnpm install vite-plugin-pages 或 npm i vite-plugin-pages
```

引入：

**vite.config.ts**

```js
import Pages from  'vite-plugin-pages'
export default defineConfig({
  	plugins: [
  		//默认为文件夹为pages时，不需要配置
  		//我的文件夹是 views，所以需要配置
  		Pages({
  			dirs:[ { dir: "src/views", baseRoute: "" }],
  			importMode: "async"
  		})		 	
  	]
)}
```

 **router/index.ts**

```js
import { createRouter, createWebHistory } from "vue-router";
//自动读取pages目录下的页面，不需要自己再写routes
import generatedRoutes from "virtual:generated-pages";
const router = createRouter({
  history: createWebHistory(),
  routes: generatedRoutes,
});
export default router;
```

**env.d.ts**

```js
/// <reference types="vite-plugin-pages/client" />   写入这句话否则 上方import会爆红
```



### 2.自动导入布局系统

插件名称：**vite-plugin-vue-layouts**

介绍：自动引入布局模块，若不想使用default.vue 请在 .vue文件下添加以下代码：

```js
<route lang="yaml">
meta:
	layout: users
//这里的 users 指的是其他的 layouts目录下的布局文件
//并且这两行一定要注意缩进问题（亲身踩雷）
</route>
```

**安装方式：**

```
pnpm install vite-plugin-vue-layouts
```

**引入：**

**vite.config.ts**

```js
import Layouts from 'vite-plugin-vue-layouts';
export default defineConfig({
  plugins: [
    Layouts({
    // 如果是默认 layouts文件夹，默认 default.vue文件，则不需要配置
      layoutsDirs: 'src/layouts',
      defaultLayout: 'default',
    }),
 }）
```

**router/index.ts**

```js
import { setupLayouts } from "virtual:generated-layouts"

const router = createRouter({
  history: createWebHistory(),
  routes: setupLayouts(generatedRoutes),
})
```

**env.d.ts**

```js
/// <reference types="vite-plugin-vue-layouts/client" />
```

### 3.自动引入组件

插件名称：**unplugin-vue-components**

安装：

```
pnpm install unplugin-vue-components
```

引入：

**vite.config.ts**

```js
import Components from 'unplugin-vue-components/vite'

export default defineConfig({
  plugins: [
    Components(), //当前内容
  ],
}
```



## 功能类模块

### 1.pinia

介绍：下一代的vuex

安装：

```
pnpm install pinia
```

引入：

**src/store/index.ts**

```js
import { createPinia } from 'pinia'
const store = createPinia()
export default store
```

**main.ts**

```js
import { createApp } from "vue";
import App from "./App.vue";
import store from './store'
createApp(App).use(store)
```



### 2.windi css

介绍：可以把 Windi CSS 看作是**按需供应的** Tailwind 替代方案，它为你提供了更快的加载体验，**完美兼容 Tailwind v2.0**，并且拥有很多额外的酷炫功能

安装：

```
pnpm i -D vite-plugin-windicss windicss 或 npm i -D vite-plugin-windicss windicss
```

引入：

**vite.config.js**

```js
import WindiCSS from 'vite-plugin-windicss'
export default {
  plugins: [
    WindiCSS(),
  ],
}
```

**main.ts**

```js
import 'virtual:windi.css'
```

(根目录新建) **tailwind.config.js** (若为ts则叫 tailwind.config.ts)

```js
import { defineConfig } from 'windicss/helpers'
import formsPlugin from 'windicss/plugin/forms'
export default defineConfig({
  darkMode: 'class',
  safelist: 'p-3 p-4 p-5',
  theme: {
    extend: {
      colors: {
        teal: {
          100: '#096',
        },
      },
    },
  },
  plugins: [formsPlugin],
})
```





















