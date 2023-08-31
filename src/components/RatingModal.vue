
<script setup>
import {ref} from 'vue'
import Rating from 'primevue/rating';
import {useStorage} from '@vueuse/core'

const props = defineProps({
    show: Boolean
});

const value = ref(null);

</script>
<template>
   <div v-if="show">
    <p>Rate This Movie!</p>                        
    <Rating v-model="value" :cancel="false" style="color: #FFCA3A; margin-bottom: 1em;"/>
    <button @click="$emit('close')">Close</button> 
  </div>
</template>




<style scoped>
p {
    font-size: 1.125rem;
}
button {
    color: white;
    font-size: 1.125rem;
    text-transform: uppercase;
    border: none;
    background-color: #18A999;
    margin: 10px 0;
    padding: 15px 20px;
    cursor: pointer;
}
</style>