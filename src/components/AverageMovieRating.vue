<script setup>
import { ref, watch, onMounted, nextTick } from 'vue'
import Rating from 'primevue/rating';
import { useMovieStore } from '../stores/MovieStore';

const props = defineProps({
    id: String
});

const movieStore = useMovieStore()
const value = ref(0);
const currMovies = ref([]);
const initalValue = 0;
let reducer = 0;
let totalRating = 0;

onMounted(() => {
    getAverageRating()
})

watch(movieStore.userRating, () => {
    getAverageRating()
});

</script>

<template>
    <div class="flex">
        <h3>Average Movie Rating</h3>
        <Rating v-model="value" readonly :cancel="false" style="color: #FFCA3A; margin: 1em 0;" />
    </div>
</template>

<style scoped>
.flex {
    display: flex;
    gap: 1em;
}
</style>