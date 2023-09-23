<script setup>
import { ref, watch, onMounted } from 'vue'
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
let avgRating = 0;

function getAverageRating() {
  currMovies.value = movieStore.userRating.filter(userRating => userRating.movieId === props.id)
  reducer = (acc, curr) => acc + parseInt(curr.rating)
  totalRating = currMovies.value.reduce(reducer, initalValue)
  value.value = Math.round(totalRating / currMovies.value.length)
}

onMounted(() => {
    getAverageRating()
})

watch(movieStore.userRating, () => {
    getAverageRating()
});

</script>

<template>
    <div>
        <h3>Average Movie Rating</h3>
        <Rating v-model="value" :cancel="false" style="color: #FFCA3A; margin: 1em 0;" readonly/>
    </div>
</template>

<style scoped>

</style>