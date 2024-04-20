<script setup>
import { ref } from 'vue'
import Rating from 'primevue/rating';
import Textarea from 'primevue/textarea';
import Card from 'primevue/card';
import { useMovieStore } from '../stores/MovieStore';


const props = defineProps({
  show: Boolean,
  id: String
});

const value = ref(null);
const comment = ref(null);
const username = ref('');
const movieStore = useMovieStore()
const rated = ref(false)
console.log("Movie Id: ", props.id)
const handleSubmit = () => {
  movieStore.userRating = [...movieStore.userRating, { movieId: props.id, username: username.value, rating: value.value, comment: comment.value }]
  movieStore.userRating.forEach((userRating) => console.log(userRating.username))
}
</script>
<template>
  <div v-show="rated">
    <p>Movie already rated!</p>
  </div>
  <div v-show="!rated">
    <p>Rate This Movie!</p>
    <form action="#" @submit.prevent="handleSubmit">
      <InputText type="text" name="username" id="username" v-model="username" placeholder="Enter username" />
      <Rating v-model="value" :cancel="false" style="color: #FFCA3A; margin-bottom: 1em;" />
      <Textarea v-model="comment" row="5" cols="50" />
      <Button type="Submit" label="Rate Movie" />
    </form>
  </div>
  <div>
    <div v-for="userRating in movieStore.userRating" :key="userRating.movieId">
      <div v-if="userRating.movieId === props.id" class="user-rating">
        <Card style="margin-bottom: 1rem">
          <template #title>{{ userRating.username }} </template>
          <template #content>
            <Rating v-model="userRating.rating" :cancel="false" style="color: #FFCA3A; margin-bottom: 1em;" />
            <p>{{ userRating.comment }}</p>
          </template>
        </Card>
      </div>
    </div>
  </div>

</template>


<style scoped>
p {
  font-size: 1.25rem;
}

button {
  color: white;
  font-size: 1.125rem;
  text-transform: uppercase;
  border: none;
  background-color: #18A999;
  margin: 10px 0;
  padding: 15px 20px;
  cursor: pointer;
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

.movie-rating {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

input[type="text"] {
  border: none;
  padding: 1em 1.5em;
  margin-bottom: 1em;
}
</style>