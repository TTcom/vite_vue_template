<template>
  <div class="animation_dropdown">
    <div v-auto-animate class="dropwer">
      <strong class="dropdown-label" @click="show = !show">Click me to open!</strong>
      <p class="dropdown-content" v-if="show">
        Sea of Tranquility a mote of dust suspended in a sunbeam hundreds of thousands concept of the number one realm of the galaxies radio telescope. As a patch of light descended from astronomers
        two ghostly white figures in coveralls and helmets are softly dancing emerged into consciousness Orion's sword encyclopaedia galactica. Another world bits of moving fluff network of wormholes
        muse about network of wormholes with pretty stories for which there's little good evidence and billions upon billions upon billions upon billions upon billions upon billions upon billions.
      </p>
    </div>
    <div class="enjoy_icon mt10">
      <h5>Click emojis to remove them.</h5>
      <ul v-auto-animate>
        <li v-for="item in items" :key="item" @click="removeItem(item)">
          {{ item }}
        </li>
      </ul>
    </div>
    <div class="fruit mt10">
      <ul ref="list" v-auto-animate>
        <li v-for="item in fruitItems" :key="item">
          <span>{{ item }}</span>
          <button @click.prevent="remove(item)">x</button>
        </li>
      </ul>
      <button class="button button--add button--alt" @click="add">+ Add Fruit</button>
      <button class="button button--random button--alt" @click="randomize">Randomize</button>
    </div>
    <div class="Randomize mt10">
      <div class="boxes" v-auto-animate="{ duration: 500 }">
        <div class="box" v-for="number in numbers" :key="number" v-text="number" />
      </div>
      <button class="button button--alt" @click="fourrandomize">Randomize</button>
    </div>
  </div>
</template>

<script setup>
//first
const show = ref(false)
//second
const items = ref(["😏", "😐", "😑", "😒", "😕", "😴", "😰", "😘"])
function removeItem(toRemove) {
  items.value = items.value.filter(item => item !== toRemove)
}
//three
const fruitItems = ref(["🍎 Apple", "🍌 Banana", "🍒 Cherry"])
const list = ref()
const fruitBasket = ["🍓 Strawberry", "🥥 Coconut", "🥝 Kiwi", "🍇 Grape", "🍉 Watermelon", "🍍 Pineapple", "🍐 Pear", "🍑 Peach", "🫐 Blueberry", "🍊 Orange", "🥭 Mango"]
const remove = item => {
  console.log(item)
  fruitItems.value = fruitItems.value.filter(fruit => {
    if (fruit === item) {
      fruitBasket.push(fruit)
      return false
    }
    return true
  })
}
const add = () => {
  if (fruitBasket.length) {
    // fruitItems.value.splice(Math.round(Math.random() * fruitItems.value.length - 1), 0, fruitBasket.shift()) //随机位置添加
    fruitItems.value.splice(fruitItems.value.length, 0, fruitBasket.shift()) //尾部添加
  } else {
    alert("Out of fruit!")
  }
}
const randomize = () => fruitItems.value.sort(() => (Math.random() > 0.5 ? 1 : -1))

//four
const numbers = ref(new Array(50).fill("").map((_, i) => i))
const fourrandomize = () => {
  numbers.value.sort(() => (Math.random() > 0.5 ? 1 : -1))
}
</script>

<style lang="scss" scoped>
.animation_dropdown {
  box-sizing: border-box;
  padding: 15px;
}
.boxes {
  display: flex;
  flex-wrap: wrap;
}
.box {
  box-sizing: border-box;
  width: calc(10% - 0.5em);
  margin: 0.25em;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875em;
  font-weight: 300;
  aspect-ratio: 1;
  border: 1px solid #cbcbcb;
  border: 1px solid #cbcbcb;
}
.dropwer {
  padding: 10px;
  position: relative;
  border: 1px solid #cbcbcb;
  border-radius: 0.5em;
  background-color: #fff;
  margin-bottom: 2em;
}
.enjoy_icon {
  ul {
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    user-select: none;
    position: relative;
  }
  li {
    border: 1px solid #878787;
    border-radius: 5px;
    width: 2em;
    height: 2em;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5em;
    cursor: pointer;
  }
}

.fruit {
  ul {
    list-style-type: none;
    padding: 0;
    max-width: 300px;
  }
  li {
    display: flex;
    justify-content: space-between;
    padding: 0.75em;
    background-color: white;
    margin-bottom: 0.5em;
    border-radius: 0.5em;
    box-shadow: 0 0 0.5em rgba(0, 0, 0, 0.1);
    font-size: 0.875em;
  }
  [data-dark-mode="true"] li {
    background-color: var(--purple-md);
  }
  li::before {
    display: none;
  }
  li button {
    appearance: none;
    border: none;
    padding: none;
    margin: none;
    background-color: transparent;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
}
</style>
