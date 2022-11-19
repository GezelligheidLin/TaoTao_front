<template>

  <van-nav-bar
      title="淘了个淘"
      fixed>
    <template #left>
      <span style="font-size: 15px;color: red" @click="toNotify">♥淘了个淘</span>
    </template>
    <template #right>
      <van-icon name="smile-o" size="2.2em" color="#b8b8ff" @click="onClickRight"/>
    </template>
    <template #title>
      <form action="/" style="margin-left: 30px">
        <van-search
            v-model="value"
            show-action
            placeholder="请输入搜索关键词"
            @search="onSearch"
            @cancel="onCancel"
            style="background: transparent"
        />
      </form>
    </template>
  </van-nav-bar>


  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" @change="onChange">
    <van-swipe-item v-for="image in images" :key="image">
      <van-image
          width="95%"
          height="10em"
          :src="image"
          radius="5%"
      />
    </van-swipe-item>
  </van-swipe>


  <van-grid :border="false" :column-num="5" :gutter="0">
    <van-grid-item text="手机专区">
      <van-image
          :src="typeImages[0]"
      />
    </van-grid-item>
    <van-grid-item>
      <van-image
          :src="typeImages[1]"
      />
    </van-grid-item>
    <van-grid-item>
      <van-image
          :src="typeImages[2]"
      />
    </van-grid-item>
    <van-grid-item>
      <van-image
          :src="typeImages[3]"
      />
    </van-grid-item>
    <van-grid-item>
      <van-image
          :src="typeImages[4]"
      />
    </van-grid-item>
    <van-grid-item text="手机专区">
      <van-image
          :src="typeImages[0]"
      />
    </van-grid-item>
    <van-grid-item>
      <van-image
          :src="typeImages[1]"
      />
    </van-grid-item>
    <van-grid-item>
      <van-image
          :src="typeImages[2]"
      />
    </van-grid-item>
    <van-grid-item>
      <van-image
          :src="typeImages[3]"
      />
    </van-grid-item>
    <van-grid-item>
      <van-image
          :src="typeImages[4]"
      />
    </van-grid-item>
  </van-grid>
</template>



<script setup>
import {Notify, Toast} from 'vant';
import { ref } from 'vue';
const onClickRight = () => Toast('按钮');
const value = ref('');
const onSearch = (val) => Toast(val);
const onCancel = () => Toast('取消');
const toNotify = () => Notify({
  message: '自定义位置',
  position: 'bottom',
  color: 'black',
  background: 'transparent',
});
const onChange = (index) => Toast('当前 Swipe 索引：' + (index+1));
const images = [
  'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/99895443_p0_master1200.jpg',
  'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/102916544_p0_master1200.jpg',
  'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/98721406_p0_master1200.jpg',
  'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/99663718_p0_master1200.jpg'
];
const typeImages = [
  'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/99895443_p0_master1200.jpg',
  'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/102916544_p0_master1200.jpg',
  'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/98721406_p0_master1200.jpg',
  'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/99663718_p0_master1200.jpg',
  'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/102916544_p0_master1200.jpg'
];
const name="Home";
</script>

<style scoped>
.my-swipe .van-swipe-item {
  margin-top: 3%;
  color: #fff;
  font-size: 20px;

  line-height: 30px;
  text-align: center;
  background-color: white;
}

</style>