<template>
  <div style="height: 4.5em">
    <van-icon
        size="30px"
        name="https://wxu-school.oss-cn-shanghai.aliyuncs.com/wxu/back.png"
        @click="jumpMine"
        style="position: absolute;top:2%;left:5%"
    />
    <div style="font-size: 20px;width: 22%;position: absolute;top:1.9%;left: 12%;" @click="jumpMine">
      我的订单
    </div>
  </div>
  <van-tabs v-model:active="active" background="transparent" animated swipeable>
    <van-tab title="全部" name="a">
      <all-order/>
    </van-tab>
    <!--    <van-tab title="待付款" name="b"><pending-payment></pending-payment></van-tab>-->
    <van-tab title="待收货" name="c">
      <to-be-received/>
    </van-tab>
    <van-tab title="已完成" name="c">
      <completed/>
    </van-tab>
  </van-tabs>
</template>

<script setup lang="ts">
import {ref} from "vue";
import AllOrder from "./orderPages/allOrder.vue";
import PendingPayment from "./orderPages/pendingPayment.vue";
import ToBeReceived from "./orderPages/toBeReceived.vue";
import Completed from "./orderPages/completed.vue";
/*引入路由*/
import {useRoute, useRouter} from "vue-router";

/*路由变量*/
const route = useRoute();
const router = useRouter();

const active = ref(0);
/*跳转回我的*/
const jumpMine = () => {
  router.push('/mine');
}

</script>

<style scoped>

</style>
