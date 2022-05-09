<template>
  <div id="detailtest">
    <!-- <span>appledetail</span> -->
    <Starport port="myid" class="astarport">
      <aboutImge class="rounded" />
    </Starport>
  </div>
</template>
<style>
.astarport {
  height: 200px;
  position: absolute;
  top: 0;
  left: 0.1px;
  width: 200px;
  transition: all .8s;
}
.rounded {
  width: 200px;
   height: 200px;
  border-radius: 50%;
  overflow: hidden;
}
</style>
