<template>
  <div style="height: 15px"/>
  <div style="font-size: 25px;font-weight: 700;width: 80px;display: inline;margin-left: 24px">购物车</div>
  <div v-if="bottomChecked===false" style="display: inline;float: right;margin-right: 25px;margin-top: 6px;color: gray"
       @click="edit">编辑
  </div>
  <div v-if="bottomChecked===true" style="display: inline;float: right;margin-right: 25px;margin-top: 6px;color: gray"
       @click="finish">完成
  </div>
  <div style="height: 15px"/>
  <div style="width: 90%;margin: auto;border-radius: 20px;background-color: #f7f8fa;">
    <div style="height: 20px"/>
    <div v-for="(commodity,index) in commoditys" :key="index" style="margin-bottom: 5px">
      <van-card
          :price="commodity.price"
          :desc="commodity.description"
          :title="commodity.commodityName"
      >
        <template #num>
          <van-checkbox v-model="commodity.checked" @click="commodityCheckboxChange(commodity)"
                        style="position: absolute;top:20px;right: 4px"/>
        </template>
        <template #thumb>
          <van-image :src="commodity.image" height="85px" style=""></van-image>
        </template>
        <template #tags>
          <van-tag plain type="danger">{{ commodity.commodityType }}</van-tag>
        </template>
        <template #footer>
          <div style="height: 35px;">
            <van-button size="mini" style="width: 30px;height: 30px;" @click="numChangeReduce(commodity)">-</van-button>
            <span
                style="position: absolute;top:71.8%;right: 12.6%;font-size: 15px;width: 40px;text-align: center;">{{ commodity.quantity }}</span>
            <van-button size="mini" style="width: 30px;height: 30px;margin-left: 40px" @click="numChangeAdd(commodity)">
              +
            </van-button>
          </div>
        </template>
      </van-card>
    </div>
    <van-submit-bar v-if="bottomChecked===false" :safe-area-inset-bottom="false" :price=parseFloat(linPrice)
                    button-text="提交订单" @submit="onSubmit" style="margin-bottom: 50px">
      <van-checkbox v-model="checked" @click="checkboxChange(commoditys)">全选</van-checkbox>
    </van-submit-bar>
    <van-submit-bar v-if="bottomChecked===true" button-type="warning" :safe-area-inset-bottom="false" button-text="删除"
                    @submit="deleteCommodity" style="margin-bottom: 50px">
      <van-checkbox v-model="checked" style="position: absolute;left: 16px" @click="checkboxChange(commoditys)">全选
      </van-checkbox>
    </van-submit-bar>
    <div style="height: 50px"></div>
  </div>
</template>


<script setup lang="ts">

import {getCurrentInstance, reactive, ref} from "vue";
import {Toast} from "vant";
import {useStore} from "vuex";
import {key} from '../store'
const store = useStore(key)
/*调用axios*/
const currentInstance = getCurrentInstance()
const {$http}: any = currentInstance?.appContext.config.globalProperties

/*定义点击编辑后底部变换状态*/
const bottomChecked = ref(false);
/*定义复选框状态并初始化*/
const checked = ref(false);
/*定义零时商品价格并初始化*/
const linPrice = ref('0')
/*定义商品数组对象*/
const commoditys = reactive([
  {
    commodityName: '小米',
    image: 'https://wxu-school.oss-cn-shanghai.aliyuncs.com/wxu/user.png',
    description: '为发烧而生',
    commodityType: '手机',
    price: 2999.66,
    quantity: 1,
    checked: false
  },
]);
/*封装商品信息和总价格*/
const all = reactive({commoditys, price: 0});

/*点击提交订单事件axios*/
const onSubmit = () => {
  // $http.post('/',all).then((res:any)=>{
  //
  // });
  Toast.success('提交成功');
};
/*点击提交删除事件axios*/
const deleteCommodity = () => {
  // $http.post('/',all).then((res:any)=>{
  //   upData();
  // });
  Toast.success('删除成功');
}
/*点击+按钮后的事件*/
const numChangeReduce = (c: any) => {
  if (c.quantity == 1) return;
  else {
    c.quantity--;
    if (c.checked === true) {
      all.price = all.price - c.price;
      linPrice.value = linPriceCut(linPrice.value, all.price);
    }
  }
}
/*点击-按钮后的事件*/
const numChangeAdd = (c: any) => {
  c.quantity++;
  if (c.checked === true) {
    all.price += c.price;
    linPrice.value = linPriceCut(linPrice.value, all.price);
  }
};
/*点击编辑的事件*/
const edit = () => {
  bottomChecked.value = true;
};
/*点击完成后的事件*/
const finish = () => {
  bottomChecked.value = false;
};
/*每个购物车商品后的复选框点击后的事件*/
const commodityCheckboxChange = (commodity: any) => {
  if (commodity.checked === true) {
    all.price += commodity.quantity * commodity.price;
    linPrice.value = linPriceCut(linPrice.value, all.price);
  } else {
    all.price = all.price - commodity.quantity * commodity.price;
    linPrice.value = linPriceCut(linPrice.value, all.price);
  }
};
/*全选复选框点击事件*/
const checkboxChange = (commoditys: any) => {
  if (checked.value === true) {
    all.price = 0;
    for (let i = 0; i < commoditys.length; i++) {
      commoditys[i].checked = true;
      all.price += commoditys[i].quantity * commoditys[i].price;
      all.price = parseFloat(all.price.toFixed(2));
    }
    linPrice.value = linPriceCut(linPrice.value, all.price);
  } else {
    for (let i = 0; i < commoditys.length; i++) {
      commoditys[i].checked = false;
      linPrice.value = '000';
      all.price = 0;
    }
  }
};
/*解决小数问题，对linPriceCut做加工的函数*/
const linPriceCut = (linPrice: string, all: number) => {
  let reg = /^([0-9]*[.0-9])$/;
  let j = '';
  if (reg.test(all + '')) {
    linPrice = all + '00';
  } else {
    linPrice = all + '';
    if ((linPrice.length - linPrice.lastIndexOf('.')) === 2) {
      for (let i = 0; i < linPrice.lastIndexOf('.'); i++) {
        j = j + linPrice[i];
      }
      j += linPrice[linPrice.length - 1];
      linPrice = j + '0';
    } else {
      for (let i = 0; i < linPrice.lastIndexOf('.'); i++) {
        j = j + linPrice[i];
      }
      j += linPrice[linPrice.length - 2] + linPrice[linPrice.length - 1];
      linPrice = j;
    }
  }
  return linPrice;
};
/*axios请求数据并添加*/
const upData = () => {
  $http.get('http://localhost:8082/trolley/show/'+store.state.userId).then((res: any) => {
    console.log(res.data)
    for (let i=0;i<res.data.data.goods.length;i++){
      commoditys[i].commodityName=res.data.data.goods[i].commodityName
      commoditys[i].image=res.data.data.goods[i].image
      commoditys[i].description=res.data.data.goods[i].description
      commoditys[i].commodityType=res.data.data.goods[i].commodityType
      commoditys[i].price=parseInt(res.data.data.goods[i].price)
      commoditys[i].quantity=res.data.data.goods[i].quantity
    }
  })
};
upData();

</script>

<style scoped>

</style>
