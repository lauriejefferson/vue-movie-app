<script setup>
import Card from 'primevue/card';
const props = defineProps({
    movie: {
        Poster: String,
        Title: String,
        Year: String
    }
});

console.log("Movies: ", props.movie.Title)

</script>

<template>
    <div>
        <Card style="width: 20em">
            <template #header>
                <img alt="user header" :src="movie.Poster" />
            </template>
            <template #title> {{movie.Title}} </template>
            <template #subtitle> {{movie.Year }} </template>
            <template #footer>
                <Button icon="pi pi-check" label="Details" />
            </template>
        </Card>
    </div>  
</template>





<style scoped>

</style>