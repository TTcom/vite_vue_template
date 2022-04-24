// import { createRouter, createWebHashHistory } from "vue-router"
const routes = [
  { path: "/", component: () => import("../views/goodList.vue") },
  { path: "/goodsDetail", component: () => import("../views/goodsDetail.vue") },
  // { path: "/home", component: () => import("../components/home.vue") },
  { path: "/orderDetail", component: () => import("../views/orderDetail.vue") },
]
export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export async function setupRouter(app) {
  app.use(router)
}
