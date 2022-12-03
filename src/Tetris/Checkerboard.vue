<template>
  <div class="checkerboard">
    <CheckerboardItem v-for="(item, i) in checkerboardInfo" :key="i+'aaa'" :checkerboardItemInfo="item"/>
  </div>
</template>

<script setup>
import CheckerboardItem from "./CheckerboardItem.vue";

const props = defineProps({
  checkerboardInfo: Array,
})
</script>

<style lang="less" scoped>
.checkerboard {
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  width: 352px;
  border: 1px solid transparent;
}
</style>
