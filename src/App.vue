<template>
  <StarportCarrier>
    <RouterView v-slot="{ Component, route }">
      <transition name="page-fade">
        <div class="app_vue" :key="route.name">
          <component :is="Component" />
        </div>
      </transition>
    </RouterView>
  </StarportCarrier>
</template>
