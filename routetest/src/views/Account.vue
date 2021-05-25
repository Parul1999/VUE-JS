<template>
<main>
    <h1>Hello , This is Account</h1>
    <h1> {{ $route.params }}</h1>
    <h2>Router</h2>
    <h1> {{ $router }}</h1>
    <h2>Route</h2>
    <h1> {{ $route }}</h1>
    </main>
</template>

<script>
export default {
    name:"Account"
}
</script>