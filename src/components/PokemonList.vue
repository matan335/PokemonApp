<template>
    <section class="pokemon-list">
      <div v-for="pokemon in pokemons" :key="pokemon.name">
        <div>
          {{pokemon}}
        </div>
        <br/>
      </div>
    </section>
</template>

<script>
import service from "../services/pokemon.service";
export default {
  data() {
    return {
      pokemons: []
    };
  },
  created: function() {
    service.query().then(pokemons => (this.pokemons = pokemons));
  }
};
</script>

<style scoped>
</style>
