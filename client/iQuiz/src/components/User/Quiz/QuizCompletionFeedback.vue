<template>
  <div class="base-plate feedback-plate">
    <img src="../../../assets/high_five.svg" class="hand"/>
    <h1 class="heading">High five!</h1>
    <h4 class="subheading">Thank you for completing this form! Your feedback will be very valuable to us!</h4>
    <router-link to='/profile' class="profile-button" tag='span'>Go to your profile</router-link>
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
.feedback-plate
  padding: 0 4vw
  padding-top: 8vh
  height: 75vh

.heading
    color: #fff
    margin-bottom: 2vh

.subheading
    color: #fff
    margin-top: 1vh
    margin-bottom: 10vh
    font-weight: 500

.hand
    width: 200px
    height: 200px
    border: solid 5px #fff
    border-radius: 100px

.profile-button
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