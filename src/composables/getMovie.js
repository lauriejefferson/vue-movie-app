import { ref } from 'vue';

const getMovie = async (id) => {
  const movie = ref([]);

  const apiKey = import.meta.env.VITE_OMDBAPI_KEY;
  const response = await fetch(
    `http://www.omdbapi.com/?apikey=${apiKey}&i=${id}`
  );
  movie.value = await response.json();

  return movie;
};

export default getMovie;
