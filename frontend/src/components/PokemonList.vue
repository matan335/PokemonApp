<template>
    <section class="pokemon-list">
      <div v-for="(page, i) in pages" :key="i">
        <pokemon-page v-if="currentPage === i+1" :page="page" :pageNum=i></pokemon-page>
      </div>
      <div class="nav-bar">
        <button @click="changePage('first')"> 
          <font-awesome-icon icon="fast-backward"/>
        </button>
        <button @click="changePage('previus')">
          <font-awesome-icon icon="backward"/>           
        </button>
        <button @click="changePage('next')">
          <font-awesome-icon icon="forward"/>           
        </button>
        <button @click="changePage('last')">
          <font-awesome-icon icon="fast-forward"/>
        </button>
      </div>
      <span>Current Page: {{currentPage}}</span>
    </section>
</template>

<script>
import service from "../services/pokemon.service";
import pokemonPage from "./PokemonPage";

export default {
  data() {
    return {
      pages: [],
      pokemonInPage: 5,
      currentPage: 1
    };
  },
  created() {
    service.loadPokemonList().then(pokemonList => {
      this.pages = this.getPages(pokemonList);
    });
  },
  methods: {
    getPages: function(pokemonList) {
      return service.getPages(pokemonList, this.pokemonInPage);
    },
    changePage: function(dir) {
      switch (dir) {
        case "first":
          this.currentPage = 1;
          break;
        case "previus":
          if (this.currentPage > 1) this.currentPage--;
          break;
        case "next":
          if (this.currentPage < this.pages.length) this.currentPage++;
          break;
        case "last":
          this.currentPage = this.pages.length;
          break;
      }
    }
  },
  components: {
    pokemonPage
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
