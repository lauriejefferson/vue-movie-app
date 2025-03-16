<script setup>
import { useMovieStore } from '../stores/MovieStore';
import { useLocalStorage, useStorage } from '@vueuse/core';

async function handleSubmit(values) {
    console.log(values)
    // const state = useLocalStorage('signup', {email: values.email, password: values.password})
}

</script>

<template>
    <div class="container col">
        <h1>Sign Up</h1>
        <form action="#" @submit.prevent="handleSubmit">
            <input type="email" name="email" placeholder="Enter your email">
            <input type="password" name="password" placeholder="Enter your password">
            <button>Sign Up</button>
        </form>
    </div>
</template>



<style scoped>
h1 {
    text-align: center;
}

form {
    display: grid;
    place-items: center;
    width: 400px;
    margin-top: 1.5em;
}

input {
    margin-bottom: 1em;
    height: 35px;
    padding-left: 0.5em;
    border: 1px solid #C9C9CF;
    width: 100%;

}

button {
    height: 45px;
    font-size: 1.125rem;
    text-transform: uppercase;
    border: none;
    background-color: #5465FF;
    color: white;
    width: 100%;
}
</style>