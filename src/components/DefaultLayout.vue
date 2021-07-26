<template>
  <top />
  <navs />
  <router-view />
  <links />
  <bottom />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Bottom from '@/components/Bottom.vue';
import Links from '@/components/Links.vue';
import Navs from '@/components/Navs.vue';
import Top from '@/components/Top.vue';

@Options({
  components: {
    Bottom,
    Links,
    Navs,
    Top,
  },
})
export default class DefaultLayout extends Vue {}
</script>
