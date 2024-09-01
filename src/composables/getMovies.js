import { ref } from 'vue';

const getMovies = () => {
  const movies = ref([]);
  const filteredMovies = ref([]);
  const sortedMovies = ref([]);
  const error = ref(null);

  const apiKey = import.meta.env.VITE_OMDBAPI_KEY;
  const loadMovies = async (title) => {
    try {
      console.log(title);
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${apiKey}&s=${title}`
      );
      movies.value = await response.json();
    } catch (err) {
      error.value = err;
    }
    // console.log(movies.value);
  };

  return { movies, error, loadMovies };
};

export default getMovies;
