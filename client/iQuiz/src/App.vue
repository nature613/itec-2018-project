<template>
  <div id="app">
    <app-header></app-header>
    <router-view/>
  </div>
</template>

<script>
import header from './components/header'

export default {
  name: 'App',
  components: {
    'app-header': header
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto:400,700,900');
#app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body, html{
  margin: 0
}
</style>
