<script setup>
import Card from 'primevue/card';
const props = defineProps({
    movie: {
        Poster: String,
        Title: String,
        Year: String,
        imdbID: String
    }
});

</script>
<template>
    <Card style="height: 100%">
        <template #header>
            <!-- <Image v-bind:src="props.movie.Poster" alt="poster" width="300" preview /> -->
            <img alt="poster" :src="props.movie.Poster" height="500" width="100%" />
        </template>
        <template #title>
            {{ movie.Title }}
        </template>
        <template #subtitle>
            {{ movie.Year }}
        </template>
        <template #footer>
            <router-link :to="{ name: 'Movie', params: { id: props.movie.imdbID } }">
                <Button icon="pi pi-check" label="Details" severity="success" />
            </router-link>
        </template>
    </Card>

</template>

<style scoped>
.grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: auto auto auto auto auto;

}

.card-grid {
    display: grid;
    grid-template-rows: subgrid;
}
</style>