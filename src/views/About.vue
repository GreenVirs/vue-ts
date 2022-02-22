<script lang="ts" setup>
import { getUser, User } from '@/api/users';
import { ref } from 'vue';

const user = ref<User | null>();
const value = ref('');
const isLoading = ref(false);

async function useGet(id: string | number) {
    isLoading.value = true;
    user.value = null;
    setTimeout(() => {
        getUser(id).then((res) => {
            user.value = res;
        }).finally(() => {
            isLoading.value = false;    
        });
    }, 2000);
}

function onSearch() {
    useGet(value.value);
}

</script>

<template>
    <form @submit.prevent="onSearch">
        <input type="number" v-model="value" />
        <button>Найти</button>
    </form>
    <div v-if="isLoading"> Поиск... </div>
    <div v-else-if="user">{{ user }}</div>
    <div v-else-if="value"> Пользователь {{ value }} не найден </div>
</template>