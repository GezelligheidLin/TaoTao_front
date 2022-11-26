<template>
  <div style="height: 4.5em">
    <van-icon
        size="30px"
        name="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/%E8%BF%94%E5%9B%9E.png"
        @click="jumpUpdateUser"
        style="position: absolute;top:2%;left:5%"
    />
    <div style="font-size: 20px;width: 22%;position: absolute;top:1.9%;left: 12%;" @click="jumpUpdateUser">
      更改密码
    </div>
  </div>
  <div style="font-size: 27px;color: darkolivegreen;position: absolute;top:8%;left: 37%">修改密码</div>
  <div style="position: absolute;top:21%;left:15%;font-size: 20px">
    <span style="">当前账号：</span>
    <span style="margin-left: 30px;color: gray">{{user.userId}}</span>
  </div>
  <div style="position: absolute;top:31%">
  <van-field v-model="oldPassword"  colon size="large" type="password" label="原密码"  style="--van-field-label-width:58px;--van-field-label-margin-right:2px;height: 40px;width: 70%;margin-bottom: 20px;margin-top: 20px;margin-left: 50px;background: transparent;"/>
  <van-divider :style="{background:'#d2d1d1',width:'242px'}" style="margin-left: 122px;margin-top: -20px"/>
  <van-field v-model="newPassword" colon size="large" type="password" label="新密码" style="--van-field-label-width:58px;--van-field-label-margin-right:2px;height: 40px;width: 70%;margin-left: 50px;background: transparent;"/>
  <van-divider :style="{background:'#d2d1d1',width:'242px'}" style="margin-left: 122px;margin-top: -4px"/>
  </div>
  <van-button plain hairline type="success" round style="width: 230px;position: absolute;top:48%;left: 27%;background: transparent">修改</van-button>
</template>

<script setup lang="ts">
import {watch} from "@vue/runtime-core";
import {reactive, ref} from "vue";
/*引入路由*/
import {useRoute,useRouter} from "vue-router";


/*路由变量*/
const route=useRoute();
const router=useRouter();

const oldPassword = ref('');
const newPassword = ref('');

const errorInfo = ref('');
const showKeyboard = ref(true);

const user = reactive({userId:'',password:''});




const jumpUpdateUser = () =>{
  router.push({name:'updateUser',params:{u:route.params.u}})
}

const openPassword = () =>{
  user.userId = route.params.userId+'';
  user.password = route.params.password+'';
}
openPassword();

</script>

<style scoped>

</style>