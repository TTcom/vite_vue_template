<template>
  <div class="goodsDetail">
    <div class="detail_top">
      <Starport :port="String(imgState.imgArrIndex)" class="astarport">
        <aboutImge class="onaboutimg" :src="imgState.imgUrl" />
      </Starport>
    </div>
    <van-cell-group>
      <van-cell>
        <div class="goods-title">{{ goods.title }}</div>
        <div class="goods-price">{{ formatPrice(goods.price) }}</div>
      </van-cell>
      <van-cell class="goods-express">
        <van-col span="10">运费：{{ goods.express }}</van-col>
        <van-col span="14">剩余：{{ goods.remain }}</van-col>
      </van-cell>
    </van-cell-group>

    <van-cell-group class="goods-cell-group">
      <van-cell value="进入店铺" icon="shop-o" is-link @click="sorry">
        <template #title>
          <span class="van-cell-text">有赞的店</span>
          <van-tag class="goods-tag" type="danger">官方</van-tag>
        </template>
      </van-cell>
      <van-cell title="线下门店" icon="location-o" is-link @click="sorry" />
    </van-cell-group>

    <van-cell-group class="goods-cell-group">
      <van-cell title="查看商品详情" is-link @click="sorry" />
    </van-cell-group>

    <van-action-bar>
      <van-action-bar-icon icon="chat-o" @click="sorry"> 客服 </van-action-bar-icon>
      <van-action-bar-icon icon="cart-o" @click="sorry"> 购物车 </van-action-bar-icon>
      <van-action-bar-button type="warning" @click="sorry"> 加入购物车 </van-action-bar-button>
      <van-action-bar-button type="danger" @click="onClickCart"> 立即购买 </van-action-bar-button>
    </van-action-bar>
  </div>
</template>

<script setup>
// import { imgState } from "~/store/little"
import { useImgStore } from "~/store"
const imgState = useImgStore()
console.log("IIIIIIIIIIIII", imgState.imgArrIndex)
let goods = reactive({
  title: "美国伽力果（约680g/3个）",
  price: 2680,
  express: "免运费",
  remain: 19,
  thumb: ["https://img.yzcdn.cn/public_files/2017/10/24/e5a5a02309a41f9f5def56684808d9ae.jpeg", "https://img.yzcdn.cn/public_files/2017/10/24/1791ba14088f9c2be8c610d0a6cc0f93.jpeg"],
})
const router = useRouter()
function formatPrice() {
  return "¥" + (goods.price / 100).toFixed(2)
}
function onClickCart() {
  router.push("/phone/orderDetail")
}
function sorry() {
  window.$toast("暂无后续逻辑~")
}
</script>

<style lang="scss">
.detail_top {
  width: 200px;
  height: 200px;
}
.astarport {
  //starport的样式必须要全局的
  height: 200px;
  position: absolute;
  top: 0;
  left: 0px;
  right: 0;
  width: 200px;
  margin: auto;
  transition: all 0.8s;
}
.onaboutimg {
  height: 200px;
  width: 200px;
  border-radius: 50%;
  overflow: hidden;
}
.goods {
  padding-bottom: 50px;

  &-swipe {
    img {
      width: 100%;
      display: block;
    }
  }

  &-title {
    font-size: 16px;
  }

  &-price {
    color: #f44;
  }

  &-express {
    color: #999;
    font-size: 12px;
    padding: 5px 15px;
  }

  &-cell-group {
    margin: 15px 0;

    .van-cell__value {
      color: #999;
    }
  }

  &-tag {
    margin-left: 5px;
  }
}
</style>
