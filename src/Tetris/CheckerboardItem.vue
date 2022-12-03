<template>
  <div class="checkerboardItem">

  </div>
</template>

<script setup>
import {ref, toRefs} from "vue";
import {watchEffect} from "@vue/runtime-core";

const props = defineProps({
  checkerboardItemInfo: Array,
});
let [x, y, num] = toRefs(props.checkerboardItemInfo);
let color = ref('');
watchEffect(() => {
  switch (num.value) {
    case 0:
      color.value = 'transparent'
      break;
    case 1:
      color.value = 'red'
      break;
    case 2:
      color.value = 'green'
      break;
  }
})


</script>

<style lang="less" scoped>
.checkerboardItem {
  width: 20px;
  height: 20px;
  border: 1px solid #f2f3f5;
  background: v-bind(color);
}
</style>
