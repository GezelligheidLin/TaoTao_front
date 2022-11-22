<!-- html -->
<template>
    <van-sidebar  v-model="active" >
      <van-sidebar-item replace title="生活" to="/Type/Life"></van-sidebar-item>
      <van-sidebar-item title="数码" />
      <van-sidebar-item title="玩乐" />
      <van-sidebar-item title="家居" />
      <van-sidebar-item title="文创" />
      <van-sidebar-item title="美食" />
      <van-sidebar-item title="装品" />
      <van-sidebar-item title="穿搭" />
      <van-sidebar-item title="运动" />
    </van-sidebar>
  <router-view></router-view>
</template>




<!-- js -->
<script  setup lang="ts">
import { ref } from 'vue';
const active = ref(0);

</script>





<!-- css -->
<style scoped>
.right{
  display: block;
  float:right;
  width: 80%;
  height: 830px;
  background-color: aquamarine;
}
.left{
  display: block;
  float:left;
}
van-sidebar-item{
  --van-sidebar-width: 20%;
}
</style>
