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
    <van-field
        v-model="user.phone"
        label="手机号"
        placeholder="请输入手机号"
        size="large"
        style="--van-field-label-width:58px;--van-field-label-margin-right:60px;height: 40px;width: 70%;margin-bottom: 20px;margin-top: 20px;margin-left: 50px;background: transparent;"
    />
  </div>
  <van-button plain hairline type="success" round style="width: 230px;position: absolute;top:42%;left: 22%;background: transparent" @click="clickUpdate">修改</van-button>

</template>

<script setup lang="ts">
import {reactive, ref} from "vue";
import {useRoute,useRouter} from "vue-router";

/*路由变量*/
const route=useRoute();
const router=useRouter();

const user = reactive({phone:'',userId:''});


const jumpUpdateUser = () =>{
  router.push({name: 'updateUser', params: {u: route.params.u}})
}

const clickUpdate = () =>{

}

const openPhone = () =>{
  user.userId = route.params.userId+'';
  user.phone = route.params.userPhone+'';
}
openPhone();

</script>

<style scoped>

</style>