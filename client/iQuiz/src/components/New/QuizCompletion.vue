<template>
<div class="base-plate quiz-completion-plate">
    <div class="box">
		<img src="../../assets/trophy.svg" class="trophy-pic"/>
		<h1 class="heading">Congratulations!</h1>
		<p class="description"> Congrats for completing this quiz, your score is waiting for you down below! </p>
	</div>
	<div class="box">
        <div class="placeholder"></div>
		<p class="description"> If you want to get notified about your position by email when the event ends,
<a href="#">click here</a> </p>
        <router-link to='/profile' class="profile-button" tag='span'>Go to your profile</router-link>
	</div>
</div>
</template>
<script>
export default {
  name: 'Events',
  data () {
    return {
		profileDetails: null
    }
  },
  created () {
    console.log(this.$store.state.token)
	this.profileDetails = JSON.parse(localStorage.getItem('user'))
  }
}
</script>

<style scoped lang="sass">
.quiz-completion-plate
	padding: 8vh 4vw
	display: flex
	margin-bottom: 2vh
	flex-direction: column

.box
    width: 100%
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center

.trophy-pic
	width: 200px
	height: 200px
	border: solid 5px #fff
	border-radius: 100px

.heading
    color: #fff
    margin-bottom: 3vh

.description
    color: #fff

a
    color: #fff

.placeholder
	width: 300px
	height: 300px
	background-color: #fff
	margin: 2vh auto

.profile-button
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
	.quiz-completion-plate
		flex-direction: row

	.box
        width: 50%
</style>
