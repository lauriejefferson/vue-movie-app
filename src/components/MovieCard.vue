<script setup>
const props = defineProps({
    movie: {
        Poster: String,
        Title: String,
        Year: String
    }
});

console.log("Movies: ", props.movie)

</script>

<template>
    <div>
        <Card class="card" style="min-height: 100vh;">
            <template #header>
                <img alt="user header" :src="movie.Poster" />
            </template>
            <template #title> {{movie.Title}} </template>
            <template #subtitle> {{movie.Year }} </template>
            <template #footer>
             <router-link :to="{ name: 'Movie', params: { id: movie.imdbID } }">
                <Button icon="pi pi-check" label="Details" severity="success"/>
             </router-link>
            </template>
        </Card>
    </div>  
</template>





<style scoped>

</style>