<template>
  <div style="height: 4.5em">
    <van-icon
        size="30px"
        name="https://wxu-school.oss-cn-shanghai.aliyuncs.com/wxu/back.png"
        @click="$router.push('/mine')"
        style="position: absolute;top:2%;left:5%"
    />
    <div style="font-size: 20px;width: 12%;position: absolute;top:1.9%;left: 12%;" @click="$router.push('/mine')">
      设置
    </div>
  </div>
  <div style="margin-top: 10px">
    <van-cell-group inset>
      <van-cell title="修改个人信息" is-link size="large" @click="jumpUpdateUser" style="margin-top: 10px"/>
      <van-cell title="实名认证" is-link size="large" @click="jumpAuthentication" style="margin-top: 10px"/>
      <van-cell title="意见反馈" is-link size="large" @click="jumpFeedback"
                style="margin-top: 10px;margin-bottom: 10px"/>
    </van-cell-group>
  </div>
  <!--  <div style="width: 90%;height: 10.3em;background: white;margin: auto;border-radius: 30px">
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
    </div>-->
  <p style="text-align: center">
    <van-button round color="#e5e7e8" style="width: 190px;color: black" text="退出登录" @click="exit"/>
  </p>
</template>

<script setup lang="ts">

/*引入路由*/
import {getCurrentInstance} from "vue";
import {useRoute, useRouter} from "vue-router";
import {Toast} from "vant";
/*调用axios*/
const currentInstance = getCurrentInstance()
const {$http}: any = currentInstance?.appContext.config.globalProperties
/*路由变量*/
const route = useRoute();
const router = useRouter();
/*点击退出登录的事件*/
const exit = () => {
  /*axios发送退出请求*/
  $http.post('http://localhost:8082/user/logout').then((res: any) => {
    console.log(res)
    if(res.data.success) {
      sessionStorage.removeItem("token");//将token从session移除
      router.push('/mine');
    }
    else Toast.fail('退出失败');
  })
}
/*跳转到updateUser*/
const jumpUpdateUser = () => {
  let u = route.params.u;
  router.push({
    name: 'updateUser',
    params: {u: u}
  });
}
/*跳转到实名认证*/
const jumpAuthentication = () => {
  let u = route.params.u;
  router.push({
    name: 'Authentication',
    params: {u: u}
  });
}
/*跳转到意见反馈*/
const jumpFeedback = () => {
  let u = route.params.u;
  router.push({
    name: 'Feedback',
    params: {u: u}
  });
}
/*测试路由传值*/
const u = () => {
  console.log(route.params.u);
}
u();
</script>

<style scoped>

</style>
