<template>
  <div class="base-plate error-plate">
    <img src="../../assets/defend.svg" class="checkbox"/>
    <h1 class="heading">Sorry, you are
not allowed to
view this content</h1>
    <h4 class="subheading">It appears you do not have enough permissions to view use this resource. If you think this is a mistake, please contact the system admin!</h4>
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
    padding: 20px
    box-sizing: border-box
    border: solid 5px #fff
    border-radius: 100px

@media (min-width: 900px)
    .checkbox
        margin-bottom: 10vh
</style>