<script setup>

</script>
<template>
    <div class="container">
     <h1>Login</h1>
     <form action="#">
        <input type="email" placeholder="Enter your email"> 
        <input type="email" placeholder="Enter your password">
        <div class="btn">
        <button>Log in</button> 
        <button>Sign up</button> 
        </div>
        
     </form>
    </div>
</template>



<style scoped>
form {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 450px;
}

input {
    margin-bottom: 1em;
    padding-left: 0.7em;
    height: 35px;
    border: 1px solid #C9C9CF;
    width: 100%;
}
.btn {
    display: flex;
    justify-content: space-between;
    gap: 0.25em;
    width: 100%;
}
button {
    font-size: 1.125rem;
    text-transform: uppercase;
    border: none;
    background-color: #5465FF;
    color: white;
    width: 50%;
    height: 45px;
}
</style>