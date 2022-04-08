import { createApp } from "vue"
import App from "./App.vue"
import { setupVant } from "./utils/vant_component"
import { setupRouter } from "./router"
import "./assets/common.scss"
const app = createApp(App)
// 挂载路由
await setupRouter(app)
setupVant(app)
app.mount("#app")
