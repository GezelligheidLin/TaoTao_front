<template>
  <van-cell-group inset v-for="(i,index) in 4" :key="index" style="margin-bottom: 20px;margin-top: 10px">
    <van-cell value="已完成">
      <template #title>
        <van-icon name="user-circle-o" style="margin-right: 5px"/>
        <span class="custom-title">商家</span>
        <van-icon name="guide-o" style="margin-left: 5px"/>
      </template>
    </van-cell>
    <van-card
        num="2"
        price="299.00"
        desc="描述信息"
        title="商品标题"
        thumb="https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg"
        style="background: transparent"
    />
    <van-divider content-position="right" style="color: #f5f6f7;height: 0">^</van-divider>
    <van-cell>
      <template #title>
        <div style="float: left">
          <van-icon name="user-circle-o" style="margin-right: 5px"/>
        </div>
        <div style="float: left">
          <div style="">缪凯杰 15005263269</div>
          <div style="font-size: 3px;color: gray;">江苏无锡市滨湖区荣巷街道钱荣路68号无锡太湖学院</div>
        </div>
      </template>
    </van-cell>
    <van-cell title="">
      <template #value>
        <span>共2件商品，实付：￥229</span>
        <van-button round type="default" style="height: 20px;font-size: 10px;margin-right: 2px">删除订单</van-button>
        <van-button round type="default" style="height: 20px;font-size: 10px">查看物流</van-button>
      </template>
    </van-cell>
  </van-cell-group>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>
