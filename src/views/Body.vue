<template>
    <body>
        <pokemon-list></pokemon-list>
    </body>
</template>

<script>
import pokemonList from "../components/PokemonList";
export default {
  components: {
    pokemonList
  }
};
</script>

<style scoped>
body {
  min-height: calc(100vh - 35vh);
  overflow-x: hidden;
}
</style>
