<template>
    <div mt-50px ml-95px :class="['vc-hue-slider', { 'small-slider': size === 'small' }]">
      <div  ref="barElement" class="vc-hue-slider__bar" @click="onClickSider">
        <div
          :class="['vc-hue-slider__bar-pointer', { 'small-bar': size === 'small' }]"
          ref="cursorElement" 
          :style="getCursorStyle"
        >
          <div :style="{background:mainColor}"  class="vc-hue-slider__bar-handle">{{mainColor}}</div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
    import { Color } from "./color";
    import { tryOnMounted } from "@vueuse/core";
    import { DOMUtils } from "./utils";
    export default defineComponent({
      name: "Hue",
      props: {
        color: '',
        size: '',
      },
      emits: ["change"],
      setup(props, { emit }) {
        const barElement = ref(null);
        const cursorElement = ref(null);
  
        let color = props.color || new Color();
  
        const state = reactive({
          hue: color.hue || 0,
        });
  
  
        const getCursorLeft = () => {
          if (barElement.value && cursorElement.value) {
            const rect = barElement.value.getBoundingClientRect();
            const offsetWidth =(cursorElement.value.offsetWidth-76);
            if (state.hue === 360) {
              return rect.width - offsetWidth / 2;
            }
            return ((state.hue % 360) * (rect.width - offsetWidth)) / 360 + offsetWidth / 2;
          }
  
          return 0;
        };
  
        const getCursorStyle = computed(() => {
          const left = getCursorLeft();
          return {
            left: left-38 + "px",
            top: '-16px',
          };
        });
  
        const onClickSider = (event) => {
            console.log("EEEEEEEEEE",event)
          const target = event.target;
  
          if (target !== barElement.value) {
            onMoveBar(event);
          }
        };
        const mainColor = ref('white')
        const aColor = new Color()
        const onMoveBar = (event) => {
          if (barElement.value && cursorElement.value) {
            const rect = barElement.value.getBoundingClientRect();
  
            const offsetWidth = (cursorElement.value.offsetWidth-76);
  
            let left =  event.clientX ? (event.pageX-76-19): event.targetTouches[0].pageX - rect.left;
            left = Math.min(left, rect.width - offsetWidth / 2);
            left = Math.max(offsetWidth / 2, left);
            const hue = Math.round(((left - offsetWidth / 2) / (rect.width - offsetWidth)) * 360);
            color.hue = hue;
            state.hue = hue;
            console.log('hhhhhhhhhh',hue)
            aColor.hue = hue
            console.log('acrrrrrrrrr',aColor)
            mainColor.value = '#' + aColor.hex
            emit("change", '#' + aColor.hex);
          }
        };
          
        tryOnMounted(() => {
            let arr = []
            for(let i = 0;i<=360;i++){
                aColor.hue = i
                console.log('acrrrrrrrrr',aColor)
                mainColor.value = '#' + aColor.hex
                arr.push('#' + aColor.hex.toUpperCase())
            }
            console.log('aaaaaaaaaaa',arr)
            const result = Array.from(new Set(arr))
            console.log('resultTTTTTTTT',result)
          const dragConfig = {
            drag: (event) => {
              onMoveBar(event);
            },
            end: (event) => {
              onMoveBar(event);
            },
          };
  
          if (barElement.value && cursorElement.value) {
            DOMUtils.triggerDragEvent(barElement.value, dragConfig);
          }
        });
  
        return { barElement, cursorElement, getCursorStyle, onClickSider,mainColor };
      },
    });
  </script>
  
  <style lang="scss" scoped>
    .vc-hue-slider {
      position: relative;
      margin-bottom: 15px;
      width: 800px;
      height: 12px;
      box-shadow: 2px 0 8px rgba(0, 0, 0, 0.08);
      border-radius: 3px;
      &.transparent {
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAGUlEQVQYV2M4gwH+YwCGIasIUwhT25BVBADtzYNYrHvv4gAAAABJRU5ErkJggg==);
        background-repeat: repeat;
      }
  
      &__bar {
        position: relative;
        width: 100%;
        height: 100%;
        border-radius: 3px;
        background: -webkit-linear-gradient(
          left,
          rgb(255, 0, 0) 0%,
          rgb(255, 255, 0) 16.66%,
          rgb(0, 255, 0) 33.33%,
          rgb(0, 255, 255) 50%,
          rgb(0, 0, 255) 66.66%,
          rgb(255, 0, 255) 83.33%,
          rgb(255, 0, 0) 100%
        );
        background: -moz-linear-gradient(
          left,
          rgb(255, 0, 0) 0%,
          rgb(255, 255, 0) 16.66%,
          rgb(0, 255, 0) 33.33%,
          rgb(0, 255, 255) 50%,
          rgb(0, 0, 255) 66.66%,
          rgb(255, 0, 255) 83.33%,
          rgb(255, 0, 0) 100%
        );
        background: -ms-linear-gradient(
          left,
          rgb(255, 0, 0) 0%,
          rgb(255, 255, 0) 16.66%,
          rgb(0, 255, 0) 33.33%,
          rgb(0, 255, 255) 50%,
          rgb(0, 0, 255) 66.66%,
          rgb(255, 0, 255) 83.33%,
          rgb(255, 0, 0) 100%
        );
  
        &-pointer {
          position: absolute;
          width: 76px;
         height: 44px;
        }
        &-handle {
        width: 76px;
        height: 44px;
        border-radius: 6px;
          background-color: #f8f8f8;
          margin-top: 2px;
          box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);
          cursor: pointer;
        }
      }
    }
  </style>
  