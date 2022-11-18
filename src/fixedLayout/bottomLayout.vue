<template>
  <van-tabbar v-model="active" @change="onChange">
    <van-tabbar-item icon="home-o" name="home">首页</van-tabbar-item>
    <van-tabbar-item icon="apps-o" name="type">类型</van-tabbar-item>
    <van-tabbar-item icon="cart-o" name="shoppingTrolley">购物车</van-tabbar-item>
    <van-tabbar-item icon="contact" name="mine">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script setup>
import { ref } from 'vue';
import { Toast } from 'vant';
const active = ref(0);
const onChange = (index) => Toast(`标签 ${index}`);
</script>

<style scoped>

</style>