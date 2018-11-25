<template>
  <div class="hello">
    <div class="buttons-plate">
      <form>
        <h2>Register</h2>
        <input type="text" v-model="registerData.name" placeholder="Full name" required/>
        <input type="password" v-model="registerData.password" placeholder="Password" required/>
        <input type="email" v-model="registerData.email" placeholder="Email address" required/>
      </form>
      <span @click='register'>REGISTER</span>
      <h5><router-link to='login' class="switchlink">Already have an account? Login</router-link></h5>
    </div>
  </div>
</template>

<script>

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
      register: function(){
          this.$http.post('http://localhost:4000/register').then((status) =>
          {alert("We've sent you a confirmation email! Check it out :D")})
      }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  overflow: auto;
  position: relative;
  margin-top: 15vh;
  margin-bottom: 5vh;
}

.hello:before {
  content: "";
  position: fixed;
  left: 0;
  right: 0;
  z-index: -1;
  top: -10px;

  display: block;
  background-image: url('../assets/code-1839406.jpg');
  background-size:cover;
  width: 100%;
  height: 110%;

  -webkit-filter: blur(5px);
  -moz-filter: blur(5px);
  -o-filter: blur(5px);
  -ms-filter: blur(5px);
  filter: blur(5px);
}

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
}

.switchlink:hover{
  color: #2880C7;
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
