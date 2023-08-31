<script setup>
import { ref, onMounted, computed, h } from 'vue';
import { useMovieStore } from '../stores/MovieStore';

const title = ''
const isFiltered = ref(false)
const isSorted = ref(false)
const selected = ref('')
const sorted = ref('')
const movieStore = useMovieStore()
const filteredMovies = ref([])
const sortedMovies = ref([])

const handleSelected = (e) => {
 isFiltered.value = true;
 filteredMovies.value = movieStore.getFilteredMovies(selected.value);
 console.log(filteredMovies)
}

const handleSort = (e) => {
  isSorted.value = true;
  sortedMovies.value = movieStore.getSortedMovies(sorted.value)
  console.log(sortedMovies.value)
}

</script>
<template>
  <div class="container">
    <h1>Search Movies</h1>
    <div class="search">
      <form @submit.prevent="movieStore.getMovies(title)" class="form">
        <input type="text" placeholder="Enter movie title" v-model="title">   
        <button>Search</button>
      </form>
      <select v-model="selected" class="select" @change="handleSelected">
        <option disabled value="">Select a Movie Type</option>
        <option>movie</option>
        <option>series</option>
        <option>episode</option>
      </select>
      <select v-model="sorted" class="select" @change="handleSort">
        <option disabled value="">Sort By</option>
        <option>year</option>
        <option>title</option>
      </select>
    </div>
    <div class="gallery">
      <div v-show="isFiltered" v-for="(movie, keyIndex) in filteredMovies" :key="keyIndex" class="card">
         <img :src="movie.Poster" alt="poster">
          <h2>{{ movie.Title }}</h2>
          <p>{{ movie.Year }}</p>
          <div class="link">
            <router-link :to="{ name: 'Movie', params: { id: movie.imdbID } }">Details</router-link>
          </div>
      </div> 
      <div v-show="isSorted" v-for="(movie, index) in sortedMovies" :key="index" class="card">
          <img :src="movie.Poster" alt="poster">
          <h2>{{ movie.Title }}</h2>
          <p>{{ movie.Year }}</p>
          <div class="link">
            <router-link :to="{ name: 'Movie', params: { id: movie.imdbID } }">Details</router-link>
          </div>
      </div>
      <div v-show="!isFiltered && !isSorted" v-for="(movie, index) in movieStore.movies.Search" :key="index" class="card">
          <img :src="movie.Poster" alt="poser">
          <h2>{{ movie.Title }}</h2>
          <p>{{ movie.Year }}</p>
          <div class="link">
            <router-link :to="{ name: 'Movie', params: { id: movie.imdbID } }">Details</router-link>
          </div>
      </div>
    </div>
</div>
</template>
<style scoped>

.search {
  display: flex;
  margin-bottom: 3em;
}

form {
  display: flex;
}

 input {
  border: 2px solid #C9C9CF;
  width: 100%;
}
 button {
  border: none;
  background-color: #5465FF;
  color: white;
  text-transform: uppercase;
  padding: 10px 30px;
  cursor: pointer;
}
.card {
  width: 100%;
  text-align: center;
  border: 2px solid chartreuse;
  padding-bottom: 1em;

}

.card h2 {
  text-align: center;
}

.link {
  margin: 1.2em 0;
}
.link a {
  letter-spacing: 2px;
  text-transform: uppercase;
  cursor: pointer;
  text-decoration: none;
  color: #FF570A;
  font-weight: 700;
  background-color: #B8EBD0;
  padding: 10px 30px;
}


.gallery {
  display: grid;
  grid-template-columns: repeat(3, 300px);
  grid-template-rows: repeat(3, 1fr);
  gap: 20px;
}
</style>