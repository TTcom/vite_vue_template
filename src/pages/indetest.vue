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
  height: 200px;
  width: 200px;
  position: absolute;
  top: 0;
  left: 0;
  transition: all .8s;
}
.onaboutimg {
  width: 200px;
   height: 200px;
  border-radius: 10px;
  overflow: hidden;
}
</style>
