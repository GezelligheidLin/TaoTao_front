<template>
  <div style="height: 4.5em">
    <van-icon
        size="30px"
        name="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/%E8%BF%94%E5%9B%9E.png"
        @click="$router.push('/mine')"
        style="position: absolute;top:2%;left:5%"
        />
    <div style="font-size: 20px;width: 12%;position: absolute;top:1.9%;left: 12%;" @click="$router.push('/mine')">
      设置
    </div>
  </div>
  <div style="width: 90%;height: 10.3em;background: white;margin: auto;border-radius: 30px">
    <div style="height: 10px"/>
    <div style="width: 100%;font-size: 20px;margin-left: 20px;" @click="jumpUpdateUser">修改个人信息</div>
    <span style="font-size: 30px;color: #a8a6a6;font-weight: 400;position:absolute;right: 10%;top:8.6%;">></span>
    <van-divider style="margin-top: 10px"/>
    <div style="width: 100%;font-size: 20px;margin-left: 20px;" @click="jumpAuthentication">实名认证</div>
    <span style="font-size: 30px;color: #a8a6a6;font-weight: 400;position:absolute;right: 10%;top:15%;">></span>
    <van-divider style="margin-top: 10px"/>
    <div>
      <div style="width: 100%;font-size: 20px;margin-left: 20px;" @click="jumpFeedback">意见反馈</div>
      <span style="font-size: 30px;color: #a8a6a6;font-weight: 400;position:absolute;right: 10%;top:22.3%;" @click="jumpFeedback">></span>
    </div>
  </div>
  <p style="text-align: center"><van-button round color="#e5e7e8" style="width: 190px;color: black" text="退出登录" @click="exit"/></p>
</template>

<script setup lang="ts">

/*引入路由*/
import {useRoute,useRouter} from "vue-router";

/*路由变量*/
const route=useRoute();
const router=useRouter();

const exit = () =>{

  router.push('/mine');
}

const jumpUpdateUser = () =>{
  let u = route.params.u;
  router.push({
    name:'updateUser',
    params:{u:u}
  });
}

const jumpAuthentication = () =>{
  let u = route.params.u;
  router.push({
    name:'Authentication',
    params:{u:u}
  });
}

const jumpFeedback = () =>{
  let u = route.params.u;
  router.push({
    name:'Feedback',
    params:{u:u}
  });
}

const u = () =>{
  console.log(route.params.u);
}
u();
</script>

<style scoped>

</style>