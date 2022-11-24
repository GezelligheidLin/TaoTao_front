<template>
  <div style="width: 100%;height: 185px;background: linear-gradient(to right top, #fb4372, #fc4264,#fc4359,#f94851,#f64943,#fc463c);">
    <van-icon name="setting-o" size="2em" color="white" style="position: absolute;right: 8%;top: 3%"/>
    <div style="height: 20px"/>
    <van-card
        style="background: transparent;"
    >
      <template #tags>
        <div style="position: absolute;top:65%;left: -8%">
          <van-tag text-color="#ffb9ca" round style="margin-right: 10px;background: #df3c5a">普通用户</van-tag>
          <van-tag text-color="#ffb9ca" round style="border-radius: 20px;background: #df3c5a">收货地址</van-tag>
        </div>
      </template>
      <template #thumb>
        <van-image src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/99895443_p0_master1200.jpg" width="65px" height="65px" radius="100%"></van-image>
      </template>
      <template #title>
        <div style="font-size: 20px;color: white;position: absolute;top:-16%;left: -8%">竺九</div>
      </template>
      <template #desc>
        <div style="font-size: 10px;color: #ffd0df;position: absolute;top:26%;left: -8%">账号名 : mkj2721183250</div>
      </template>
    </van-card>
  </div>
  <div style="width: 90%;height: 140px;background: white;position: absolute;left: 4.8%;top: 17%;border-radius: 20px">
    <div style="margin-top: 18px">
      <span style="font-size: 17px;font-weight: 600;position: absolute;left: 5%">我的订单</span>
      <span style="color: #797979;position: absolute;right: 7%">全部订单 ></span>
    </div>
    <van-grid :column-num="3" :border="false" style="margin-top: 45px">
      <van-grid-item icon="pending-payment" text="待付款" />
      <van-grid-item icon="tosend" text="待收货" />
      <van-grid-item icon="chat-o" text="待评价" />
    </van-grid>
  </div>

</template>

<script lang="ts">
export default {
  name: "mine"
}
</script>

<style scoped>

</style>