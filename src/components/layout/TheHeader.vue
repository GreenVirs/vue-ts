<template>
  <p>
    Links: 
    <RouterLink class="link" :to="{ name: 'home' }"> Home </RouterLink>
    |
    <RouterLink class="link" :to="{ name: 'about' }"> About </RouterLink>
  </p>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: 'TheHeader'
})
</script>