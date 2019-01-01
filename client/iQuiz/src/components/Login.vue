<template>
  <div class="hello">
    <div class="buttons-plate">
      <form>
        <h2>Log in</h2>
        <input type="email" v-model="data.body.email" placeholder="Email" required/>
        <input type="password" v-model="data.body.password" placeholder="Password" required/>
      </form>
      <span @click="login">LOGIN</span>
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
      login: function(){
          this.$http.post('http://localhost:4000/api/authenticate', this.data.body, {'timeout': 10000}).then((response)=>
          {
              console.log(response.data.data.token);
              this.$store.state.token = response.data.data.token;
          })
      }
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
