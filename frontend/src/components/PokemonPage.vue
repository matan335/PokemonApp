<template>
  <section class="pokemon-page">
    <div v-for="(pokemonName, i) in page" :key="i">
        <pokemon-preview :pokemonName="pokemonName"></pokemon-preview>
    </div>
  </section>
</template>

<script>
import pokemonPreview from './PokemonPreview'

export default {
  name:'pokemonPage',
  props: ["page", "pageNum"],
  components:{
    pokemonPreview
  }
};
</script>

<style scoped>
</style>

