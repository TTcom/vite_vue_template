<template>
  <div class="v_motion">
    <div class="inner_box">
      <div v-if="isShow" v-motion-roll-bottom style="width: 6rem">
        <img src="src/assets/img/aqy.webp" />
      </div>
      <el-button class="bt_refresh" icon="Refresh" circle @click="refresh" />
    </div>
    <div class="mt10">
      <div
        class="motion_box"
        v-motion
        :initial="{
          scale: 1,
        }"
        :enter="{
          scale: 1.5,
          transition: {
            repeat: Infinity,
            repeatType: 'mirror',
            duration: 1000,
          },
        }"
      />
    </div>
    <div class="swiper_content mt10">
      <swiper
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }"
        :direction="'vertical'"
        :modules="modules"
        :loop="true"
        :navigation="true"
        class="mySwiper"
      >
        <swiper-slide>Slide 1</swiper-slide><swiper-slide>Slide 2</swiper-slide><swiper-slide>Slide 3</swiper-slide><swiper-slide>Slide 4</swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script setup>
import { Navigation, Autoplay } from "swiper"
let modules = [Navigation, Autoplay]
let isShow = $ref(true)
let refresh = () => {
  isShow = false
  setTimeout(() => {
    isShow = true
  }, 200)
}
</script>

<style lang="scss">
.v_motion {
  padding: 15px;
  box-sizing: border-box;
  .motion_box {
    width: 60px;
    height: 60px;
    background-color: rgb(118, 238, 154);
    margin: auto;
  }
  .bt_refresh {
    position: absolute;
    top: 0;
    left: 0;
  }
}
.swiper_content {
  border: 1px solid #eee;
  height: 300px;
  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    align-items: center;
    display: flex;
    justify-content: center;
  }

  ::deep.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ::deep.swiper {
    margin-left: auto;
    margin-right: auto;
  }
}

.inner_box {
  width: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 12rem;
  border: 1px solid #eee;
  overflow: hidden;
  border-radius: 16px;
  position: relative;
  img {
    width: 100px;
  }
}
</style>
