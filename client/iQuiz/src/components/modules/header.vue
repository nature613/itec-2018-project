
<template>
	<div>
	  <div class="header">
      <h3>iQuiz</h3>
	  </div>
	  <img src="../../assets/ic_menu_white_24px.svg" id="lol" @click="menuToggled = !menuToggled" >
	  <div class="push"></div>
    <div class="sidebar" v-bind:class="{'sidebar-active':menuToggled}">
      <div class="nav-header">
        <h2>Menu</h2>
        <img src="../../assets/ic_arrow_back_white_24px.svg" id="arrow-back" @click="menuToggled = !menuToggled">
      </div>
      <ul>
        <router-link v-if='isUserLoggedIn'  to='/addevent' class='item' tag='li'>Add event</router-link>
        <router-link v-if='isUserLoggedIn'  to='/addquestion' class='item' tag='li'>Add question</router-link>
        <router-link v-if='isUserLoggedIn'  to='/events' class='item' tag='li'>See events</router-link>
        <router-link v-if='isUserLoggedIn'  to='/questions' class='item' tag='li'>See questions</router-link>
        <router-link v-if='isUserLoggedIn'  to='/profile' class='item' tag='li'>Profile</router-link>
        <router-link v-if='!isUserLoggedIn' to='/login' class='item' tag='li'>Log in</router-link>
        <router-link v-if='!isUserLoggedIn' to='/register' class='item' tag='li'>Register</router-link>
        <router-link  to='/about' class='item' tag='li'>About this project</router-link>
        <li class='item' v-if='isUserLoggedIn' @click='logOut'>Log out</li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Header',
  data(){
    return {
      menuToggled: false,
      selectedComponent: this.$route.path,

    }
  },
	computed: {
	    isUserLoggedIn(){
        return this.$store.getters.getUserStatus
      }
  },
	methods: {
  		logOut(){
        this.$store.commit('logoutUser');
        this.$router.push('/login')
      }
  },
  mounted(){
    console.log(this.$route.path)
  }
}
</script>

<style lang='sass'>
  .header
      height: 10vh;
      width: 100%;
      background-color: #5F0683;
      display: flex;
      justify-content: center;
      align-items: center;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 100;
      box-shadow: 0px 1px 10px rgb(0,0,0);
      align-self: flex-start;

  #lol
    width: 25px;
    height: 25px;
    padding: 5px;
    border: 2px #fff solid;
    border-radius: 5px;
    position: fixed;
    top: 2vh;
    left: 4vh;
    z-index: 200;
    cursor: pointer;

  .push
      margin-bottom: 10vh;

  .sidebar
      position: fixed;
      top: 0;
      left: -250px;
      background: #FFF;
      width: 250px;
      height: 100%;
      transition: .3s;
      z-index: 998;
      overflow-y: hidden;
      color: #8E44AD;
      display: flex;
      flex-direction: column;
      align-items: center

      ul
        list-style: none;
        padding: 0;
        width: 85%;

        li
          cursor: pointer;
          margin-bottom: 20px;

  .sidebar-active
      left: 0;

  .nav-header
    display: flex;
    margin-left: 4%;
    align-items: center;
    padding: 0 3%;
    width: 85%;
    align-items: center

  #arrow-back
    width: 30px;
    height: 30px;
    cursor: pointer;

  .selected
    background-image: url('../../assets/baseline-arrow_left-24px.svg');
    background-position: 85% center; 
    background-repeat: no-repeat;

  h2
    flex-grow: 1;

  .item
    text-decoration: none;
    color: #8E44AD;
    font-weight: bold;
</style>
