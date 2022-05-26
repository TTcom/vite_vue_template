import { createPinia } from "pinia"
import piniaPersist from "pinia-plugin-persist" //持久化存储
export function setupPinia(app) {
  const pinia = createPinia()
  pinia.use(piniaPersist)
  app.use(pinia)
}

export * from "./modules"
