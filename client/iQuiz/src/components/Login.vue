<template>
  <div class="hello">
    <div class="buttons-plate">
      <form>
        <h2>Log in</h2>

        <error-message :error-list="errors" validator="email"></error-message>
        <input type="email" v-model="body.email" placeholder="Email" v-validate="'required|email'" name='email'/>

        <error-message :error-list="errors" validator="password"></error-message>
        <input type="password" v-model="body.password" placeholder="Password" v-validate="'required'" name='password'/>
      
      </form>

      <span @click="login">LOGIN</span>
      <router-link to='register' class="switchlink" tag='h5'>Don't have an account? Register here</router-link>
    </div>
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
          const response = await AuthenticationService.login(this.body)
          // console.log(response);
          this.$store.commit('setToken', response.data.data.token);
          this.$store.commit('setUser', response.data.data.user);
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
<style scoped>
.hello{
  height: 100vh;
}
.buttons-plate{
  width: 319px;
  height: 501px;
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

input[type="email"], input[type='password']{
  margin-bottom: 10%;
  padding: 15px 15px 15px 55px;
  border:0;
  border-radius: 10px;
  color: #fff;
}

input[type="email"]::placeholder, input[type='password']::placeholder{
  color: rgba(255,255,255,.6);
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
