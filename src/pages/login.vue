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
          v-model="phone"
          required
          label="手机号"
          placeholder="请输入手机号"
          :rules="[{ required: true, message: '请填写手机号' }]"
      />
      <van-field
          v-model="sms"
          center
          clearable
          label="短信验证码"
          placeholder="请输入短信验证码"
      >
        <template #button>
          <van-button size="small" type="primary">发送验证码</van-button>
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
import {useRoute,useRouter} from "vue-router";
import {ref} from "vue";

/*路由变量*/
const route=useRoute();
const router=useRouter();

const phone = ref('');
const sms = ref('');


const jumpMine = () =>{
  router.push('/mine');
}

</script>

<style scoped>

</style>