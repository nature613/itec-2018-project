<template>
  <div>
    <img src="../../assets/close.svg" class="checkbox"/>
    <h1 class="heading">Something is wrong!</h1>
    <h4 class="subheading">It appears your QR code has already been used. If you think this is a mistake, please contact the quiz admin.</h4>
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
  
@media(min-width: 900px)
  .subheading
      width: 40vw
      margin: 0 auto
</style>