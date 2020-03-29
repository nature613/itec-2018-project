<template>
  <div>
    <img src="../../assets/check.svg" class="checkbox"/>
    <h1 class="heading">You're all set!</h1>
    <h4 class="subheading">The QR code you have provided is valid</h4>
    <router-link to='/login' class="login-button" tag='span'>Next step (Login)</router-link>
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
.heading
    color: #fff
    margin-bottom: 2vh

.subheading
    color: #fff
    margin-top: 1vh
    margin-bottom: 10vh
    font-weight: 500

.checkbox
    width: 200px
    height: 200px
    border: solid 5px #fff
    border-radius: 100px

.login-button
    font-size: 27px
    font-weight: 700
    background-color: #fff
    width: 30%
    text-align: center
    padding: 2% 7.5%
    border-radius: 10px
    cursor: pointer
    color: #5f0683

    &:hover
      box-shadow: 0 0 15px #000
</style>