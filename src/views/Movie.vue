<script setup>
import { onMounted, onBeforeMount, ref, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import getMovie from '../composables/getMovie';

import UserRating from '@/components/UserRating.vue'
import AverageMovieRating from '@/components/AverageMovieRating.vue'
import { useMovieStore } from '../stores/MovieStore';
const props = defineProps({
    id: String
})
const movieStore = useMovieStore()
const route = useRoute()
const router = useRouter()
const visible = ref(false)
const showModal = ref(false)
const value = ref(null);
const comment = ref(null);
const username = ref('');

const { data: movie, error, load } = getMovie();

onMounted(() => {
    return load(props.id);
})

console.log(movie);

function goBack() {
    router.go(-1);
}


const handleSubmit = () => {
    movieStore.addRating({ movieId: props.id, username: username.value, rating: value.value, comment: comment.value })
};

</script>
<template>
    <Button @click="goBack" label="Go Back" text />
    <div v-if="movie">
        <h1 class="title">{{ movie.Title }}</h1>
        <div class="movie-container">
            <div class="movie-info">
                <div class="movie-poster">
                    <img :src="movie.Poster" alt="poster" :style="{ 'height': '100%', 'width': '32%' }">
                </div>
                <div class="movie-description">
                    <div class="plot">
                        <h2>Plot</h2>
                        <p>{{ movie.Plot }}</p>
                    </div>
                    <div class="flex">
                        <h2>Rated: {{ movie.Rated }}</h2>
                    </div>
                    <div class="flex">
                        <h2>Release Year:</h2>
                        <p>{{ movie.Year }}</p>
                    </div>
                    <div class="flex">
                        <h2>Genre: </h2>
                        <p>{{ movie.Genre }}</p>
                    </div>
                    <div class="flex">
                        <h2>Actors: </h2>
                        <p>{{ movie.Actors }}</p>
                    </div>
                    <ul class="internet-ratings">
                        <h2>Ratings</h2>
                        <li v-for="(rating, index) in movie.Ratings" :key="index">
                            <div class="ratings">
                                <p>{{ rating.Source }}:</p>
                                <p>{{ rating.Value }}</p>
                            </div>

                        </li>
                    </ul>
                    <div class="avg-movie-rating">
                        <!-- <AverageMovieRating :id="props.id" /> -->
                    </div>
                </div>
            </div>
            <div class="movie-ratings">
                <Button label="Rate Movie" @click="visible = true" class="mt-3" />
                <Dialog v-model:visible="visible" modal header="Rate Movie" :style="{ width: '25rem' }">
                    <form action="#" @submit.prevent="handleSubmit">
                        <div class="flex align-items-center gap-3 mb-3">
                            <InputText type="text" name="username" id="username" v-model="username"
                                placeholder="Enter username" />
                        </div>
                        <div class="flex align-items-center gap-3 mb-3">
                            <Rating v-model="value" :cancel="false" style="color: #FFCA3A; margin-bottom: 1em;" />
                        </div>
                        <div class="flex-align-items-center gap-3 mb-3">
                            <Textarea v-model="comment" rows="5" cols="25" autoResize />
                        </div>
                        <div class="flex justify-content-start gap-2">
                            <Button type="Submit" label="Add Rating" />
                        </div>
                    </form>
                </Dialog>
            </div>
            <div class="show-rating" v-if="movieStore.rated">
                <p class="not-rated">Movie already rated!</p>
            </div>
        </div>
    </div>
</template>
<style scoped>
.flex {
    display: flex;
    align-items: center;
    gap: 1em;
}

.title {
    text-align: center;
}

ul {
    padding: 0;
}

li {
    list-style-type: none;
}

.movie-info {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1em;
}

.plot {
    display: flex;
    flex-direction: column;
}

.ratings {
    display: flex;
    gap: 1em;
}

li p {
    font-size: 1.2rem;
}

button {
    cursor: pointer;
}

.not-rated {
    color: var(--red-500)
}
</style>