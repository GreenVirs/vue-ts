<script lang="ts" setup>
import CounterBtn from '@/components/blocks/CounterBtn.vue';
import UCode from '@/components/ui/UCode.vue';
</script>

<template>
    <h1>Hello Vue 3 + TypeScript + Vite</h1>
    <p>
        Recommended IDE setup:
        <a class="link" href="https://code.visualstudio.com/" target="_blank">VSCode</a>
        +
        <a class="link" href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    </p>
    <p>See <UCode>README.md</UCode> for more information.</p>

    <p>
        <a class="link" href="https://vitejs.dev/guide/features.html" target="_blank">
        Vite Docs
        </a>
        |
        <a class="link" href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
    </p>
    <CounterBtn />
    <p>
        Edit
        <UCode>components/HelloWorld.vue</UCode> to test hot module replacement.
    </p>
</template>