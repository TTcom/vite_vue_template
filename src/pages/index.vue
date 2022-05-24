<template>
  <div class="goodList">
    <van-card @click="goDetail(index)" v-for="(item, index) in imgArr" :key="item" :num="number" :price="item.price.toFixed(2)" :title="item.name">
      <template #thumb>
        <div class="index_top">
          <Starport :port="String(index)" class="indexastarport" @click="goDetail(index)">
            <aboutImge class="onindeximg" :src="item.img" />
          </Starport>
        </div>
      </template>
      <template #footer>
        <van-button size="mini" @click.stop="addNum">添加</van-button>
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
<route>
{
  name: "index",
  meta: {requiresAuth: false}
}
</route>
<script setup>
import Api from "~/api"
import { imgArr, imgArrIndex } from "~/store"
useHead({
  title: "goodlist",
  meta: [{ name: "description", content: "goodlistcontent" }],
})

const active = ref(0)
const number = $ref(1)
if (!imgArr.value || !imgArr.value.length) {
  Api.getGoodList().then(res => {
    console.log("Res", res)

    imgArr.value = res.data
  })
}
const onChange = index => {
  console.log(index)
  window.$toast(`标签 ${index}`)
}
const addNum = () => {
  number++
}
const router = useRouter()
function goDetail(index) {
  imgArrIndex.value = index
  router.push("/goodsDetail")
}
</script>

<style lang="scss">
.indexastarport {
  height: 88px;
  width: 88px;
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.8s;
}
.onindeximg {
  border-radius: 10px;
  overflow: hidden;
}
.goodList {
  padding: 10px 15px;
  background: #f3f3f3;
  height: calc(100vh - 50px);
  overflow: auto;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}
</style>
