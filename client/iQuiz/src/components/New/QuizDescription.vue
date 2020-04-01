<template>
  <div class="base-plate quiz-plate">
    <div class="placeholder"></div>
    <div class="container">
        <div class="box">   
            <h1 class="heading"> Generic quiz name</h1>
            <p class="description"> Description: <br><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        </div>
        <div class="box">
            <router-link to='/dashboard' class="quiz-button" tag='span'>Take quiz</router-link>
        </div>
    </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      positive: true,
    }
  },
  mounted () {
    //store in vuex the id of the quiz (if positive)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
.quiz-plate
    padding: 0 
    padding-bottom: 8vh
    height: 75vh

.placeholder
    width: 100%
    height: 40%
    background-color:#c3c3c3

.container
    display: flex
    flex-direction: column

.box
    padding: 2vh 6vw
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center


.heading
    color: #fff

.description
    color: #fff

.quiz-button
    font-size: 27px
    font-weight: 700
    background-color: #fff
    width: 70%
    text-align: center
    padding: 2% 7.5%
    border-radius: 10px
    cursor: pointer
    color: #5f0683

    &:hover
      box-shadow: 0 0 15px #000
      
@media (min-width: 900px)
	.container
		flex-direction: row
	.box
        width: 50%
        padding: 10vh 6vw
</style>