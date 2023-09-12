import { ref } from 'vue';
import { defineStore } from 'pinia';
import { useLocalStorage } from '@vueuse/core';

export const useMovieStore = defineStore('MovieStore', () => {
  const movies = ref([]);
  const user = ref('');
  const userRating = useLocalStorage('user-rating', []);
  const movieRating = useLocalStorage('movie-rating', []);

  async function getMovies(title) {
    const apiKey = import.meta.env.VITE_OMDBAPI_KEY;
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${apiKey}&s=${title}`
    );
    movies.value = await response.json();
  }

  function getFilteredMovies(selected) {
    console.log(selected);
    return [...movies.value.Search].filter((movie) => movie.Type === selected);
  }

  function getSortedMovies(sorted) {
    console.log(sorted);
    return [...movies.value.Search].sort((a, b) => {
      if (sorted === 'year') return a.Year - b.Year;
      if (sorted === 'title') {
        let aTitle = a.Title.toLowerCase();
        let bTitle = b.Title.toLowerCase();
        if (aTitle < bTitle) return -1;
        else if (aTitle > bTitle) return 1;
        else return 0;
      }
    });
  }

  return {
    movies,
    getMovies,
    getFilteredMovies,
    getSortedMovies,
    userRating,
    movieRating,
  };
});
