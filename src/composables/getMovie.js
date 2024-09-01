import { ref } from 'vue';

const getMovie = () => {
  const data = ref(null);
  const error = ref(null);

  const apiKey = import.meta.env.VITE_OMDBAPI_KEY;
  const load = async (id) => {
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${apiKey}&i=${id}`
      );
      data.value = await response.json();
    } catch (err) {
      error.value = err;
    }
  };

  return { data, error, load };
};

export default getMovie;
