<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: 'UCode'
})
</script>

<template>
    <code :class="$style['code']">
        <slot />
    </code>
</template>

<style module>
.code {
    background-color: #eee;
    padding: 2px 4px;
    border-radius: 4px;
    color: #304455;
}
</style>