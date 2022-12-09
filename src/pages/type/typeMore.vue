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
      <van-tab v-for="i in 4" :key="i" title="文字" style="">
        <van-card
            v-for="i in 10"
            :key="i"
            num="2"
            price="2.00"
            desc="描述信息"
            title="商品标题"
            thumb="https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg"
            style="border-radius: 15px;margin-top: 10px"
            @click="jumpDetails"
        />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script setup lang="ts">
import {useStore} from "vuex";
import {key} from '../../store'
import {ref} from "vue";
import {Toast} from "vant";
import router from "../../router";

const store = useStore(key)

const value = ref('');

const onSearch = () => {
  Toast.success("搜索")
}

const onCancel = () => {
  Toast.fail("取消")
}

const jumpDetails = () => {
  router.push('/Details');
}

const log = () => {
  console.log(store.state.Type)
}
log();
</script>

<style scoped>

</style>
