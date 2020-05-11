<template>
  <div class="base-plate dashboard-plate">
    <h1 class="heading">Dashboard</h1>
    <div class="profile-plate">
      <div class="box">
        <div class="placeholder">
          <h6 class="title">User logins per day</h6>
        </div>
        <div class="placeholder">
          <h6 class="title">Quiz completions this month</h6>
        </div>
        <div class="placeholder">
          <h6 class="title">Average quiz scores this month</h6>
        </div>
      </div>
      <div class="box">
        <router-link to="questions" tag="div" class="placeholder">
          <img src="../../assets/admin-manage-stuff.svg"/>
          <h6 class="title">Manage questions pool</h6>
        </router-link>
        <router-link to="events" tag="div"  class="placeholder">
          <img src="../../assets/admin-manage-stuff.svg"/>
          <h6 class="title">Manage events pool</h6>
        </router-link>
        <router-link to="users" tag="div"  class="placeholder">
          <img src="../../assets/admin-manage-users.svg"/>
          <h6 class="title">Manage user accounts</h6>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return{

    }
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
.dashboard-plate
  padding: 4vh 6vw

.heading
    font-weight: bold
    font-size: 48px
    margin-top: 10%
    color: #fff
    margin-bottom: 2vh
    margin-top: 0

.profile-plate
	display: flex
	margin-bottom: 2vh
	flex-direction: column

.box
	width: 100%
	display: flex
	flex-direction: column
	align-items: center

.heading
    color: #fff
    margin-bottom: 3vh

/*Maybe change this class name later? */
.placeholder
  width: 300px
  height: 300px
  border: solid 2px #fff
  border-radius: 10px
  margin: 2vh auto
  display: flex
  align-items: center
  justify-content: center
  flex-direction: column
  cursor: pointer

  &:hover
    border: solid 5px #fff

.title
  color: #fff
  font-size: 18px

@media (min-width: 900px)
	.profile-plate
		flex-direction: row
	.box
		width: 50%
</style>
