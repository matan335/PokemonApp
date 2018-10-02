<template>
    <section class="pokemon-team">
      <div v-for="(pokemon, i) in pokemons" :key="i">
        <pokemon-preview :pokemon="pokemon" :loading="loading"></pokemon-preview>
      </div>
    </section>
</template>

<script>
import service from "@/services/pokemon.service";
import pokemonPreview from "@/components/PokemonPreview";

export default {
  data() {
    return {
      pokemons: [],
      loading: true
    };
  },
  created() {
    service.getTeam().then(pokemons => {
      this.pokemons = pokemons;
      console.log("avner wanted", this.pokemons);
      setTimeout(() => (this.loading = false), 1500);
    });
  },
  components: {
    pokemonPreview
  }
};
</script>

<style scoped>
.pokemon-team {
  background-color: black;
  padding-top: 6px;
  height: 100%;
}
</style>
