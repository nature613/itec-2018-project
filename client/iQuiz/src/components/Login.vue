<template>
  <div class="hello">
    <div class="buttons-plate">
      <form>
        <h2>Log in</h2>
        <input type="email" v-model="data.body.email" placeholder="Email" required/>
        <input type="password" v-model="data.body.password" placeholder="Password" required/>
      </form>
      <span @click="signIn">LOGIN</span>
      <h5><router-link to='register' class="switchlink">Don't have an account? Register here</router-link></h5>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Login',
  data () {
  return{
    data: {
        body: {
            email: '',
            password: ''
        },
    },
  }
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  color: #fff;
  overflow: auto;
  position: relative;
}

.hello:before {
  content: "";
  position: fixed;
  left: 0;
  right: 0;
  z-index: -1;

  display: block;
  background-image: url('../assets/code-1839406.jpg');
  background-size:cover;
  width: 100%;
  height: 100%;

  -webkit-filter: blur(5px);
  -moz-filter: blur(5px);
  -o-filter: blur(5px);
  -ms-filter: blur(5px);
  filter: blur(5px);
}

.buttons-plate{
  width: 319px;
  height: 501px;
  background-color: rgba(144,202,249,.6);
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
  background-color: #2880C7;
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
  background-color: rgba(40,128,199,.4);
  background-image: url('../assets/ic_email_white_24px.svg');
  background-position: 10px 10px; 
  background-repeat: no-repeat;
}

input[type='password']{
  background-color: rgba(40,128,199,.4);
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
