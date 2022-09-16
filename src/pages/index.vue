<template>
  <div class="index">
    <!-- <demo></demo>
    <demo2></demo2> -->
    <el-button v-for="(item, index) in data" :key="index" @click="toPage(item)" :type="item.type" round>{{ item.text }}</el-button>
  </div>
</template>
<route>
{
  name: "index",
  meta: {requiresAuth: false}
}
</route>
<script setup>
// import { demo, demo2 } from "../../dist/vite-lib.es"
// import {TestA} from '../../dist/vite-lib.umd' // 二者
useHead({
  title: "index",
  meta: [{ name: "description", content: "indexpage" }],
})
let data = [
  { text: "前往vue-flow", url: "/pc/vueflow", type: "primary" },
  { text: "前往移动端H5模板", url: "/phone/godList", type: "" },
  { text: "前往PC端animation模板", url: "/pc/animation", type: "primary" },
  { text: "前往PC端motion和swiper模板", url: "/pc/motion", type: "success" },
]
const router = useRouter()
function toPage(item) {
  router.push(item.url)
}
</script>

<style lang="scss" scoped>
.index {
  display: flex;
  justify-content: center;
  height: 100%;
  padding-top: 100px;
  box-sizing: border-box;
}
</style>
