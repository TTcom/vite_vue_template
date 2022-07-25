
export const imgState = reactive({
  imgArr: [],
  imgArrIndex: 0,
  imgUrl: "",
  setImgUrl:(src)=> {
    imgState.imgUrl = src
  },
  setImgArr:(arr) =>{
    imgState.imgArr = arr
  },
  setImgArrIndex:(index)=> {
    imgState.imgArrIndex = index
  },
})

if(sessionStorage.getItem("imgState")){
  let obj = JSON.parse(sessionStorage.getItem("imgState"))
  Object.keys(obj).forEach(val=>{
    imgState[val] = obj[val]
  })
}

watch(
  ()=>imgState,
  (newval)=>{
    let val = {
      imgArr:newval.imgArr,
      imgArrIndex:newval.imgArrIndex,
      imgUrl:newval.imgUrl
    }
    sessionStorage.setItem("imgState", JSON.stringify(val))
  },
  { deep: true }
)

