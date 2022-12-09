<template>
  <van-nav-bar left-arrow style="background: transparent;position: fixed;--van-nav-bar-arrow-size:30px;--van-nav-bar-icon-color:white">

  </van-nav-bar>
  <div  style="background: white">
    <van-swipe class="my-swipe" height="230" @change="onChange">
      <van-swipe-item v-for="i in 4" :key="i">
        <van-image
          src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/14753/99895443_p0_master1200.jpg"
          />
      </van-swipe-item>
    </van-swipe>
  </div>
  <div style="height: 230px;width: 95%;margin: auto;margin-top: 15px;background: white;border-radius: 20px">

  </div>
  <div style="height: 110px;width: 95%;margin: auto;margin-top: 15px;background: white;border-radius: 20px">
    <van-cell-group inset>
      <van-cell  is-link>
        <template #title>
          <span style="position: absolute;left: 0">已选</span>&emsp;&emsp;
          <span class="Easy" style="position: absolute;">全款购买:MateBook X Pro 12代酷睿</span>
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

  </div>
  <div style="height: 830px;width: 95%;margin: auto;margin-top: 15px;background: white;border-radius: 20px">

  </div>
  <div style="height: 20px"/>
  <van-action-bar safe-area-inset-bottom placeholder >
    <van-action-bar-icon icon="wap-home-o" text="主页" />
    <van-action-bar-icon icon="cart-o" text="购物车" />
    <van-action-bar-button type="warning" text="加入购物车" />
    <van-action-bar-button type="danger" text="立即购买" />
  </van-action-bar>
</template>

<script setup lang="ts">
import { Toast } from 'vant';
const onChange = (index: string) => Toast('当前 Swipe 索引：' + (index+1));
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
