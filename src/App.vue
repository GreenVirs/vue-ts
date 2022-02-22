<script lang="ts">
import { defineAsyncComponent, defineComponent } from 'vue';
const DefaultLayout = defineAsyncComponent(() => import('@/layouts/default.vue'));
const EmptyLayout = defineAsyncComponent(() => import('@/layouts/empty.vue'));

export default defineComponent({
  name: 'App',
  components: {
    DefaultLayout,
    EmptyLayout,
  }
})
</script>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router'; 
import TheHeader from './components/layout/TheHeader.vue';

const route$ = useRoute();

const component = computed((): string => {
  if (route$.meta.layout) {
    return route$.meta.layout + '-layout';
  } else {
    return 'default-layout';
  }
})
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <TheHeader />
  <component :is="component">
    <RouterView />
  </component>
</template>

<style src="@/assets/app.css" />
