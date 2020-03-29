<template>
  <div class="base-plate buttons-plate">
      <form>
        <h2>Login</h2>

        <error-message :error-list="errors" validator="email"></error-message>
        <input type="email" v-model="body.email" placeholder="Email" v-validate="'required|email'" name='email'/>

        <error-message :error-list="errors" validator="password"></error-message>
        <input type="password" v-model="body.password" placeholder="Password" v-validate="'required'" name='password'/>
      
      </form>

      <span @click="login">LOGIN</span>
      <router-link to='register' class="switchlink" tag='h5'>Don't have an account? Register here</router-link>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

import errorMessage from './modules/errorMessage'

export default {
  name: 'Login',
  data () {
    return{
      body: {
        email: '',
        password: ''
      },
    }
  },
  methods: {
    async login(){
      if(!this.errors.any() && !(this.body.email === '') && !(this.body.password === '')){
        try{
          const response = (await AuthenticationService.login(this.body)).data
          // console.log(response.data);
          localStorage.setItem('user',JSON.stringify(response.data.user))
          localStorage.setItem('jwt',response.data.token)
          this.$store.commit('switchUserState')
          this.$router.push('/dashboard')
        }
        catch(err){
          console.log(err)
        }
      }
    }
  },
  components:{
    errorMessage
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
  .buttons-plate
    display: flex
    align-items: center
    flex-direction: column
    height: 80vh
    margin-top: 15vh

    form
    display: flex
    flex-direction: column

  h2
    font-weight: bold
    font-size: 48px
    margin-top: 20%
    text-align: center
    color: #fff

  span
    font-size: 27px
    font-weight: 900
    background-color: #fff
    width: 55%
    margin: 10% auto
    text-align: center
    padding: 3% 15%
    border-radius: 10px
    cursor: pointer
    color: #5F0683
    
    &:hover
      box-shadow: 0 0 20px #000

  input
    margin-bottom: 10%
    padding: 15px 15px 15px 55px
    border: 0
    border-radius: 10px
    color: #af83c1
    background-color: #fff
    background-position: 10px 10px
    background-repeat: no-repeat

    &::placeholder
      color: #af83c1

    &[type="email"]
      background-image: url('../assets/email.svg')

    &[type='password']
      background-image: url('../assets/password.svg')

  .switchlink
    color: #fff
    text-decoration: none
    cursor: pointer

    &:hover
      color: #8E44AD


  @media (min-width: 900px)
    .buttons-plate
      width: 60vw
      height: 85vh
      margin-top: 12vh

    input
      width: 30vw
      margin-bottom: 10vh
    
    h2
      margin-top: 5%
    
    span
      margin: 1vh auto
      width: 20vw
</style>