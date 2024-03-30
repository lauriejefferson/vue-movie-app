<script setup>
import Card from 'primevue/card';
const props = defineProps({
    movie: {
        Poster: String,
        Title: String,
        Year: String,
        Plot: String,
        imdbID: String
    }
});

</script>
<template>
    <Card>
        <template #content>
            <div class="flex gap-5">
                <div>
                    <img alt="poster" :src="props.movie.Poster" height="200" width="150" />
                </div>
                <div class="flex flex-column main">
                    <div class="title">
                        {{ props.movie.Title }}
                    </div>
                    <div class="year">
                        {{ props.movie.Year }}
                    </div>
                    <div class="description">
                        {{ props.movie.Plot }}
                    </div>
                    <div class="footer">
                        <router-link :to="{ name: 'Movie', params: { id: props.movie.imdbID } }">
                            <Button icon="pi pi-check" label="Details" severity="success" />
                        </router-link>
                    </div>
                </div>
            </div>
        </template>
    </Card>

</template>

<style scoped>
.title {
    color: #424651;
    font-weight: 800;
    margin-bottom: 0.25em;
}

.year {
    color: #A5ABB6;
}

.footer {
    margin-top: auto;
}
</style>