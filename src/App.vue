<template>
  <StarportCarrier>
    <RouterView v-slot="{ Component, route }">
      <transition name="page-fade">
        <div :key="route.name">
          <component :is="Component" />
        </div>
      </transition>
    </RouterView>
  </StarportCarrier>
</template>
