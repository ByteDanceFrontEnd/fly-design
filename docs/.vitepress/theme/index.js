import DefaultTheme from 'vitepress/theme'
// import "element-plus/dist/index.css";
// import ElementPlus from "element-plus";
import globals from '../client'

export default {
  ...DefaultTheme,
  enhanceApp: async ({ app }) => {
    // app is the Vue 3 app instance from `createApp()`. router is VitePress'
    // custom router. `siteData`` is a `ref`` of current site-level metadata.
    // import("element-plus").then((module) => {
    //   app.use(module);
    // });
    // app.use(ElementPlus);
    globals.forEach(([name, Comp]) => {
      app.component(name, Comp)
    })
  },
}
