<template>
  <div style="padding: 20px;text-align: center;font-size: 25px;font-weight:900;color: indianred">
    热门淘商！<van-icon name="fire" color="red" />
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
        <van-cell v-for="(item,index) in merchant" :key="item" >
          <van-icon name="medal" v-if="index===0" color="gold" size="30px"/>
          <van-icon name="medal" v-if="index===1" color="silver" size="30px"/>
          <van-icon name="medal" v-if="index===2" color="darkGreen" size="30px"/>
          <van-grid direction="horizontal" :border="false">
            <div style="display: flex;align-items: center;">{{index+1}}</div>
            <van-grid-item>
              <van-image
                :src="item.merchantPhoto" radius="100%" width="50px" height="50px"/>
            </van-grid-item>
            <div style="display: flex;align-items: center;">{{item.merchantName}}</div>
            <div v-if="index<=2" style="position: absolute;right: 30px;top:50%;">
              <span style="font-weight:900;font-size: 16px">粉丝数:</span>
              <span style="font-weight:900;font-size: 22px;color: red">{{item.fansCount}}</span>
            </div>
            <div v-if="index>2" style="position: absolute;right: 30px;top:25px;">
              <span style="font-weight:600;">粉丝数:</span>
              <span style="font-weight:900;font-size: 18px;color: red">{{item.fansCount}}</span>
            </div>
          </van-grid>
        </van-cell>
      </van-list>
    </div>
  </div>
</template>

<script setup lang="ts">
import {reactive, ref} from 'vue';
/*组件的东西*/
const loading = ref(false);
const finished = ref(false);
/*定义商家数组*/
const merchant = reactive([{merchantName:'',merchantPhoto:'',fansCount:0}]);


const onLoad = () => {
  // 异步更新数据
  // setTimeout 仅做示例，真实场景中一般为 ajax 请求
  setTimeout(() => {
    /*清空原始数组*/
    merchant.length = 0;
    /*push数据到数组*/
    merchant.push({merchantName: '小李',merchantPhoto: 'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/99895443_p0_master1200.jpg',fansCount: 200},
                  {merchantName: '小明',merchantPhoto: 'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/102916544_p0_master1200.jpg',fansCount: 300},
                  {merchantName: '小刚',merchantPhoto: 'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/98721406_p0_master1200.jpg',fansCount: 400},
                  {merchantName: '小李',merchantPhoto: 'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/99895443_p0_master1200.jpg',fansCount: 200},
                  {merchantName: '小明',merchantPhoto: 'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/102916544_p0_master1200.jpg',fansCount: 300},
                  {merchantName: '小刚',merchantPhoto: 'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/98721406_p0_master1200.jpg',fansCount: 400},
                  {merchantName: '小李',merchantPhoto: 'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/99895443_p0_master1200.jpg',fansCount: 200},
                  {merchantName: '小明',merchantPhoto: 'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/102916544_p0_master1200.jpg',fansCount: 300},
                  {merchantName: '小刚',merchantPhoto: 'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/98721406_p0_master1200.jpg',fansCount: 400},
                  {merchantName: '小李',merchantPhoto: 'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/99895443_p0_master1200.jpg',fansCount: 200},
                  {merchantName: '小明',merchantPhoto: 'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/102916544_p0_master1200.jpg',fansCount: 300},
                  {merchantName: '小刚',merchantPhoto: 'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/98721406_p0_master1200.jpg',fansCount: 400},
                  {merchantName: '小李',merchantPhoto: 'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/99895443_p0_master1200.jpg',fansCount: 200},
                  {merchantName: '小明',merchantPhoto: 'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/102916544_p0_master1200.jpg',fansCount: 300},
                  {merchantName: '小刚',merchantPhoto: 'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/98721406_p0_master1200.jpg',fansCount: 400},
                  {merchantName: '小李',merchantPhoto: 'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/99895443_p0_master1200.jpg',fansCount: 200},
                  {merchantName: '小明',merchantPhoto: 'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/102916544_p0_master1200.jpg',fansCount: 300},
                  {merchantName: '小刚',merchantPhoto: 'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/98721406_p0_master1200.jpg',fansCount: 400},
                  {merchantName: '小李',merchantPhoto: 'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/99895443_p0_master1200.jpg',fansCount: 200},
                  {merchantName: '小明',merchantPhoto: 'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/102916544_p0_master1200.jpg',fansCount: 300},
                  {merchantName: '小刚',merchantPhoto: 'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/98721406_p0_master1200.jpg',fansCount: 400},
                  {merchantName: '小李',merchantPhoto: 'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/99895443_p0_master1200.jpg',fansCount: 200},
                  {merchantName: '小明',merchantPhoto: 'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/102916544_p0_master1200.jpg',fansCount: 300},
                  {merchantName: '小刚',merchantPhoto: 'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/98721406_p0_master1200.jpg',fansCount: 400},
                  {merchantName: '小李',merchantPhoto: 'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/99895443_p0_master1200.jpg',fansCount: 200},
                  {merchantName: '小明',merchantPhoto: 'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/102916544_p0_master1200.jpg',fansCount: 300},
                  {merchantName: '小刚',merchantPhoto: 'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/98721406_p0_master1200.jpg',fansCount: 400}
    );


    // 加载状态结束
    loading.value = false;

    // 数据全部加载完成
    if (merchant.length >= 2) {
      finished.value = true;
    }
  }, 1000);
};
</script>

<style scoped>

</style>