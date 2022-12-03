<template>
  <div style="height: 4.5em">
    <van-icon
        size="30px"
        name="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/%E8%BF%94%E5%9B%9E.png"
        @click="jumpUpdateUser"
        style="position: absolute;top:2%;left:5%"
    />
    <div style="font-size: 20px;width: 22%;position: absolute;top:1.9%;left: 12%;" @click="jumpUpdateUser">
      更换手机
    </div>
  </div>
  <div style="font-size: 27px;color: darkolivegreen;position: absolute;top:8%;left: 34%">更换手机</div>
  <div style="margin-top: 80px">
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-cell size="large" title="当前账号："   :label=user.userId />
        <van-field
            v-model="oldPhone"
            name="原手机号"
            label="原手机号"
            placeholder="原手机号"
            :rules="[{ required: true, message: '请填写原手机号' }]"
        />
        <van-field
            v-model="newPhone"
            name="新手机号"
            label="新手机号"
            placeholder="新手机号"
            :rules="[{ required: true, message: '请填写新手机号' }]"
        />
      </van-cell-group>
      <div style="margin: 16px;margin-top: 20px">
        <van-button round block type="primary" native-type="submit">
          更换手机号
        </van-button>
      </div>
    </van-form>
  </div>
<!--  <div style="position: absolute;top:21%;left:15%;font-size: 20px">-->
<!--    <span style="">当前账号：</span>-->
<!--    <span style="margin-left: 30px;color: gray">{user.userId}}</span>-->
<!--  </div>-->
<!--  <div style="position: absolute;top:31%">-->
<!--    <van-field-->
<!--        v-model="user.phone"-->
<!--        label="手机号"-->
<!--        placeholder="请输入手机号"-->
<!--        size="large"-->
<!--        style="&#45;&#45;van-field-label-width:58px;&#45;&#45;van-field-label-margin-right:60px;height: 40px;width: 70%;margin-bottom: 20px;margin-top: 20px;margin-left: 50px;background: transparent;"-->
<!--    />-->
<!--  </div>-->
<!--  <van-button plain hairline type="success" round style="width: 230px;position: absolute;top:42%;left: 22%;background: transparent" @click="clickUpdate">修改</van-button>-->

</template>

<script setup lang="ts">
import {reactive, ref} from "vue";
import {useRoute,useRouter} from "vue-router";

/*路由变量*/
const route=useRoute();
const router=useRouter();
/*定义用户对象*/
const user = reactive({phone:'',userId:''});
/*定义原电话码*/
const oldPhone = ref('');
/*定义旧电话号码*/
const newPhone = ref('');
/*点击修改后的事件*/
const onSubmit = () =>{

}
/*跳转回修改个人信息页面*/
const jumpUpdateUser = () =>{
  router.push({name: 'updateUser', params: {u: route.params.u}})
}

const clickUpdate = () =>{

}
/*渲染数据*/
const openPhone = () =>{
  user.userId = route.params.userId+'';
  user.phone = route.params.userPhone+'';
}
openPhone();

</script>

<style scoped>

</style>
