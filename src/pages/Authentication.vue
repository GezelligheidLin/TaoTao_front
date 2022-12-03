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
  <div style="margin-top: 80px">
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-cell size="large" title="当前账号：" :label=user.userId />
        <van-field
            size="large"
            v-model="realUser.realName"
            name="真实姓名"
            label="真实姓名"
            placeholder="真实姓名"
            :rules="[{ required: true, message: '请填写真实姓名' }]"
        />
        <van-field
            size="large"
            v-model="realUser.cardId"
            name="身份证号"
            label="身份证号"
            placeholder="身份证号"
            :rules="[{ required: true, message: '请填写身份证号' }]"
        />
        <van-field
            size="large"
            v-model="realUser.phone"
            name="手机号"
            label="手机号"
            placeholder="手机号"
            :rules="[{ required: true, message: '请填写手机号' }]"
        />
        <van-field
            size="large"
            v-model="realUser.address"
            name="地址"
            label="地址"
            placeholder="地址"
            :rules="[{ required: true, message: '请填写地址' }]"
        />
      </van-cell-group>
      <div style="margin: 16px;margin-top: 20px">
        <van-button round block type="primary" native-type="submit">
          认证
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script setup lang="ts">

import {reactive} from "vue";
import {useRoute, useRouter} from "vue-router";

/*路由变量*/
const route = useRoute();
const router = useRouter();
/*定义实名对象*/
const realUser = reactive({userId: '', cardId: '', realName: '', phone: '', address: ''});
/*拿出路由传的参数对象*/
const user = reactive(JSON.parse(route.params.u + '')._value);
/*点击认证后的事件*/
const onSubmit = () => {

}
/*跳转回设置*/
const jumpAuthentication = () => {
  router.push({name: 'settings', params: {u: route.params.u}})
}

const clickAuthentication = () => {

}
/*渲染数据*/
const openAuthentication = () => {
  realUser.userId = user.userId;
}
openAuthentication();
</script>

<style scoped>

</style>
