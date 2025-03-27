import { ref } from 'vue';
import { defineStore } from 'pinia';
import { useLocalStorage } from '@vueuse/core';

export const useMovieStore = defineStore('MovieStore', () => {
  const user = ref('');
  const rated = ref(false);
  const filteredMovies = ref(null);
  const userRating = useLocalStorage('user-ratings', []);
  const movieRating = useLocalStorage('movie-ratings', []);

  function addRating(userLocalRating) {
    userRating.value.forEach((item) => {
      if (
        item.username === userLocalRating.username &&
        item.movieId === userLocalRating.movieId
      ) {
        rated.value = true;
      } else {
        rated.value = false;
      }
    });

    if (rated.value === false) {
      rated.value = true;
      userRating.value.push(userLocalRating);
    }
    console.log(userRating.value);
  }

  function getFilteredMovies(selected, filteredMovies) {
    console.log(selected);
    filteredMovies.value = [...movies.value.Search].filter(
      (movie) => movie.Type === selected
    );
  }

  // function getSortedMovies(sorted) {
  //   console.log(sorted);
  //   sortedMovies.value = [...movies.value.Search].sort((a, b) => {
  //     if (sorted === 'year') return a.Year - b.Year;
  //     if (sorted === 'title') {
  //       let aTitle = a.Title.toLowerCase();
  //       let bTitle = b.Title.toLowerCase();
  //       if (aTitle < bTitle) return -1;
  //       else if (aTitle > bTitle) return 1;
  //       else return 0;
  //     }
  //   });
  // }

  function getAverageRating() {
    currMovies.value = userRating.filter(
      (rating) => rating.movieId === props.id
    );
    reducer = (acc, curr) => acc + parseInt(curr.rating);
    totalRating = currMovies.value.reduce(reducer, initalValue);
    value.value = Math.round(totalRating / currMovies.value.length);
  }

  return {
    getFilteredMovies,
    userRating,
    movieRating,
    addRating,
    rated,
  };
});
