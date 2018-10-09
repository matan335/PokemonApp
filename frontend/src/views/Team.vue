<template>
    <section class="pokemon-team">
      <div v-for="(teamMember, i) in getTeam" :key="i">
        <pokemon-preview :teamMember="teamMember"></pokemon-preview>
      </div>
    </section>
</template>

<script>
import service from "@/services/pokemon.service";
import pokemonPreview from "@/components/PokemonPreview";

export default {
  data() {
    return {
    };
  },
  computed: {
    getTeam: function() {
      return this.$store.getters.team;
    }
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
