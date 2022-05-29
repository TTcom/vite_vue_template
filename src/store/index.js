import { createPinia } from "pinia"
// import piniaPersist from "pinia-plugin-persist" //持久化存储已放弃无法主动更新数据
import { piniaPluginPersist } from "~/utils/pinaPlugin" //持久化存储
export function setupPinia(app) {
  const pinia = createPinia()
  pinia.use(piniaPluginPersist)
  app.use(pinia)
}

export * from "./modules"
