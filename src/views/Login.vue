<script setup>

</script>
<template>
    <div class="container">
        <h1>Welcome Back!</h1>
        <form action="#">
            <input type="email" placeholder="Enter your email">
            <input type="email" placeholder="Enter your password">
            <button>Log in</button>
        </form>
        <p>Don't have an account? <router-link to="/signup">Sign up here.</router-link></p>
    </div>
</template>

<style scoped>
h1 {
    text-align: center;
}

form {
    display: grid;
    place-items: center;
    width: 450px;
}

input {
    margin-bottom: 1em;
    padding-left: 0.7em;
    height: 35px;
    border: 1px solid #C9C9CF;
    width: 100%;
}

button {
    font-size: 1.125rem;
    text-transform: uppercase;
    border: none;
    background-color: #5465FF;
    color: white;
    width: 100%;
    height: 45px;
}
</style>