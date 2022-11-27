<template>
  <div style="height: 4.5em">
    <van-icon
        size="30px"
        name="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/%E8%BF%94%E5%9B%9E.png"
        @click="jumpAuthentication"
        style="position: absolute;top:2%;left:5%"
    />
    <div style="font-size: 20px;width: 22%;position: absolute;top:1.9%;left: 12%;" @click="jumpAuthentication">
      实名认证
    </div>
  </div>
  <div style="font-size: 27px;color: darkolivegreen;position: absolute;top:8%;left: 37%">实名认证</div>
  <div style="position: absolute;top:21%;left:15%;font-size: 20px">
    <span style="">当前账号：</span>
    <span style="margin-left: 30px;color: gray">{{user.userId}}</span>
  </div>
  <div style="position: absolute;top:31%">
    <van-field v-model="realUser.realName"  colon size="large" label="真实姓名"  style="--van-field-label-width:70px;--van-field-label-margin-right:2px;height: 40px;width: 70%;margin-bottom: 20px;margin-top: 20px;margin-left: 50px;background: transparent;"/>
    <van-divider :style="{background:'#d2d1d1',width:'242px'}" style="margin-left: 130px;margin-top: -20px"/>
    <van-field v-model="realUser.cardId" colon size="large" label="身份证号" style="--van-field-label-width:70px;--van-field-label-margin-right:2px;height: 40px;width: 70%;margin-left: 50px;background: transparent;"/>
    <van-divider :style="{background:'#d2d1d1',width:'242px'}" style="margin-left: 130px;margin-top: -4px"/>
  </div>
  <van-button plain hairline type="success" round style="width: 230px;position: absolute;top:49%;left: 22%;background: transparent" @click="clickAuthentication">认证</van-button>

</template>

<script setup lang="ts">

import {reactive} from "vue";
import {useRoute,useRouter} from "vue-router";

/*路由变量*/
const route=useRoute();
const router=useRouter();

const realUser = reactive({userId:'',cardId:'',realName:''});

const user = reactive(JSON.parse(route.params.u+''));

const jumpAuthentication = () =>{
  router.push({name: 'settings', params: {u: route.params.u}})
}

const clickAuthentication = () =>{

}


const openAuthentication = () =>{
  realUser.userId = user.userId;
}
openAuthentication();
</script>

<style scoped>

</style>