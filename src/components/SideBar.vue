<template>
  <section class="side-bar">
      <router-link to="/">Pokemon List</router-link>
      <router-link to="/team">My Team</router-link>
  </section>
</template>

<script>

export default {

}
</script>

<style scoped>
    .side-bar {
        display: flex;
        justify-content: space-around;
    }
</style>

