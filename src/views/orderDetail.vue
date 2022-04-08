<template>
  <div class="orderDetail">
    <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit">
      <van-checkbox v-model="checked">全选</van-checkbox>
      <template #tip> 你的收货地址不支持配送, <span @click="onClickLink">修改地址</span> </template>
    </van-submit-bar>
  </div>
</template>

<script setup>
import { ref } from "vue"
import { mockRequest } from "../serve/index"
const checked = ref(false)
const onClickLink = () => window.$toast("点击按钮")
const onSubmit = () => {
  if (!checked.value) {
    window.$toast("没有勾选全选")
    return
  }
  mockRequest.post("/submit/order", {}).then(res => {
    console.log(res)
    if (res.code == 200) {
      window.$toast("下单成功")
    }
  })
}
</script>

<style lang="scss" scoped></style>
