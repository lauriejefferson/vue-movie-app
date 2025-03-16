<script setup>
import { ref, onMounted, computed } from 'vue';
import MovieCard from '@/components/MovieCard.vue';
import { useMovieStore } from '@/stores/MovieStore';
import getMovies from '@/composables/getMovies';
import InputGroup from 'primevue/inputgroup';


const title = ref('')
const isFiltered = ref(false)
const isSorted = ref(false)
const selected = ref('')
const sorted = ref('')
const movieType = ref([
  { name: 'Movie', code: 'mv' },
  { name: 'Series', code: 'sr' },
  { name: 'Episode', code: 'ep' },
])
const sortBy = ref([
  { name: 'Year', code: 'yr' },
  { name: 'Title', code: 'tl' }
])
const movieStore = useMovieStore()

const { movies, error, loadMovies } = getMovies();


const handleSubmit = () => {
  return loadMovies(title.value);
}

const handleSelected = () => {
  isFiltered.value = true;
  //  movieStore.getFilteredMovies(selected.value);
  //  console.log(isFiltered)
}

const handleSort = (e) => {
  isSorted.value = true;
  // movieStore.getSortedMovies(sorted.value)
};

</script>
<template>
  <div class="container mx-auto">
    <h1 class="title">Search Movies</h1>
    <div class="search">
      <form @submit.prevent="handleSubmit()" class="flex justify-content-center gap-3 p-3 border-round-sm"
        style="backgroundColor: var(--primary-900); width: 50em;">
        <InputText type="text" placeholder="Enter movie title" v-model="title" style="width: 20em;" />
        <Dropdown v-model="selected" :options="movieType" optionLabel="name" placeholder='Movie type'
          class="w-full md:w-14rem flex justify-content-center align-items-center text-center"
          @change="handleSelected" />
        <Dropdown v-model="sorted" :options="sortBy" optionLabel="name" placeholder='Sort By'
          class="w-full md:w-14rem flex justify-content-center align-items-center text-center" @change="handleSort" />
        <Button type="submit" icon="pi pi-search" />
      </form>
    </div>
    <div class="grid">
      <div v-show="isFiltered && !isSorted" v-for="(movie, index) in movieStore.filteredMovies" :key="index"
        class="col-8 col-offset-2">
        <movie-card :movie="movie" />
      </div>
      <div v-show="isSorted && isFiltered" v-for="(movie, index) in movieStore.sortedMovies" :key="index"
        class="col-8 col-offset-2">
        <movie-card :movie="movie" />
      </div>
      <div v-show="!isFiltered && !isSorted" v-for="(movie, index) in movies.Search" :key="index"
        class="col-8 col-offset-2">
        <movie-card :movie="movie" />
      </div>
    </div>
  </div>
</template>
<style scoped>
.search {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1em 0;
  width: 100%;
}

.title {
  text-align: center;
}

form {
  display: flex;
  width: 47%;
}

form input {
  border: 2px solid #C9C9CF;
  padding: 1em;
  width: 100%;
}


span {
  text-align: center;
}

button {
  border: none;
  background-color: #0cc361;
  color: white;
  text-transform: uppercase;
  padding: 10px 30px;
  cursor: pointer;
}

.filters {
  display: flex;
  gap: 1em;
  margin-left: 0.5em;
}

select {
  background-color: rgb(248, 248, 248);
  border: none;
  margin-right: 0.25em;
  padding: 1.2em;
  text-transform: uppercase;
}


.link {
  margin: 1.2em 0;
}

.link a {
  letter-spacing: 2px;
  text-transform: uppercase;
  cursor: pointer;
  text-decoration: none;
  color: white;
  font-weight: 700;
  background-color: #0cc361;
  padding: 10px 30px;
}
</style>