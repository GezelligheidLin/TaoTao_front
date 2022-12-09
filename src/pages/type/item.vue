<template>
  <div>
    <span class="lt" @click="enter">&lt;</span>
    <span class="car" @click="enter"><van-icon name="shopping-cart-o" /></span>
    <form action="/">
      <van-search
          v-model="value"
          placeholder="请输入搜索关键词"
          @search="onSearch"
          @cancel="onCancel"
          style="background: transparent;"
      />
    </form>

    <van-image :src="goods.ima" width="100%" height="100%"/>
  </div>
  <div class="title_piace" >
    <div style="padding-top: 3px;margin-left: 20px;font-size: 30px;color: red">{{goods.num}}</div>
    <div style="padding-top: 3px;margin-left: 20px;font-size: 17px;font-weight: bolder;">{{goods.text}}</div>
  </div>
  <div class="title_select">
    <div style="padding-top: 10px;">
        <span style="padding-top: 3px;margin-left: 15px;font-size: 15px;">

          <van-cell is-link @click="showPopup" style="font-size: 20px;font-weight: bolder;">选择样式</van-cell>
          <van-popup v-model:show="show" position="bottom" :style="{ height: '30%' }" />
        </span>

      <div style="margin-left: 30px;">
        <span><img src="./img/1.webp" alt="" width="50px" height="50px"></span>
        <span><img src="./img/1.webp" alt="" width="50px" height="50px"></span>
        <span><img src="./img/1.webp" alt="" width="50px" height="50px"></span>
        <span><img src="./img/1.webp" alt="" width="50px" height="50px"></span>
        <span><img src="./img/1.webp" alt="" width="50px" height="50px"></span>
      </div>
    </div>
    <div @click="enter_address" style="padding-top: 10px;">
      <span style="padding-top: 3px;margin-left: 15px;font-size: 15px;color: rgba(128, 128, 128, .5);">发货</span>
      <span style="padding-top: 3px;margin-left: 15px;font-size: 15px;">无锡太湖     |     快递免运费</span>
      <span style="float:right;margin-right: 10px;">&gt;</span>
      <div style="margin-left: 15px;color: rgba(128, 128, 128, .5);">配送至:(地址)</div>
    </div>
  </div>
  <div class="title_evaluate">
    <div style="padding-top:20px;margin-left:15px">
      <span >宝贝评价({{goods.data}})</span>
      <span style="float:right;margin-right: 10px;color: red;">查看全部  &gt;</span>
    </div>
    <div style="padding-top:20px;margin-left:15px">
      头像
      用户名
    </div>
    <div style="padding-top:20px;margin-left:15px">积极沟通确实是解决问题的好方式，有理智的人大多都能心平气和的与你谈论，但口舌要用在用心的人身上，不是所有事情都需要解释，解释太多别人就会认为你好欺负，懂我的人无需解释，不懂我的人解释也没用。沟通是一种智慧，明辨可以给予沟通的人更是一种本事[热词系列_三连]</div>
    <div>图片</div>
  </div>

  <van-sticky :offset-bottom="50" position="bottom" style="float:right">

    <van-button type="primary">加入购物车</van-button>
    <van-button type="primary">立即购买</van-button>

  </van-sticky>

</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import {Notify, Toast} from 'vant';

import { createApp } from 'vue';
// import { Dialog } from 'vant';
import {useRoute,useRouter} from "vue-router";

/*路由变量*/
const route=useRoute();
const router=useRouter();
// Dialog({ message: '提示' });
const active = ref(0);
const value = ref('');
/*搜索之后的事件*/
const onSearch = (val:object) => Toast(val);
/*取消搜索的事件*/
const onCancel = () => Toast('取消');

const enter = () => {
  router.push('/Type/TypeLife')
};
const enter_address = () => {
  router.push('/address')
};

const show = ref(false);
const showPopup = () => {
  show.value = true;
};


const goods = reactive({
  id:'',
  ima:'',
  num: '',
  text: '',
  data: 0
});

console.log(route.params.Life_goods+'');

//  const open = () => {
//   console.log(user)
//   goods.id= user.id;
//   goods.ima = user.ima;
//   goods.num = user.num;
//   goods.text = user.text;
//   goods.data = user.data;
//  };
//  open();


</script>

<style scoped>
.lt{
  margin-top: 10px;

  display: block;
  float: left;
  font-size: 30px;
}
.car{
  margin-top: 10px;
  display: block;
  float:right;
  font-size: 30px;
}
.title_piace{
  height: 100px;
  background-color: white;
  margin-top: 10px;
  margin-left: 5px;
  margin-right: 5px;
  border-radius: 30px;
}
.title_select{
  height: 180px;
  background-color: white;
  margin-top: 10px;
  margin-left: 5px;
  margin-right: 5px;
  border-radius: 30px;
}
.title_evaluate{
  height: 300px;
  background-color: white;
  margin-top: 10px;
  margin-left: 5px;
  margin-right: 5px;
  border-radius: 30px;
}
</style>
