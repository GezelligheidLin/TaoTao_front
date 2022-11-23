<template>
  <div style="font-size: 25px;font-weight: 700;padding: 15px;">购物车</div>
<div v-for="(commodity,index) in commoditys" :key="index" style="margin-bottom: 5px">
  <van-card
      :price="commodity.price"
      :desc="commodity.cif"
      :title="commodity.name"

  >
    <template #num>
      <van-checkbox v-model="commodity.checked" @click="commodityCheckboxChange(commodity)" style="position: absolute;top:20px"/>
      <span style="font-size: 16px;">x{{commodity.num}}</span>
    </template>
    <template #thumb>
      <van-image :src="commodity.image" height="85px" style=""></van-image>
    </template>
    <template #tags>
      <van-tag plain type="danger">{{commodity.type}}</van-tag>
    </template>
    <template #footer>
      <div style="height: 35px;">
      <van-button size="mini" style="width: 30px;height: 30px;" @click="numChangeReduce(commodity)">-</van-button>
      <van-button size="mini" style="width: 30px;height: 30px;" @click="numChangeAdd(commodity)">+</van-button>
      </div>
    </template>
  </van-card>
</div>
  <van-submit-bar :safe-area-inset-bottom="false" :price=parseFloat(linPrice) button-text="提交订单" @submit="onSubmit" style="margin-bottom: 50px">
    <van-checkbox v-model="checked" @click="checkboxChange(commoditys)">全选</van-checkbox>
  </van-submit-bar>
</template>


<script setup lang="ts">

import {reactive, ref} from "vue";
import {Toast} from "vant";

const checked = ref(false);
const linPrice = ref('0')

const commoditys = reactive([{name:'',image:'',cif:'',type:'',price:0.0,num:1,checked}]);
const all = reactive({commoditys,price:0});

const onSubmit = () => Toast('点击按钮');
const numChangeReduce = (c:any) => {
  if(c.num == 1) return;
  else {
    c.num--;
    if(c.checked===true) {
      all.price=all.price-c.price;
      linPrice.value=linPriceCut(linPrice.value,all.price);
    }
  }
}
const numChangeAdd = (c:any) => {
  c.num++;
  if(c.checked===true) {
    all.price+=c.price;
    linPrice.value=linPriceCut(linPrice.value,all.price);
  }
}
const upData = () => {
  commoditys.length=0;
  commoditys.push({name:'小米',image:'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/99895443_p0_master1200.jpg',cif:'为发烧而生',type:'手机',price:2999.66,num:1,checked: false},
                  {name:'华为',image:'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/102916544_p0_master1200.jpg',cif:'华为改造世界',type: '手机',price: 5999.6,num:1,checked: false},
                  {name:'小米',image:'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/99895443_p0_master1200.jpg',cif:'为发烧而生',type:'手机',price:2999,num:1,checked: false},
                  {name:'华为',image:'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/102916544_p0_master1200.jpg',cif:'华为改造世界',type: '手机',price: 5999,num:1,checked: false},
                  {name:'小米',image:'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/99895443_p0_master1200.jpg',cif:'为发烧而生',type:'手机',price:2999,num:1,checked: false},
                  {name:'华为',image:'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/102916544_p0_master1200.jpg',cif:'华为改造世界',type: '手机',price: 5999,num:1,checked: false},
                  {name:'小米',image:'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/99895443_p0_master1200.jpg',cif:'为发烧而生',type:'手机',price:2999,num:1,checked: false},
                  {name:'华为',image:'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/102916544_p0_master1200.jpg',cif:'华为改造世界',type: '手机',price: 5999,num:1,checked: false},
                  {name:'小米',image:'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/99895443_p0_master1200.jpg',cif:'为发烧而生',type:'手机',price:2999,num:1,checked: false},
                  {name:'华为',image:'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/102916544_p0_master1200.jpg',cif:'华为改造世界',type: '手机',price: 5999,num:1,checked: false},
                  {name:'小米',image:'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/99895443_p0_master1200.jpg',cif:'为发烧而生',type:'手机',price:2999,num:1,checked: false},
                  {name:'华为',image:'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/102916544_p0_master1200.jpg',cif:'华为改造世界',type: '手机',price: 5999,num:1,checked: false},
                  {name:'小米',image:'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/99895443_p0_master1200.jpg',cif:'为发烧而生',type:'手机',price:2999,num:1,checked: false},
                  {name:'华为',image:'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/102916544_p0_master1200.jpg',cif:'华为改造世界',type: '手机',price: 5999,num:1,checked: false},
                  {name:'小米',image:'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/99895443_p0_master1200.jpg',cif:'为发烧而生',type:'手机',price:2999,num:1,checked: false},
                  {name:'华为',image:'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/102916544_p0_master1200.jpg',cif:'华为改造世界',type: '手机',price: 5999,num:1,checked: false},
                  {name:'小米',image:'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/99895443_p0_master1200.jpg',cif:'为发烧而生',type:'手机',price:2999,num:1,checked: false},
                  {name:'华为',image:'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/102916544_p0_master1200.jpg',cif:'华为改造世界',type: '手机',price: 5999,num:1,checked: false},
                  {name:'小米',image:'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/99895443_p0_master1200.jpg',cif:'为发烧而生',type:'手机',price:2999,num:1,checked: false},
                  {name:'华为',image:'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/102916544_p0_master1200.jpg',cif:'华为改造世界',type: '手机',price: 5999,num:1,checked: false},
                  {name:'小米',image:'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/99895443_p0_master1200.jpg',cif:'为发烧而生',type:'手机',price:2999,num:1,checked: false},
                  {name:'华为',image:'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/102916544_p0_master1200.jpg',cif:'华为改造世界',type: '手机',price: 5999,num:1,checked: false}
  )
}
const commodityCheckboxChange = (commodity:any) => {
  if(commodity.checked===true) {
    all.price += commodity.num*commodity.price;
    linPrice.value=linPriceCut(linPrice.value,all.price);
  }else {
    all.price =all.price-commodity.num*commodity.price;
    linPrice.value=linPriceCut(linPrice.value,all.price);
  }
}
const checkboxChange = (commoditys:any) => {
  console.log(checked.value);
  if(checked.value===true){
    all.price=0;
    for(let i=0;i<commoditys.length;i++){
      commoditys[i].checked=true;
      all.price+=commoditys[i].num*commoditys[i].price;
      all.price = parseFloat(all.price.toFixed(2));
    }
    linPrice.value=linPriceCut(linPrice.value,all.price);

  }else {
    for(let i=0;i<commoditys.length;i++){
      commoditys[i].checked=false;
      linPrice.value = '000'
      all.price=0;
    }
  }
}

const linPriceCut = (linPrice:string,all:number) => {
  let reg = /^([0-9]*[.0-9])$/ ;
  let j='';
  if(reg.test(all + '')) {
    linPrice = all + '00';
  }else{
    linPrice = all+'';
    if((linPrice.length-linPrice.lastIndexOf('.'))===2) {
      for(let i=0;i<linPrice.lastIndexOf('.');i++){
        j=j+linPrice[i];
      }
      j+=linPrice[linPrice.length-1];
      linPrice = j + '0';
      console.log(linPrice)
    }else{
      for(let i=0;i<linPrice.lastIndexOf('.');i++){
        j=j+linPrice[i];
      }
      j+=linPrice[linPrice.length-2]+linPrice[linPrice.length-1];
      linPrice = j;
    }
  }
  return linPrice;
};

upData();

</script>

<style scoped>

</style>