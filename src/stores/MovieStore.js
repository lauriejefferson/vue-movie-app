import { ref } from 'vue';
import { defineStore } from 'pinia';
import { useLocalStorage } from '@vueuse/core';

export const useMovieStore = defineStore('MovieStore', () => {
  const movies = ref([]);
  const movie = ref([]);
  const user = ref('');
  const userRating = useLocalStorage('user-rating', [
    { movieId: '', username: '', rating: 0 },
  ]);
  const movieRating = useLocalStorage('movie-rating', [{}]);

  async function getMovies(title) {
    const apiKey = import.meta.env.VITE_OMDBAPI_KEY;
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${apiKey}&s=${title}`
    );
    movies.value = await response.json();
  }

  async function getMovie(id) {
    const apiKey = import.meta.env.VITE_OMDBAPI_KEY;
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${apiKey}&i=${id}`
    );
    movie.value = await response.json();
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
    movie,
    movies,
    getMovie,
    getMovies,
    getFilteredMovies,
    getSortedMovies,
    userRating,
    movieRating,
  };
});
