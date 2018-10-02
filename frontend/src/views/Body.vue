<template>
    <body>
        <router-view/>
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
  overflow-x: hidden;
  margin: 0;
  padding: 0;
}
</style>
