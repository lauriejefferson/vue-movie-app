<script setup>
</script>

<template>
    <header>
    <div class="container">
            <router-link to="/">Vue Movie</router-link>
        </div>
        <nav class="nav">
            <ul class="nav-list">
                <li class="nav-list-item">
                    <router-link to="/login">Login</router-link>
                </li>
                <li class="nav-list-item">
                    <router-link to="/signup">Sign Up</router-link>
                </li>
            </ul>
        </nav>
    </header>
    
    
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

header {
    display: flex;
    justify-content: space-between;
    margin: 1em;
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
