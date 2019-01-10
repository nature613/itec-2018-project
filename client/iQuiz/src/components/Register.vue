<template>
  <div class="hello">
    <div class="buttons-plate">
      <form>
        <h2>Register</h2>

        <error-message :error-list="errors" validator="name"></error-message>
        <input type="text" v-model="registerData.name" placeholder="Full name" v-validate="'required'" name='name'/>

        <error-message :error-list="errors" validator="password"></error-message>
        <input type="password" v-model="registerData.password" placeholder="Password" v-validate="'required|min:8'" name='password'/>

        <error-message :error-list="errors" validator="email"></error-message>
        <input type="email" v-model="registerData.email" placeholder="Email address"  v-validate="'required|email'" name='email'/>
      
      </form>

      <span @click='register'>REGISTER</span>
      <router-link to='login' class="switchlink" tag='h5'>Already have an account? Login</router-link>
    </div>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

import errorMessage from './modules/errorMessage'

export default {
  name: 'Register',
  data () {
    return {
      registerData: {
        email: '',
        password: '',
        name: '',
      },
    }
  },
  methods: {
      async register(){
        if(!this.errors.any() && !(this.registerData.email === '') && !(this.registerData.password === '') && !(this.registerData.name === '')){
          try{
            const status = await AuthenticationService.register(this.registerData)
            alert("We've sent you a confirmation email! Check it out :D")
            this.$router.push('/login')
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
<style scoped>


.buttons-plate{
  width: 319px;
  height: 644px;
  background-color: rgba(186, 146, 203, 0.6);
  border-radius: 28px;
  display: flex;
  align-items: center;
  flex-direction: column;
}

h2{
  font-weight: bold;
  font-size: 48px;
  margin-top: 20%;
  text-align: center;
  color: #fff
}

span{
  font-size: 27px;
  font-weight: 900;
  background-color: #8E44AD;
  width: 55%;
  margin: 10% auto;
  text-align: center;
  padding: 3% 15%;
  border-radius: 10px;
  cursor: pointer;
  color: #fff;
}

span:hover{
  box-shadow: 0 0 20px #000;
}

.buttons-plate form{
  display: flex;
  flex-direction: column;
}

input[type="email"], input[type='password'], input[type="text"]{
  margin-bottom: 10%;
  padding: 15px 15px 15px 55px;
  border:0;
  border-radius: 10px;
  color: #fff;
}

input[type="email"]::placeholder, input[type='password']::placeholder, input[type="text"]::placeholder{
  color: rgba(255,255,255,.6);
}

input[type='text']{
  background-color: rgba(141, 68, 173, 0.644);
  background-image: url('../assets/ic_person_outline_white_24px.svg');
  background-position: 10px 10px; 
  background-repeat: no-repeat;
}

input[type="email"]{
  background-color: rgba(141, 68, 173, 0.644);
  background-image: url('../assets/ic_email_white_24px.svg');
  background-position: 10px 10px; 
  background-repeat: no-repeat;
}

input[type='password']{
  background-color: rgba(141, 68, 173, 0.644);
  background-image: url('../assets/ic_lock_white_24px.svg');
  background-position: 10px 10px; 
  background-repeat: no-repeat;
}

.switchlink{
  color: #fff;
  text-decoration: none;
  cursor: pointer
}

.switchlink:hover{
  color: #8E44AD;
}

select{
  appearance:none;
  -webkit-appearance:none;
  -moz-appearance:none;
  -ms-appearance:none;
  -o-appearance:none;
  margin-bottom: 10%;
  padding: 15px 55px 15px 55px;
  border:0;
  border-radius: 10px;
  color: #fff;
  background-color: rgba(40,128,199,.4);
  background-image: url('../assets/ic_school_white_24px.svg'), url('../assets/ic_keyboard_arrow_down_white_24px.svg');
  background-position: 10px 10px, 95% center; 
  background-repeat: no-repeat;
}

@media (min-width: 900px){
  .buttons-plate{
    width: 45%;
    height: 80%;
  }

  input[type="email"], input[type='password']{
    margin-bottom: 10%;
    padding: 15px 15px 15px 55px;
    border:0;
    border-radius: 10px;
    width: 25vw;
  }

  h2{
    margin-top: 5%;
  }

  span{
    margin: 5% auto;
  }
}
</style>
