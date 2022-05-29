import { defineStore } from "pinia"

export const useImgStore = defineStore("imger", {
  state: () => {
    return {
      imgArr: [],
      imgArrIndex: 0,
      imgUrl:""
    }
  },
  // 也可以定义为
  // state: () => ({ count: 0 })
  actions: {
    setImgUrl(src) {
        this.imgUrl = src
    },
    setImgArr(arr) {
      this.imgArr = arr
    },
    setImgArrIndex(index) {
      this.imgArrIndex = index
    },
  },
   // 开启数据缓存
   persist: {
    enabled: true,
    strategies: [{
      key: 'imger',
      storage: localStorage
     }]
   }
})
