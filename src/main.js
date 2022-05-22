import { createApp } from "vue"
import App from "./App.vue"
import "./utils/vant_tip.js"
import { createHead } from "@vueuse/head"
import { createRouter, createWebHashHistory } from "vue-router"
import routes from "~pages"
import Starport from "vue-starport"
import "./assets/common.scss"
import { autoAnimatePlugin } from "@formkit/auto-animate/vue"
import { MotionPlugin } from "@vueuse/motion"
import { Swiper, SwiperSlide } from "swiper/vue"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import * as ElementPlusIconsVue from "@element-plus/icons-vue"
console.log("AA", routes)
const app = createApp(App)
const head = createHead()
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(MotionPlugin)
app.component("Swiper", Swiper)
app.component("SwiperSlide", SwiperSlide)
app.use(head)
app.use(router)
app.use(autoAnimatePlugin)
app.use(Starport({ keepAlive: true }))
app.mount("#app")
