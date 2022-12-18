<template>
  <div style="padding: 20px;text-align: center;font-size: 25px;font-weight:900;color: indianred">
    热门淘商！
    <van-icon name="fire" color="red"/>
  </div>
  <div style="width: 90%;margin: auto;border-radius: 20px;background: white;">
    <div style="height: 15px"></div>
    <div>
      <van-list
          v-model:loading="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
      >
        <van-cell v-for="(item,index) in merchant" :key="index">
          <van-icon name="medal" v-if="index===0" color="gold" size="30px"/>
          <van-icon name="medal" v-if="index===1" color="silver" size="30px"/>
          <van-icon name="medal" v-if="index===2" color="darkGreen" size="30px"/>
          <van-grid direction="horizontal" :border="false">
            <div style="display: flex;align-items: center;">{{ index + 1 }}</div>
            <van-grid-item>
              <van-image
                  :src="item.icon" radius="100%" width="50px" height="50px"/>
            </van-grid-item>
            <div style="display: flex;align-items: center;">{{ item.storeName }}</div>
            <div v-if="index<=2" style="position: absolute;right: 30px;top:50%;">
              <span style="font-weight:900;font-size: 16px">粉丝数:</span>
              <span style="font-weight:900;font-size: 22px;color: red">{{ item.fansCount }}</span>
            </div>
            <div v-if="index>2" style="position: absolute;right: 30px;top:25px;">
              <span style="font-weight:600;">粉丝数:</span>
              <span style="font-weight:900;font-size: 18px;color: red">{{ item.fansCount }}</span>
            </div>
          </van-grid>
        </van-cell>
      </van-list>
    </div>
  </div>
</template>


<script setup lang="ts">
import {getCurrentInstance, reactive, ref} from 'vue';
/*调用axios*/
const currentInstance = getCurrentInstance()
const {$http}: any = currentInstance?.appContext.config.globalProperties
/*组件的东西*/
const loading = ref(false);
const finished = ref(false);
/*定义商家数组*/
const merchant = reactive([

  {
    merchantId: '',
    storeName: '',
    icon: '',
    fansCount: 0
  }
]);


const onLoad = () => {
  // 异步更新数据
  // setTimeout 仅做示例，真实场景中一般为 ajax 请求
  setTimeout(() => {
    /*axios获取数据并push数据到数组*/
    $http.get('http://localhost:8082/merchant/hotRank').then((res: any) => {
      console.log(res.data)
      merchant.length = 0;
      res.data.data.forEach((i: any) => {
        merchant.push(i)
      });
    })

    // 加载状态结束
    loading.value = false;
    // 数据全部加载完成
    if (merchant.length >= merchant.length) {
      finished.value = true;
    }
  }, 1000);
};
onLoad();
</script>

<style scoped>

</style>
