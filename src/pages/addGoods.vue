<template>
  <div style="height: 4.5em" @click="jumpMain">
    <van-icon
        size="30px"
        name="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/%E8%BF%94%E5%9B%9E.png"
        style="position: absolute;top:2%;left:5%"
    />
    <div style="font-size: 20px;width: 32%;position: absolute;top:1.9%;left: 12%;">
      修改个人信息
    </div>
  </div>
  <van-form @failed="onFailed" style="margin-top: 80px">
    <van-cell-group inset>

      <van-field
          v-model="commodity.commodityName"
          name="pattern"
          placeholder="商品名"

      />

      <van-field
          v-model="commodity.image"
          name="validator"
          placeholder="商品图url"

      />

      <van-field
          v-model="commodity.description"
          name="validator"
          placeholder="商品描述"

      />

      <van-field
          v-model="commodity.detail"
          name="validator"
          placeholder="商品详情"

      />

      <van-field
          v-model="commodity.price"
          name="validator"
          placeholder="商品价格"

      />

      <van-field
          v-model="commodity.commodityType"
          name="validator"
          placeholder="商品类别"

      />
    </van-cell-group >
    <div style="margin: 16px;">
      <van-button round block type="primary" native-type="submit" @click="add">
        提交
      </van-button>
    </div>
  </van-form>
</template>

<script setup lang="ts">
import {getCurrentInstance, reactive, ref} from 'vue';
import {useStore} from "vuex";
import {key} from '../store'
import {useRoute, useRouter} from "vue-router";
const store = useStore(key)
/*调用axios*/
const currentInstance = getCurrentInstance()
const {$http}: any = currentInstance?.appContext.config.globalProperties
/*路由变量*/
const route = useRoute();
const router = useRouter();
// 校验函数返回 true 表示校验通过，false 表示不通过
// const validator = (val: string) => /1\d{10}/.test(val);

const commodity = reactive({
  userId:store.state.userId,
  commodityName:'',
  image:'',
  description:'',
  detail:'',
  price:'',
  commodityType:'',
  commodityId:''
})

const jumpMain = () => {
  router.push("/mine")
}

const onFailed = (errorInfo: any) => {
  console.log('failed', errorInfo);
};

const add = () => {
  $http.put("http://localhost:8082/merchant/putaway",commodity).then((res:any)=>{
    console.log(res.data)
  })
}

</script>

<style scoped>

</style>
