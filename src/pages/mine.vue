<template>
  <div class="mineTop" style="width: 100%;height: 185px;">
    <van-icon name="setting-o" size="2em" color="white" @click="jumpSettings" style="float: right;margin-top:6%;margin-right: 7%" />
    <div  style="height: 20px"/>
    <van-card
        style="background: transparent;width: 80%"
        v-if="user.userId!==''"
    >
      <template #tags>
        <div style="position: absolute;top:65%;left: -8%">
          <van-tag v-if="user.isMerchant===false" text-color="#ffb9ca" round style="margin-right: 10px;background: #df3c5a">普通用户</van-tag>
          <van-tag v-if="user.isMerchant===true" text-color="#ffb9ca" round style="margin-right: 10px;background: #df3c5a">淘商</van-tag>
          <van-tag text-color="#ffb9ca" round style="border-radius: 20px;background: #df3c5a">收货地址</van-tag>
        </div>
      </template>
      <template #thumb>
        <van-image :src=user.profilePhoto width="65px" height="65px" radius="100%"></van-image>
      </template>
      <template #title>
        <div style="font-size: 20px;color: white;position: absolute;top:-16%;left: -8%">{{user.username}}</div>
      </template>
      <template #desc>
        <div style="font-size: 10px;color: #ffd0df;position: absolute;top:26%;left: -8%">账号名 : {{user.userId}}</div>
      </template>
    </van-card>
    <van-image
        v-if="user.userId===''"
        src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/QQ%E5%9B%BE%E7%89%8720221128013523.png"
        style="margin-top: -90px"
    ></van-image>
    <van-button v-if="user.userId===''" type="default" text="立即登录" @click="jumpLogin" style="width: 150px;color: cornflowerblue;position: absolute;top: 8%;left: 30%;border-radius: 20px"></van-button>
  </div>
  <div v-if="user.userId!==''" style="width: 90%;height: 145px;background: white;position: absolute;left: 4.8%;top: 17%;border-radius: 20px">
    <div style="margin-top: 18px">
      <span style="font-size: 17px;font-weight: 600;position: absolute;left: 5%">我的订单</span>
      <span style="color: #797979;position: absolute;right: 7%" @click="jumpMyOrder">全部订单 ></span>
    </div>
    <van-grid :column-num="3" :border="false" style="margin-top: 45px">
      <van-grid-item icon="pending-payment" text="待付款" />
      <van-grid-item icon="tosend" text="待收货" />
      <van-grid-item icon="chat-o" text="待评价" />
    </van-grid>
  </div>
  <div v-if="user.userId===''" style="width: 90%;height: 80px;background: white;position: absolute;left: 4.8%;top: 30%;border-radius: 20px">
    <div style="margin-top: 18px;text-align: center;font-size: 25px">
      快登录解锁更多专属权益吧！
    </div>

  </div>
  <div v-if="taoShow===true" style="position: absolute;top:40%;left: 16%;font-size: 30px;color: red"><h1>淘了个淘!</h1></div>
  <tetris @show="show"/>

</template>

<script setup lang="ts">
/*引入路由*/
import {useRoute,useRouter} from "vue-router";
import {getCurrentInstance, reactive, ref, watch} from "vue";
import Tetris from "../Tetris/tetris.vue";


/*调用axios*/
const currentInstance = getCurrentInstance()
const { $http }:any = currentInstance?.appContext.config.globalProperties
/*路由变量*/
const route=useRoute();
const router=useRouter();
/*定义user对象*/
const user=ref({username:'',userId:'',profilePhoto:'',isMerchant:false});
/*淘了个淘是否显示的判断标准*/
const taoShow = ref(false);
/*定义顶部css样式*/
const color = ref('linear-gradient(to right top, #fb4372, #fc4264,#fc4359,#f94851,#f64943,#fc463c)');

/*实时监测用户是否登录，改换样式*/
setTimeout(() => {
  if(user.value.userId==='') color.value="transparent";
})
/*淘了个淘显示时机事件*/
const show = (val:any) =>{
  if(val == 4) taoShow.value=true;
}
show(Tetris);
/*跳转到设置界面*/
const jumpSettings = () =>{
  let u = JSON.stringify(user);
  router.push(
        {
          name: 'settings',
          params: {u:u}
        }
      )
}
/*跳转到登录界面*/
const jumpLogin = () =>{
  router.push('/login');
}
/*跳转到我的订单*/
const jumpMyOrder = () =>{
  router.push('/orderCenter')
}
/*数据的赋值加载*/
const first = () =>{
  user.value = {username:'竺九',userId:'mkj2721183250',profilePhoto:'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/99895443_p0_master1200.jpg',isMerchant: false};
  // $http.get('/').then((res:any)=>{
  //   user.value = res.data.data;
  // })
}
first();
</script>

<style scoped>
.mineTop {
 background: v-bind("color");
}
.recommend {
  width: 90%;
  height: 22em;
  border-radius: 20px;
  background: white;
  margin: 10em auto;
}

.my-swipe .van-swipe-item {
  margin-top: 3.5%;
  color: #fff;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  background-color: transparent;
}
.recommendTop {
  --van-nav-bar-text-color: gray;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}
</style>