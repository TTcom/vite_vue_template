import { createApp } from "vue"
import App from "./App.vue"
import { setupVant } from "./utils/vant_component"
// import { setupRouter } from "./router"
import { createRouter, createWebHashHistory } from "vue-router"
// import { setupLayouts } from "virtual:generated-layouts"
import routes from "~pages"
import "./assets/common.scss"
console.log("AA", routes)
// const routes = setupLayouts(generatedRoutes)
console.log("11111111111111111111111aaaaaaaa", routes)
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

const app = createApp(App)
// // 挂载路由
// // await setupRouter(app)
setupVant(app)
app.use(router)
app.mount("#app")
