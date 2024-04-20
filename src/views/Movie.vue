<script setup>
import { onMounted, onBeforeMount, ref, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import getMovie from '../composables/getMovie';

import UserRating from '@/components/UserRating.vue'
import MovieRating from '@/components/MovieRating.vue'
const props = defineProps({
    id: String
})

const route = useRoute()
const router = useRouter()

const showModal = ref(false)

const { data: movie, error, load } = getMovie();

onMounted(() => {
    return load(props.id);
})

console.log(movie);

function goBack() {
    router.push({ name: 'Home' })
}

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
                </div>
            </div>
            <div class="movie-ratings">
                <div>
                    <MovieRating :id="props.id" />
                    <UserRating :id="props.id" />
                </div>
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
    font-size: 1.125rem;
    border: none;
    margin: 10px 50px;
    padding: 15px 30px;
    cursor: pointer;
}
</style>