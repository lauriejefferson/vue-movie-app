<script setup>
import { ref, computed } from 'vue'
import Rating from 'primevue/rating';
import { useMovieStore } from '../stores/MovieStore';

const props = defineProps({
    movieId: String
});

const movieStore = useMovieStore()
const value = ref(0);
const initalValue = 0;
let reducer = 0;
let totalRating = 0;


function getAverageRating () {
    if (props.movieId === movieStore.userRating.movieId) {
        reducer = (acc, curr) => acc + parseInt(curr.rating)
        totalRating = movieStore.userRating.reduce(reducer, initalValue)
        console.log(totalRating)
        value.value = Math.round(totalRating / 5);
    }
}

getAverageRating()
</script>

<template>
    <div>
        <h3>Average Movie Rating</h3>
        <Rating v-model="value" :cancel="false" style="color: #FFCA3A; margin: 1em 0;" />
    </div>
</template>

<style scoped>

</style>