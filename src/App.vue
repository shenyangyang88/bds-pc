<template>
  <default-layout />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import DefaultLayout from './components/DefaultLayout.vue';

@Options({
  components: {
    DefaultLayout,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  min-width: 1132px;

  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}
</style>
