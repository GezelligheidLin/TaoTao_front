<template>
  <div  style="margin: 20px" @click="$router.push('/Details')">
    <van-icon name="arrow-left" size="30"/>
    <span style="font-size: 20px">确认订单</span>
  </div>

  <div>
    <van-cell-group inset>
      <van-cell title="单元格">
        <template #title>
          <van-icon name="location-o" />
          <span>{{order.userName}} {{order.phone}}</span>
        </template>
        <template #label>
          <span>{{ order.address }}</span>
        </template>
      </van-cell>
    </van-cell-group>
  </div>

  <div style="width: 92%;border-radius: 20px;background: white;margin-left: 17px">
    <van-card
        num="1"
        :price="order.price"
        :desc="order.description"
        :title="order.commodityName"
        :thumb="order.image"
        style="border-radius: 20px;margin-top: 20px;background: white"
    />
  </div>
  <div style="margin-top: 20px">
    <van-cell-group inset>
      <van-cell title="单元格">
        <template #title>
          <span>商品总价</span>
        </template>
        <template #value>
          ￥{{order.price}}
        </template>
      </van-cell>
    </van-cell-group>
  </div>

  <div>
    <van-submit-bar safe-area-inset-bottom placeholder :price="parseFloat(linPriceCut('0',order.price))" button-text="提交订单" @submit="onSubmit" />
  </div>
</template>

<script setup lang="ts">
import {getCurrentInstance, reactive, ref} from "vue";
import {useStore} from "vuex";
import {key} from '../../../store'
import {Notify} from "vant";
/*引入axios*/
const currentInstance = getCurrentInstance()
const {$http}: any = currentInstance?.appContext.config.globalProperties
const store = useStore(key)
/*定义零时商品价格并初始化*/
const linPrice = ref('0')

const order = reactive({
  userName:'',
  phone:'',
  address:'',
  image:'',
  commodityName:'',
  description:'',
  price:'',
})

const submitOrder = reactive({
  userId:store.state.userId,
  commodityId:store.state.HomeLunBoId,
  buyQuantity:'1',
  orderCost: ''
})

const onSubmit = () => {
  $http.post("http://localhost:8082/order/save",submitOrder).then((res:any)=>{
    console.log(res.data)
    if (res.data.success){
      Notify({ type: 'success', message: res.data.data });
    }else{
      Notify({ type: 'warning', message: res.data.errorMsg });
    }
  })
}

const openSubmitOrder = () => {
  $http.get("http://localhost:8082/user/info/"+store.state.userId).then((res:any)=>{
    console.log(res.data)
    order.userName = res.data.data.userName
    order.address = res.data.data.address
    order.phone = res.data.data.phone
  })

  $http.get("http://localhost:8082/home/skip/"+store.state.HomeLunBoId).then((res:any)=>{
    order.image = res.data.data.image
    order.price = res.data.data.price
    submitOrder.orderCost = res.data.data.price
    order.description = res.data.data.description
    order.commodityName = res.data.data.commodityName
    console.log(res.data)
  })
}
openSubmitOrder()



/*解决小数问题，对linPriceCut做加工的函数*/
const linPriceCut = (linPrice: string, all: any) => {
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
</script>

<style scoped>

</style>
