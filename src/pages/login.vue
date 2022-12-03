<template>
  <div style="height: 4.5em">
    <van-icon
        size="30px"
        name="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/%E8%BF%94%E5%9B%9E.png"
        @click="jumpMine"
        style="position: absolute;top:2%;left:5%"
    />
    <div style="font-size: 20px;width: 22%;position: absolute;top:1.9%;left: 12%;" @click="jumpMine">
      登录
    </div>
  </div>
  <van-form @submit="jumpMine" style="margin-top: 30%">
    <van-cell-group inset>
      <van-field
          v-model="userLogin.phone"
          required
          label="手机号"
          placeholder="请输入手机号"
          :rules="[{ required: true, message: '请填写手机号' }]"
      />
      <van-field
          v-model="userLogin.code"
          center
          clearable
          label="短信验证码"
          placeholder="请输入短信验证码"
      >
        <template #button>
          <van-button size="small" type="primary" @click="sendCode">发送验证码</van-button>
        </template>
      </van-field>
    </van-cell-group>
    <div style="margin: 16px;">
      <van-button round block type="primary" native-type="submit">
        登录
      </van-button>
    </div>
  </van-form>
</template>

<script setup lang="ts">
/*引入路由*/
import {useRoute, useRouter} from "vue-router";
import {getCurrentInstance, reactive} from "vue";
/*调用axios*/
const currentInstance = getCurrentInstance()
const {$http}: any = currentInstance?.appContext.config.globalProperties

/*路由变量*/
const route = useRoute();
const router = useRouter();
/*封装登录注册所需的变量*/
const userLogin = reactive({phone: '', code: ''})
/*定义token*/
// const token:any = ref('');

/*点击登录的事件*/
const jumpMine = () => {
  $http.post('http://localhost:8082/user/login/', userLogin).then((res: any) => {  //发送axios请求并将登陆对象传递给后端
    if (res) {
      sessionStorage.setItem('token', res.data.data)   //将token写入session
    }
    // token.value=res.data.data;
    router.push({
      name: 'mine'
    });
  })
}
/*发送验证码事件*/
const sendCode = () => {
  // console.log(userLogin.phone)
  /*axios发送请求并将手机传给后端获取验证码*/
  $http.get('http://localhost:8082/user/code/' + userLogin.phone);
}
</script>

<style scoped>

</style>
