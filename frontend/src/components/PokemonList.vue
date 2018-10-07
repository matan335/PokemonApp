<template>
    <section class="pokemon-list">
      <button @click="addPokemonFile">addPokemonFile</button>
      <!-- <div v-for="(pokemon, i) in pokemons" :key="i">
        <pokemon-preview :pokemon="pokemon" :loading="loading"></pokemon-preview>
      </div> -->
    </section>
</template>

<script>
import service from "../services/pokemon.service";
import pokemonPreview from "./PokemonPreview";

export default {
  data() {
    return {
      pokemons: [],
      loading: true
    };
  },
  created() {
    // service.query()
    //   .then(pokemons => {
    //     console.log('loaded')
    //     this.pokemons = pokemons;
    //     setTimeout(() => (this.loading = false), 1500);
    //   })
  },
  methods: {
    addPokemonFile: function() {
      service.createPokemonData();
    }
  },
  components: {
    pokemonPreview
  }
};
</script>

<style scoped>
.pokemon-list {
  background-color: black;
  padding-top: 6px;
  height: 100%;
}
</style>
