<script setup>

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
    <div>
        <Card class="card">
            <template #header>
                <img alt="user header" :src="props.movie.Poster" />
            </template>
            <template #title> {{ movie.Title }} </template>
            <template #subtitle> {{ movie.Year }} </template>
            <template #footer>
             <router-link :to="{ name: 'Movie', params: { id: props.movie.imdbID } }">
                <Button icon="pi pi-check" label="Details" severity="success"/>
             </router-link>
            </template>
        </Card>
    </div>  
</template>





<style scoped>

</style>