<template>
  <router-view/>
  <van-tabbar
      v-if="(route.path!=='/settings')&&
      (route.path!=='/updateUser')&&
      (route.path!=='/password')&&
      (route.path!=='/phone')&&
      (route.path!=='/Authentication')&&
      (route.path!=='/Feedback')&&
      (route.path!=='/login')&&
      (route.path!=='/orderCenter')&&
      (route.path!=='/typeMore')&&
      (route.path!=='/Details')&&
      (route.path!=='/submitOrder')"
      v-model="active"
      @change="onChange"
      :placeholder="true"
      :safe-area-inset-bottom="true">
    <van-tabbar-item replace to="/Home" icon="home-o" name="home">首页</van-tabbar-item>
    <van-tabbar-item replace to="/Type" icon="apps-o" name="type">分类</van-tabbar-item>
    <van-tabbar-item replace to="/leaderboard" icon="medal-o" name="leaderboard">受欢迎</van-tabbar-item>
    <van-tabbar-item replace to="/shoppingTrolley" icon="cart-o" name="shoppingTrolley">购物车</van-tabbar-item>
    <van-tabbar-item replace to="/mine" icon="contact" name="mine">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script setup lang="ts">
import {ref, watch} from 'vue';
import {Toast} from 'vant';
/*引入路由*/
import {useRoute, useRouter} from "vue-router";
/*路由变量*/
const route = useRoute();
const router = useRouter();

const name = [
    "/Home",
    "/Type",
    "/leaderboard",
    "/shoppingTrolley",
    "/mine"
]

/*底部导航栏首先指向的位置*/
const active = ref("home");
/*底部导航栏发生改变的事件*/
const onChange = (index: number) => Toast(`标签 ${index}`);
watch(()=>route.path,(newValue,oldValue)=>{
  console.log(newValue)
  name.forEach((i:any)=>{
    if(newValue===i) active.value=i.replace(/\//g,'').toLowerCase()
  })
  console.log(active.value)
})

/*路由跳转，修复点击去空白页面的bug*/
const jump = () => {
  router.push('/Type');
  router.push('/Home');
}
/*在setup中直接调用函数即为create()*/
jump();

</script>

<style scoped>

</style>
