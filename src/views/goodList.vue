<template>
  <div class="goodList">
    <van-card @click="goDetail" v-for="item in 10" :key="item" num="1" price="2.00" desc="描述信息" title="商品标题" thumb="https://cdn.jsdelivr.net/npm/@vant/assets/ipad.jpeg">
      <template #tags>
        <van-tag plain type="primary">限量款</van-tag>
        <van-tag plain type="primary">白色</van-tag>
      </template>
      <template #footer>
        <van-button size="mini">立即购买</van-button>
      </template>
    </van-card>
  </div>
  <van-tabbar v-model="active" @change="onChange">
    <van-tabbar-item icon="home-o">商品列表</van-tabbar-item>
    <van-tabbar-item icon="cart-o">购物车</van-tabbar-item>
    <van-tabbar-item icon="user-circle-o">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script setup>
import { useRouter } from "vue-router"
import { ref } from "vue"
const active = ref(0)
const onChange = index => window.$toast(`标签 ${index}`)
const router = useRouter()
function goDetail() {
  router.push("/goodsDetail")
}
</script>

<style lang="scss" scoped>
.goodList {
  padding: 10px 15px;
  background: blanchedalmond;
  height: calc(100vh - 50px);
  overflow: auto;
  box-sizing: border-box;
}
</style>
