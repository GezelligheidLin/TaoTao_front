<template>
  <div style="height: 4.5em">
    <van-icon
        size="30px"
        name="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/%E8%BF%94%E5%9B%9E.png"
        @click="jumpFeedback"
        style="position: absolute;top:2%;left:5%"
    />
    <div style="font-size: 20px;width: 22%;position: absolute;top:1.9%;left: 12%;" @click="jumpFeedback">
      意见反馈
    </div>
  </div>
  <van-cell-group inset style="margin-top: 20px" >
    <van-field
        size="large"
        v-model="message"
        rows="2"
        autosize
        label="意见反馈"
        type="textarea"
        maxlength="150"
        placeholder="请输入您的意见"
        show-word-limit
    />
  </van-cell-group>

</template>

<script setup lang="ts">

import {ref} from "vue";
/*引入路由*/
import {useRoute,useRouter} from "vue-router";

/*路由变量*/
const route=useRoute();
const router=useRouter();

const message = ref('');

const jumpFeedback = () =>{
  router.push({name: 'settings', params: {u: route.params.u}});
}

</script>

<style scoped>

</style>