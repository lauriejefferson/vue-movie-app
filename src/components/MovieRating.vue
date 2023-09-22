<script setup>
import { ref, computed } from 'vue'
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
console.log("Current movie id: ", props.id)
currMovies.value = movieStore.userRating.filter(userRating => userRating.movieId === props.id)
console.log("Current movie: ", currMovies.value)

// function getAverageRating () {
//     if (props.movieId === movieStore.userRating.movieId) {
//         reducer = (acc, curr) => acc + parseInt(curr.rating)
//         totalRating = movieStore.userRating.reduce(reducer, initalValue)
//         console.log("Total rating ", totalRating)
//         return Math.round(totalRating / movieStore.userRating.length);
//     }
// }
// value.value = getAverageRating()
</script>

<template>
    <div>
        <h3>Average Movie Rating</h3>
        <Rating v-model="value" :cancel="false" style="color: #FFCA3A; margin: 1em 0;" readonly/>
    </div>
</template>

<style scoped>

</style>