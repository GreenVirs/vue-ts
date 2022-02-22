<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'DefaultLayout',
})
</script>

<template>
  <slot />
</template>

<style module>
label {
  margin: 0 0.5em;
  font-weight: bold;
}
</style>
