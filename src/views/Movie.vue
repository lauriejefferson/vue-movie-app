<script setup>
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import UserRating from '../components/UserRating.vue'

const apiKey = import.meta.env.VITE_OMDBAPI_KEY;
const route = useRoute()
const router = useRouter()
const props = defineProps(['id'])
const movie = ref("")
const rating = ref(1)
const value = ref(null);
const showModal = ref(false)

console.log(router)
onMounted(async() => {
    let res = ref("")
    res.value = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&i=${props.id}`)
    movie.value = await res.value.json()
    console.log(movie.value)
})

function goBack(){
  router.push({name: 'Home'})
}
</script>
<template>
    <button @click="goBack">Go Back</button>
    <h1 class="title">{{ movie.Title }}</h1>
    <div class="container">
        <div>
            <img :src=" movie.Poster" alt="">
        </div>
        <div>
          <h2>Plot</h2>
          {{ movie.Plot }}
          <h2>Rated: {{ movie.Rated }}</h2>
          <ul>
            <li>
                <p>Release Year: {{ movie.Year }}</p>
            </li>
            <li>
                <p>Genre: {{ movie.Genre}}</p>
            </li>
            <li>
                <p>Actors: {{ movie.Actors }}</p>
            </li>
            <li>
                <h2>Ratings</h2>
                <ul>
                   <li v-for="(rating, index) in movie.Ratings">
                    <div class="ratings">
                        <p>{{ rating.Source }}:</p> 
                        <p>{{ rating.Value }}</p>
                    </div>
                   </li>
                   <p>User Rating:</p>
                    <UserRating :id="props.id"/>
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
.container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    align-content: center;
    gap: 10px;
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