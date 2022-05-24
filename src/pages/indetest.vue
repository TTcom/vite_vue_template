<template>
  <div id="indetest">
    <!-- <span>Shared component across routes with animations</span> -->
    <RouterLink to="/detailtest">
      <Starport port="myid" class="istarport">
        <aboutImge class="onaboutimg" />
      </Starport>
    </RouterLink>
  </div>
</template>
<style>
.istarport {
  height: 100px;
  width: 100px;
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.8s;
}
.onaboutimg {
  width: 100px;
  height: 100px;
  border-radius: 10px;
  overflow: hidden;
}
</style>
