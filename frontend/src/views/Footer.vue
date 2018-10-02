<template>
    <footer>
        <img class="pokemon-logo" src="../assets/pokemon-logo.png" />
    </footer>
</template>

<script>
export default {

}
</script>

<style scoped>
footer {
    width: 100vw;
    height: 15vh;
    background-color: #333;
    z-index: 3;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
}

footer img.pokemon-logo {
    height: 65px;
}
</style>
