<template>
  <van-nav-bar left-arrow style="background: transparent;position: fixed;--van-nav-bar-arrow-size:30px;--van-nav-bar-icon-color:gray">

  </van-nav-bar>
  <div  style="background: white">
    <van-swipe class="my-swipe" height="230" @change="onChange">
      <van-swipe-item>
        <van-image
          :src="goods.image"
          height="250"
          width="380"
          />
      </van-swipe-item>
    </van-swipe>
  </div>
  <div style="height: 120px;width: 95%;margin: auto;margin-top: 15px;background: white;border-radius: 20px">
    <div style="height: 15px;"/>
    <div  style="margin-left: 19px;font-size: 20px;display: inline-block;width: 90%;word-break: break-all">￥{{goods.price}}</div>
    <span style="margin-left: 19px;font-size: 20px;display: inline-block;width: 90%;word-break: break-all">
      {{goods.commodityName}}
    </span>
  </div>
  <div style="height: 110px;width: 95%;margin: auto;margin-top: 15px;background: white;border-radius: 20px">
    <van-cell-group inset>
      <van-cell  is-link>
        <template #title>
          <span style="position: absolute;left: 0">已选</span>&emsp;&emsp;
          <span class="Easy" style="position: absolute;">{{goods.commodityName}}</span>
        </template>
      </van-cell>
      <van-cell is-link>
        <template #title>
          <span style="position: absolute;left: 0">送至</span>&emsp;&emsp;
          <van-icon name="passed" style="margin-right: 5px "/>
          <span style="position: absolute;">江苏 无锡 滨湖区</span>
        </template>
        <template #label>
          <span style="margin-left: 30px">现货</span>
        </template>
      </van-cell>
    </van-cell-group>
  </div>
  <div style="height: 230px;width: 95%;margin: auto;margin-top: 15px;background: white;border-radius: 20px">
    <van-image
      round
      src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/99895443_p0_master1200.jpg"
      width="50px"
      height="50px"
      style="margin: 20px"
    />
    <span style="position: absolute;top: 60%;font-weight: 500">哈哈哈</span>
    <div style="display: inline-block;height: 20px">&emsp;&emsp;终于收到我需要的宝贝了，东西很好，价美物廉，谢谢掌柜的！说实在，这是我淘宝购物来让我最满意的一次购物。无论是掌柜的态度还是对物品，我都非常满意的。掌柜态度很专业热情，有问必答，回复也很快，我问了不少问题........</div>
  </div>
  <div style="height: 620px;width: 95%;margin: auto;margin-top: 15px;background: white;border-radius: 20px">
    <div style="height: 20px"/>
    <van-image
      height="300"
      width="370"
      :src="goods.image"
    />
    <van-image
        height="300px"
        width="370"
        :src="goods.image"
    />
  </div>
  <div style="height: 20px"/>
  <van-action-bar safe-area-inset-bottom placeholder >
    <van-action-bar-icon icon="wap-home-o" text="主页" />
    <van-action-bar-icon icon="cart-o" text="购物车" />
    <van-action-bar-button type="warning" text="加入购物车" />
    <van-action-bar-button type="danger" text="立即购买" @click="()=>{$router.push('/submitOrder')}"/>
  </van-action-bar>


</template>

<script setup lang="ts">
import {useStore} from "vuex";
import {key} from '../store'
import { Toast } from 'vant';
import {getCurrentInstance, reactive} from "vue";
/*引入axios*/
const currentInstance = getCurrentInstance()
const {$http}: any = currentInstance?.appContext.config.globalProperties
const onChange = (index: string) => Toast('当前 Swipe 索引：' + (index+1));
const store = useStore(key)
console.log(store.state.HomeLunBoId)

const goods = reactive({
  image:'',
  price:'',
  detail:'',
  commodityName:''
})

const openDetails = () => {
  $http.get("http://localhost:8082/home/skip/"+store.state.HomeLunBoId).then((res:any)=>{
    goods.commodityName = res.data.data.commodityName
    goods.image = res.data.data.image
    goods.detail = res.data.data.detail
    goods.price = res.data.data.price
    console.log(res.data)
  })
}
openDetails()

</script>

<style scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: rgb(0 0 0 / 0%);
}
.Easy {
  background: linear-gradient(to right,rgb(43, 43, 43), rgb(60, 63, 65), rgb(0 0 0 / 0%));
  -webkit-background-clip: text;
  color: transparent;
}
</style>
