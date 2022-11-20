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

            placeholder="请输入搜索关键词"
            @search="onSearch"
            @cancel="onCancel"
            style="background: transparent"
        />
      </form>
    </template>
  </van-nav-bar>


  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" @change="">
    <van-swipe-item v-for="image in images" :key="image" >
      <div style="height:15em">
      <van-image
          width="95%"
          height="100%"
          :src="image"
          radius="5%"
      />
      </div>
    </van-swipe-item>
  </van-swipe>


  <van-grid :border="false" :column-num="5" :gutter="0" square style="margin-top: 10px;--van-grid-item-content-background-color: transparent">
    <van-grid-item>
      <van-image
          :src="typeImages[0]"

      />
      <span class="txt">智慧办公</span>
    </van-grid-item>
    <van-grid-item>
      <van-image
          :src="typeImages[1]"
      />
      <span class="txt">智能家居</span>
    </van-grid-item>
    <van-grid-item>
      <van-image
          :src="typeImages[2]"
      />
      <span class="txt">华为手机</span>
    </van-grid-item>
    <van-grid-item>
      <van-image
          :src="typeImages[3]"
      />
      <span class="txt">影音娱乐</span>
    </van-grid-item>
    <van-grid-item>
      <van-image
          :src="typeImages[4]"
      />
      <span class="txt">运动健康</span>
    </van-grid-item>
    <van-grid-item>
      <van-image
          :src="typeImages[0]"
      />
      <span class="txt">鸿蒙智联</span>
    </van-grid-item>
    <van-grid-item>
      <van-image
          :src="typeImages[1]"
      />
      <span class="txt">华为智选</span>
    </van-grid-item>
    <van-grid-item>
      <van-image
          :src="typeImages[2]"
      />
      <span class="txt">AITO汽车</span>
    </van-grid-item>
    <van-grid-item>
      <van-image
          :src="typeImages[3]"
      />
      <span class="txt">秒杀</span>
    </van-grid-item>
    <van-grid-item>
      <van-image
          :src="typeImages[4]"
      />
      <span class="txt">华为配件</span>
    </van-grid-item>
  </van-grid>

  <div class="recommend">
    <van-nav-bar
        right-text="更多 >"
        @click-right=""
        class="recommendTop">
      <template #left>
        <span style="font-size: 15px;color: black;font-weight:900;" @click="toNotify">甄选推荐</span>
      </template>
    </van-nav-bar>
    <van-swipe  :autoplay="3000" indicator-color="blue" @change="onChange">
      <van-swipe-item v-for="image in images" :key="image">
        <van-image
            :src="image"
            width="100%"
            height="19em"
        />
      </van-swipe-item>
    </van-swipe>
    <div style="text-align: center;">{{i}}</div>
  </div>


</template>



<script setup lang="ts">
import {Notify, Toast} from 'vant';
import { ref } from 'vue';

const value = ref('');
/*甄选推荐的价钱*/
const i = ref('￥30');
/*滚动图片url*/
const images = [
  'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/99895443_p0_master1200.jpg',
  'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/102916544_p0_master1200.jpg',
  'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/98721406_p0_master1200.jpg',
  'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/99663718_p0_master1200.jpg'
];
/*类型图片url*/
const typeImages = [
  'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/99895443_p0_master1200.jpg',
  'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/102916544_p0_master1200.jpg',
  'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/98721406_p0_master1200.jpg',
  'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/99663718_p0_master1200.jpg',
  'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/102916544_p0_master1200.jpg'
];



/*顶部标签栏右部点击事件*/
const onClickRight = () => Toast('按钮');
/*搜索之后的事件*/
const onSearch = (val:object) => Toast(val);
/*取消搜索的事件*/
const onCancel = () => Toast('取消');
/*顶部标签栏左部点击事件*/
const toNotify = () => Notify({
  message: '自定义位置',
  position: 'bottom',
  color: 'black',
  background: 'transparent',
});
/*滚动图片改变时的事件*/
const onChange = (index:number) => {
  if(index===0) i.value='￥30';
  else if(index===1) i.value='￥40';
  else if(index===2) i.value='￥50';
  else i.value='￥60';
  //Toast('当前 Swipe 索引：' + (index+1));
}

</script>

<style scoped>
.my-swipe .van-swipe-item {
  margin-top: 3.5%;
  color: #fff;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  background-color: transparent;
}

.txt {
  color: gray;
  font-size: 12px;
  margin-top: 10px
}
img {
  width: 55px;
}
.recommend {
  width: 95%;
  height: 24em;
  border-radius: 20px;
  background: white;
  margin: 15px auto auto;
}
.recommendTop {
  --van-nav-bar-text-color: gray;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}
</style>