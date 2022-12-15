<template>
  <van-nav-bar fixed placeholder safe-area-inset-top style="background: transparent">
    <template #left>
      <van-icon name="arrow-left" size="25px"/>
      <span style="font-size: 17px;margin-left: 4px">返回</span>
    </template>
    <template #title>
      <form action="/" style="margin-left: 30px">
        <van-search
            show-action
            v-model="value"
            placeholder="请输入想要的商品"
            @search="onSearch"
            @cancel="onCancel"
            style="background: transparent"
        />
      </form>
    </template>
  </van-nav-bar>
  <div  style="width: 90%;margin: auto">
    <van-tabs v-model:active="active" background="transparent" style="margin-top: 16px">
      <van-tab :title="store.state.Type" style="">
        <van-card
            v-for="(i,index) in TypeGoods"
            :key="i"
            num="1"
            :price="i.price"
            :desc="i.description"
            :title="i.commodityName"
            :thumb="i.image"
            style="border-radius: 15px;margin-top: 10px"
            @click="jumpDetails(i)"
        />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script setup lang="ts">
import {useStore} from "vuex";
import {key} from '../../store'
import {getCurrentInstance, reactive, ref} from "vue";
import {Toast} from "vant";
import {useRoute, useRouter} from "vue-router";
/*调用axios*/
const currentInstance = getCurrentInstance()
const {$http}: any = currentInstance?.appContext.config.globalProperties

/*路由变量*/
const route = useRoute();
const router = useRouter();
const store = useStore(key)

const value = ref('');

const TypeGoods = reactive([
    {
      commodityId:'',
      commodityName:'',
      image:'',
      description:'',
      price:'',
    }
])

const onSearch = () => {
  Toast.success("搜索")
}

const onCancel = () => {
  Toast.fail("取消")
}

const jumpDetails = (i:any) => {
  router.push('/Details');
  store.commit("changeHomeLunBoId",i.commodityId)
  console.log(i.commodityId)
}

const openTypeMore = () => {
  $http.get('http://localhost:8082/goodsType/classify/'+store.state.Type).then((res:any)=>{
    console.log(res.data)
    TypeGoods.length=0
    res.data.data.forEach((i:any)=>{TypeGoods.push(i)})
  })
}
openTypeMore()

const log = () => {
  console.log(store.state.Type)
}
log();
</script>

<style scoped>

</style>
