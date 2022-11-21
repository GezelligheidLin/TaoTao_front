<template>
  <router-view />
  <van-tabbar v-model="active" @change="onChange" fixed placeholder>
    <van-tabbar-item replace to="/Home" icon="home-o" name="home">首页</van-tabbar-item>
    <van-tabbar-item replace to="/Type" icon="apps-o" name="type">分类</van-tabbar-item>
    <van-tabbar-item replace to="/leaderboard" icon="medal-o" name="leaderboard">受欢迎</van-tabbar-item>
    <van-tabbar-item replace to="/shoppingTrolley" icon="cart-o" name="shoppingTrolley">购物车</van-tabbar-item>
    <van-tabbar-item replace to="/mine" icon="contact" name="mine">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Toast } from 'vant';
const active = ref("home");
const onChange = (index:number) => Toast(`标签 ${index}`);
</script>

<style scoped>

</style>