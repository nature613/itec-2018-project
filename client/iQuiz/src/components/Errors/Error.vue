<template>
  <div class="base-plate error-plate">
    <img src="../../assets/denied.svg" class="checkbox"/>
    <h1 class="heading">Something went 
really wrong :(</h1>
    <h4 class="subheading">It appears something happened while you were browsing our app. Please try reloading the webpage!</h4>
  </div>
</template>

<script>

export default {
  data () {
    return {
    }
  },
  components:{
  },
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
.error-plate
  padding: 0 4vw
  padding-top: 8vh
  height: 75vh

.heading
    color: #fff
    margin-bottom: 2vh

.subheading
    color: #fff
    margin-top: 3vh
    margin-bottom: 10vh
    font-weight: 500

.checkbox
    width: 200px
    height: 200px
    padding: 30px
    box-sizing: border-box
    border: solid 5px #fff
    border-radius: 100px

@media (min-width: 900px)
    .checkbox
        margin-bottom: 10vh
</style>