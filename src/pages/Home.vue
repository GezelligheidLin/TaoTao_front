<template>
  <van-nav-bar
      title="淘了个淘"
      fixed
      >
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
      <div style="height:8em">
      <van-image
          width="90%"
          height="100%"
          :src="image"
          radius="5%"
      />
      </div>
    </van-swipe-item>
  </van-swipe>


  <van-grid :border="false" :column-num="5" :gutter="0" square style="width: 90%;margin: 20px auto;--van-grid-item-content-background-color: transparent">
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
        class="recommendTop"
        style="position: inherit">
      <template #left>
        <span style="font-size: 15px;color: black;font-weight:900;" @click="">甄选推荐</span>
      </template>
    </van-nav-bar>
    <van-swipe  :autoplay="4800"  @change="onChange">
      <van-swipe-item v-for="image in images" :key="image">
        <van-image
            :src="image"
            width="100%"
            height="17em"
        />
      </van-swipe-item>
    </van-swipe>
    <div style="text-align: center;">{{recommendPrice}}</div>
  </div>

  <div class="prefecture">
    <van-nav-bar
        right-text="更多 >"
        @click-right=""
        class="recommendTop"
        style="position: inherit">
      <template #left>
        <span style="font-size: 15px;color: black;font-weight:900;" @click="">xx专区</span>
      </template>
    </van-nav-bar>
    <van-grid :column-num="2" :gutter="0" :border="false" style="margin-top: -16px;background: transparent">
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
    </van-grid>
  </div>


  <div class="GuessYouLikeLeft">
    <div style="font-size: 15px;color: black;font-weight:900;margin-left: 4px;margin-bottom: 10px">猜你喜欢</div>
    <van-grid :border="false" :column-num="2" style="--van-grid-item-content-background-color: transparent">
      <van-grid-item>
        <div class="GuessYouLikeTagsLeft">
          <van-image
              src="https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg"
              radius="20px"
              style="margin-top: 20px"
          />
          <div style="margin-top: 35px;margin-left: 10px;margin-right: 15px;">{{goods[0].goodsName}}</div>
          <div style="font-size: 12px;color: gray;margin-top: 2px;margin-left: 10px;margin-right: 15px;">{{goods[0].goodsIntroduction}}</div>
          <div style="font-size: 19px;color: red;margin-top: 10px;margin-left: 10px;margin-right: 15px;">￥{{goods[0].goodsPrice}}</div>
        </div>
      </van-grid-item>
      <van-grid-item>
        <div class="GuessYouLikeTagsLeft">
          <van-image
              src="https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg"
              radius="20px"
              style="margin-top: 20px"
          />
          <div style="margin-top: 35px;margin-left: 10px;margin-right: 15px;">{{goods[1].goodsName}}</div>
          <div style="font-size: 12px;color: gray;margin-top: 2px;margin-left: 10px;margin-right: 15px;">{{goods[1].goodsIntroduction}}</div>
          <div style="font-size: 19px;color: red;margin-top: 10px;margin-left: 10px;margin-right: 15px;">￥{{goods[1].goodsPrice}}</div>
        </div>
      </van-grid-item>
      <van-grid-item>
        <div class="GuessYouLikeTagsLeft">
          <van-image
              src="https://fastly.jsdelivr.net/npm/@vant/assets/apple-3.jpeg"
              radius="20px"
              style="margin-top: 20px"
          />
          <div style="margin-top: 35px;margin-left: 10px;margin-right: 15px;">{{goods[0].goodsName}}</div>
          <div style="font-size: 12px;color: gray;margin-top: 2px;margin-left: 10px;margin-right: 15px;">{{goods[0].goodsIntroduction}}</div>
          <div style="font-size: 19px;color: red;margin-top: 10px;margin-left: 10px;margin-right: 15px;">￥{{goods[0].goodsPrice}}</div>
        </div>
      </van-grid-item>
      <van-grid-item>
        <div class="GuessYouLikeTagsLeft">
          <van-image
              src="https://fastly.jsdelivr.net/npm/@vant/assets/apple-3.jpeg"
              radius="20px"
              style="margin-top: 20px"
          />
          <div style="margin-top: 35px;margin-left: 10px;margin-right: 15px;">{{goods[1].goodsName}}</div>
          <div style="font-size: 12px;color: gray;margin-top: 2px;margin-left: 10px;margin-right: 15px;">{{goods[1].goodsIntroduction}}</div>
          <div style="font-size: 19px;color: red;margin-top: 10px;margin-left: 10px;margin-right: 15px;">￥{{goods[1].goodsPrice}}</div>
        </div>
      </van-grid-item>
    </van-grid>
    <div style="text-align: center;margin-top: 10px;color: gray">去分类里瞧瞧吧</div>
  </div>
</template>



<script setup lang="ts">
import {Toast} from 'vant';
import { ref } from 'vue';

const value = ref('');
/*甄选推荐的价钱*/
const recommendPrice = ref('￥30');
/*心情标语*/
const mood = ref([
    '恭喜你，发现了隐藏彩蛋喔，我喜欢你♥~♥',
    '是还想听嘛，今天月色真美呢~',
    '点我三下啦，看来你也喜欢我呢，好巧吖',
    '就算喜欢我，也不用一直想我吧~',
    '不点啦，点这么多下很累了吧，看会自己喜欢的淘品吧~'
]);
/*心情点击次数*/
const moodCount = ref(0);
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
/*商品信息描述列表*/
const goods = [
  {
    goodsName:'巴拉巴拉巴拉巴拉巴拉巴拉',
    goodsIntroduction:'巴拉巴拉巴拉巴拉',
    goodsPrice:'9999'
  },
  {
    goodsName:'欧拉欧拉欧拉欧拉欧拉欧拉',
    goodsIntroduction:'欧拉欧拉欧拉欧拉',
    goodsPrice:'8899'
  }
];

/*顶部标签栏右部点击事件*/
const onClickRight = () => {
  if(moodCount.value>4) moodCount.value=0;
  Toast(mood.value[moodCount.value]);
  moodCount.value++;
}

/*搜索之后的事件*/
const onSearch = (val:object) => Toast(val);
/*取消搜索的事件*/
const onCancel = () => Toast('取消');
/*顶部标签栏左部点击事件*/
const toNotify = () => Toast('淘了个淘,我们可是专业的！');
/*滚动图片改变时的事件*/
const onChange = (index:number) => {
  if(index===0) recommendPrice.value='￥30';
  else if(index===1) recommendPrice.value='￥40';
  else if(index===2) recommendPrice.value='￥50';
  else recommendPrice.value='￥60';
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
  width: 90%;
  height: 22em;
  border-radius: 20px;
  background: white;
  margin: 15px auto;
}
.recommendTop {
  --van-nav-bar-text-color: gray;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

.prefecture {
  width: 90%;
  height: 385px;
  border-radius: 20px;
  background: white;
  margin: 15px auto auto;
}

.GuessYouLikeLeft {
  width: 90%;
  margin: 20px;
  height: 740px;
}

.GuessYouLikeRight {
  width: 90%;
  margin: 20px;
}

.GuessYouLikeTagsLeft {
  border-radius: 20px;
  background: white;
  width: 160px;
  height: 300px;
}
</style>