<template>
    <header>
        <img class="pokemon-logo" src="../assets/pokemon-logo.png" />
    </header>
</template>

<script>
export default {

}
</script>

<style scoped>
header {
    width: 100vw;
    height: 20vh;
    background-color: #fff;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.12);
    z-index: 3;
    overflow: hidden;
}

header img.pokemon-logo {
    height: 125px;
}
</style>
