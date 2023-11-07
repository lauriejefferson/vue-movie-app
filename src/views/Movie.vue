<script setup>
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useMovieStore } from '@/stores/MovieStore';

import UserRating from '@/components/UserRating.vue'
import MovieRating from '@/components/MovieRating.vue'

const route = useRoute()
const router = useRouter()
const props = defineProps(['id'])
const rating = ref(1)
const value = ref(null);
const showModal = ref(false)
const movieStore = useMovieStore()

// console.log(router)
onMounted(async() => {
    movieStore.getMovie(props.id)
    // console.log("Movie: ", movieStore.movie)
})

function goBack(){
  router.push({name: 'Home'})
}
</script>
<template>
    <button @click="goBack">Go Back</button>
    <h1 class="title">{{ movieStore.movie.Title }}</h1>
    <div class="movie-container">
        <img :src=" movieStore.movie.Poster" alt="">
        <div>
          <h2>Plot</h2>
          {{ movieStore.movie.Plot }}
          <h2>Rated: {{ movieStore.movie.Rated }}</h2>
          <ul>
            <li>
                <p>Release Year: {{ movieStore.movie.Year }}</p>
            </li>
            <li>
                <p>Genre: {{ movieStore.movie.Genre}}</p>
            </li>
            <li>
                <p>Actors: {{ movieStore.movie.Actors }}</p>
            </li>
            <li>
                <h2>Ratings</h2>
                <ul>
                   <li v-for="(rating, index) in movieStore.movie.Ratings">
                    <div class="ratings">
                        <p>{{ rating.Source }}:</p> 
                        <p>{{ rating.Value }}</p>
                    </div>
                   </li>
                   <li>
                    <p>User Rating:</p>
                    <UserRating :id="props.id"/>
                   </li>
                   <li>
                    <MovieRating :id="props.id"/>
                   </li>
                </ul>
            </li>
          </ul>
        </div>

    </div>
</template>
<style scoped>

.title {
    text-align: center;
}

ul {
    padding: 0;;
}
li {
    list-style-type: none;
}
.movie-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2.5em;
}
.ratings {
    display: flex;
    justify-content: space-between;
}

li p {
    font-size: 1.2rem;
}
button {
    color: white;
    font-size: 1.125rem;
    text-transform: uppercase;
    border: none;
    background-color: #18A999;
    margin: 10px 50px;
    padding: 15px 30px;
    cursor: pointer;
}

.modal {
  position: fixed;
  z-index: 999;
  top: 50%;
  left: 70%;
  width: 300px;
  margin-left: -100px;
  padding: 2.5em;
  background-color: #FAFAFA;
  color: #136090;
  font-weight: bold;
}
</style>