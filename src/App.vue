<script setup>
import Navbar from './components/Navbar.vue';
</script>

<template>
    <Navbar />
    <router-view />
</template>

<style scoped>
a {
    text-decoration: none;
}

ul,
li {
    margin: 0;
    padding: 0;
}

li {
    list-style-type: none;
}


.nav-list {
    display: flex;
    justify-content: flex-end;
}

.nav-list-item {
    margin-right: 1em;
}

/* font-awesome-icon {
    width: 32px;
    height: 32px;
} */
</style>
