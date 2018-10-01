<template>
  <section class="home-page">
    <app-header></app-header>
    <app-body></app-body>
    <app-footer></app-footer>
  </section>
</template>

<script>
import appHeader from './Header';
import appFooter from './Footer';
import appBody from './Body';

export default {
  components: {
    appHeader,
    appFooter,
    appBody
  }
}
</script>
