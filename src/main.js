import { createApp } from "vue"
import App from "./App.vue"
import "./utils/vant_tip.js"
import { createHead } from "@vueuse/head"
import { createRouter, createWebHashHistory } from "vue-router"
import routes from "~pages"
import "./assets/common.scss"
console.log("AA", routes)
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

const app = createApp(App)
const head = createHead()

app.use(head)
app.use(router)
app.mount("#app")
