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
  min-height: 65vh;
  overflow-x: hidden;
  margin: 0;
  padding: 0;
}
</style>
