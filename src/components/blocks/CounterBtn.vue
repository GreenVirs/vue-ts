<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'CounterBtn'
})
</script>

<script lang="ts" setup>
import { useCounterStore } from '@/stores/counter';
import { storeToRefs } from 'pinia';

const counetrStore = useCounterStore();

const { counter } = storeToRefs(counetrStore);

function resetCounter(): void {
    counetrStore.$reset();
}

function incriment(): void {
    counetrStore.incriment();
}
</script>

<template>
  <button type="button" @click="incriment">count is: {{ counter }}</button>
  <button type="button" @click="resetCounter"> Reset </button>
</template>