<template>
  <div id="app">
    <headerBar></headerBar>
    <router-view/>
    <footerBar></footerBar>
  </div>
</template>

<script>
import headerBar from './components/headerBar.vue'
import footerBar from './components/footerBar.vue'

export default {
  name: 'App',
  components: {
    headerBar,
    footerBar
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
