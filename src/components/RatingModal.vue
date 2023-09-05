
<script setup>
import {ref} from 'vue'
import Rating from 'primevue/rating';
import { useMovieStore } from '../stores/MovieStore';


const props = defineProps({
    show: Boolean,
    id: String
});

const value = ref(null);
const username = ref('');
const movieStore = useMovieStore()
const rated = ref(false)

const handleSubmit = () => {
    movieStore.userRating.movieId = props.id
    movieStore.userRating.username = username.value
    movieStore.userRating.rating = value.value
}

</script>
<template>
   <Transition name="slide-fade">
   <div v-if="show" class="movie-rating">
      <div v-if="movieStore.userRating.rating">
        Username: {{ movieStore.userRating.username }}
        <Rating v-model="movieStore.userRating.rating" readonly :cancel="false"/>
        MovieId: {{ movieStore.userRating.movieId }}
      </div>
      <div v-else>
        <p>Rate This Movie!</p> 
        <form action="#" @submit.prevent="handleSubmit">
            <input type="text" name="username" id="username" v-model="username" placeholder="Enter username">
            <Rating v-model="value" :cancel="false" style="color: #FFCA3A; margin-bottom: 1em;"/>
            <button>Rate Movie</button>
        </form>  
      </div>
                         
    <button @click="$emit('close')">Close</button> 
  </div>
  </Transition>
</template>


<style scoped>
p {
    font-size: 1.25rem;
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

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

.movie-rating {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

input[type="text"]{
    border: none;
    padding: 1em 1.5em;
    margin-bottom: 1em;
}
</style>