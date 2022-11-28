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
    <van-swipe-item v-for="(image,index) in topImageData" :key="index" >
      <div style="height:8em">
      <van-image
          width="90%"
          height="100%"
          :src="image.image"
          radius="5%"
      />
      </div>
    </van-swipe-item>
  </van-swipe>


  <van-grid :border="false" :column-num="5" :gutter="0" square style="width: 90%;margin: 20px auto;--van-grid-item-content-background-color: transparent">
    <van-grid-item>
      <van-image
          :src="goodsTypeData[0].image"
      />
      <span class="txt">{{goodsTypeData[0].typeName}}</span>
    </van-grid-item>
    <van-grid-item>
      <van-image
          :src="goodsTypeData[1].image"
      />
      <span class="txt">{{goodsTypeData[1].typeName}}</span>
    </van-grid-item>
    <van-grid-item>
      <van-image
          :src="goodsTypeData[2].image"
      />
      <span class="txt">{{goodsTypeData[2].typeName}}</span>
    </van-grid-item>
    <van-grid-item>
      <van-image
          :src="goodsTypeData[3].image"
      />
      <span class="txt">{{goodsTypeData[3].typeName}}</span>
    </van-grid-item>
    <van-grid-item>
      <van-image
          :src="goodsTypeData[4].image"
      />
      <span class="txt">{{goodsTypeData[4].typeName}}</span>
    </van-grid-item>
    <van-grid-item>
      <van-image
          :src="goodsTypeData[5].image"
      />
      <span class="txt">{{goodsTypeData[5].typeName}}</span>
    </van-grid-item>
    <van-grid-item>
      <van-image
          :src="goodsTypeData[6].image"
      />
      <span class="txt">{{goodsTypeData[6].typeName}}</span>
    </van-grid-item>
    <van-grid-item>
      <van-image
          :src="goodsTypeData[7].image"
      />
      <span class="txt">{{goodsTypeData[7].typeName}}</span>
    </van-grid-item>
    <van-grid-item>
      <van-image
          :src="goodsTypeData[8].image"
      />
      <span class="txt">{{goodsTypeData[8].typeName}}</span>
    </van-grid-item>
    <van-grid-item>
      <van-image
          :src="goodsTypeData[9].image"
      />
      <span class="txt">{{goodsTypeData[9].typeName}}</span>
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
      <van-swipe-item v-for="(boutique,index) in boutiqueData" :key="index">
        <van-image
            :src="boutique.image"
            width="100%"
            height="17em"
        />
      </van-swipe-item>
    </van-swipe>
    <div style="text-align: center;">￥{{recommendPrice}}</div>
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
            :src="prefectureData[0].image"
            width="160"
            height="90"
        />
        <span class="txt">{{prefectureData[0].typeName}}</span>
      </van-grid-item>
      <van-grid-item>
        <van-image
            :src="prefectureData[1].image"
            width="160"
            height="90"
        />
        <span class="txt">{{prefectureData[1].typeName}}</span>
      </van-grid-item>
      <van-grid-item>
        <van-image
            :src="prefectureData[2].image"
            width="160"
            height="90"
        />
        <span class="txt">{{prefectureData[2].typeName}}</span>
      </van-grid-item>
      <van-grid-item>
        <van-image
            :src="prefectureData[3].image"
            width="160"
            height="90"
        />
        <span class="txt">{{prefectureData[3].typeName}}</span>
      </van-grid-item>
    </van-grid>
  </div>


  <div class="GuessYouLikeLeft">
    <div style="font-size: 15px;color: black;font-weight:900;margin-left: 4px;margin-bottom: 10px">猜你喜欢</div>
    <van-grid :border="false" :column-num="2" style="--van-grid-item-content-background-color: transparent">
      <van-grid-item v-for="(GuessYouLike,index) in GuessYouLikeData" :key="index">
        <div class="GuessYouLikeTagsLeft">
          <van-image
              :src=GuessYouLike.image
              radius="20px"
              style="margin-top: 20px"
          />
          <div style="margin-top: 35px;margin-left: 10px;margin-right: 15px;">{{GuessYouLike.goodsName}}</div>
          <div style="font-size: 12px;color: gray;margin-top: 2px;margin-left: 10px;margin-right: 15px;">{{GuessYouLike.goodsIntroduction}}</div>
          <div style="font-size: 19px;color: red;margin-top: 10px;margin-left: 10px;margin-right: 15px;">￥{{GuessYouLike.price}}</div>
        </div>
      </van-grid-item>
    </van-grid>
    <div style="text-align: center;margin-top: 10px;color: gray">去分类里瞧瞧吧</div>
  </div>
</template>



<script setup lang="ts">
import {Toast} from 'vant';
import {getCurrentInstance, reactive, ref} from 'vue';
const currentInstance = getCurrentInstance()
const { $http }:any = currentInstance?.appContext.config.globalProperties

const value = ref('');

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

/*顶部滚动图片url*/
const topImageData = reactive([
  {goodsId:'0',image:'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/99895443_p0_master1200.jpg'},
  {goodsId: '1',image:'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/102916544_p0_master1200.jpg'},
  {goodsId: '2',image: 'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/98721406_p0_master1200.jpg'},
  {goodsId: '3',image: 'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/99663718_p0_master1200.jpg'}
])

/*商品类型数据*/
const goodsTypeData = reactive([
  {image:'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/99895443_p0_master1200.jpg',typeName:'智慧办公'},
  {image: 'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/102916544_p0_master1200.jpg',typeName: '智能家居'},
  {image: 'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/98721406_p0_master1200.jpg',typeName: '华为手机'},
  {image: 'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/99663718_p0_master1200.jpg',typeName: '影音娱乐'},
  {image: 'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/102916544_p0_master1200.jpg',typeName: '运动健康'},
  {image:'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/99895443_p0_master1200.jpg',typeName:'鸿蒙智联'},
  {image: 'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/102916544_p0_master1200.jpg',typeName: '华为智选'},
  {image: 'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/98721406_p0_master1200.jpg',typeName: 'AITO汽车'},
  {image: 'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/99663718_p0_master1200.jpg',typeName: '秒杀'},
  {image: 'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/102916544_p0_master1200.jpg',typeName: '华为配件'}
]);
/*精品商品数据*/
const boutiqueData = reactive([
  {goodsId: '0',image: 'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/99895443_p0_master1200.jpg',price:30},
  {goodsId: '1',image: 'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/102916544_p0_master1200.jpg',price: 40},
  {goodsId: '2',image: 'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/98721406_p0_master1200.jpg',price: 50},
  {goodsId: '3',image: 'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/99663718_p0_master1200.jpg',price: 60}
]);
/*专区数据*/
const prefectureData = reactive([
  {goodsId: '0',image: 'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/99895443_p0_master1200.jpg',typeName:'智慧办公'},
  {goodsId: '1',image: 'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/102916544_p0_master1200.jpg',typeName: '智能家居'},
  {goodsId: '2',image: 'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/98721406_p0_master1200.jpg',typeName: '华为手机'},
  {goodsId: '3',image: 'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/99663718_p0_master1200.jpg',typeName: '影音娱乐'}
]);
/*猜你喜欢数据*/
const GuessYouLikeData = reactive([
  {goodsId: '0',image: 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',goodsName: '巴拉巴拉巴拉巴拉巴拉巴拉',goodsIntroduction: '巴拉巴拉巴拉巴拉',price: 9999},
  {goodsId: '1',image: 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg',goodsName: '欧拉欧拉欧拉欧拉欧拉欧拉',goodsIntroduction: '欧拉欧拉欧拉欧拉',price: 8899},
  {goodsId: '2',image: 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',goodsName: '巴拉巴拉巴拉巴拉巴拉巴拉',goodsIntroduction: '巴拉巴拉巴拉巴拉',price: 9999},
  {goodsId: '3',image: 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg',goodsName: '欧拉欧拉欧拉欧拉欧拉欧拉',goodsIntroduction: '欧拉欧拉欧拉欧拉',price: 8899},
]);


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
/*甄选推荐的价钱*/
const recommendPrice = ref(boutiqueData[0].price);
/*滚动图片改变时的事件*/
const onChange = (index:number) => {
  recommendPrice.value=boutiqueData[index].price;
  //Toast('当前 Swipe 索引：' + (index+1));
}

/*axios渲染数据*/
const openHome = () =>{
  $http.get('http://rap2api.taobao.org/app/mock/305438/Home').then((res:any)=>{
    topImageData.length=0;
    for(let i=0;i<res.data.topImageData.length;i++)
    topImageData.push(res.data.topImageData[i]);

    goodsTypeData.length=0;
    for(let i=0;i<res.data.goodsTypeData.length;i++)
    goodsTypeData.push(res.data.goodsTypeData[i]);

    boutiqueData.length=0;
    for(let i=0;i<res.data.boutiqueData.length;i++)
    boutiqueData.push(res.data.boutiqueData[i]);

    prefectureData.length=0;
    for(let i=0;i<res.data.prefectureData.length;i++)
    prefectureData.push(res.data.prefectureData[i]);

    GuessYouLikeData.length=0;
    for(let i=0;i<res.data.GuessYouLikeData.length;i++)
    GuessYouLikeData.push(res.data.GuessYouLikeData[i]);
  })
};
openHome();

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
  height: 345px;
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