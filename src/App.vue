<template>
  <StarportCarrier>
    <RouterView v-slot="{ Component }">
      <transition name="page-fade">
        <component :is="Component" />
      </transition>
    </RouterView>
  </StarportCarrier>
</template>
