<template>
<div class="base-plate about-plate">
  <h2 class="heading">This is an app created for iTEC 2018. The purpose of the app is to help events and contest organizers get input from users and understand their data.<br><br>
The original app was made in 2 days :))</h2>
</div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
    }
  },
  mounted () {
    console.log(this.$store.state.token)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
.heading 
  color: #fff

.about-plate
  height: 75vh
  display: flex
  justify-content: center
  align-items: center
  padding: 4vh 3vw

</style>