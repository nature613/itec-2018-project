<template>
<div class="base-plate profile-plate">
    <div class="box">
		<img src="../assets/profileplaceholder.svg" class="profile-pic"/>
		<h1 class="heading">{{profileDetails.name}}</h1>
		<!--TODO: Add email icon here-->
		<h4 class="subheading"> {{profileDetails.email}} </h4>
	</div>
	<div class="box">
		<div class="placeholder"></div>
		<div class="placeholder"></div>
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
.profile-plate
	padding: 8vh 3vw
	display: flex
	margin-bottom: 2vh
	flex-direction: column

.box
	width: 100%
	display: flex
	flex-direction: column
	align-items: center

.profile-pic
	width: 200px
	height: 200px
	border: solid 5px #fff
	border-radius: 100px

.heading
    color: #fff
    margin-bottom: 3vh

.subheading
    color: #fff
    margin-top: 1vh
    margin-bottom: 5vh
    font-weight: 500

.placeholder
	width: 300px
	height: 300px
	background-color: #fff
	margin: 2vh auto

@media (min-width: 900px)
	.profile-plate
		flex-direction: row
	.box
		width: 50%
</style>
