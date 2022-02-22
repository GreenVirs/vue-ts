import { defineStore, acceptHMRUpdate  } from "pinia";

export type StoreCounter = {
    counter: number
} 

export const useCounterStore = defineStore('counter', {
    state: () => ({
            counter: 0,
        } as StoreCounter),
    actions: {
        incriment() {
            this.counter++;
        }
    }
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useCounterStore, import.meta.hot))
}