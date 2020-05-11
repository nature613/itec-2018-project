<template>
<div class="base-plate dashboard-plate">
    <h1 class="heading">Add new admin</h1>

    <input type="text" v-model="registerData.name" placeholder="Full name" name='name'/>

    <input type="password" v-model="registerData.password" placeholder="Password" name='password'/>

    <input type="email" v-model="registerData.email" placeholder="Email address" name='email'/>

    <span class="buton" @click="addAdmin">Add admin</span>
    <span class="buton" @click="$emit('admin-mode');">Cancel</span>
  </div>
</template>

<script>
import UserService from '@/services/UserService'

export default {
  data () {
    return {
      registerData: {
        email: '',
        password: '',
        name: '',
      },
    }
  },
  components:{

  },
  methods: {
    async addAdmin(){
      try{
        const user = await UserService.createAdmin(this.registerData);
        this.$emit('admin-mode');
      }
      catch(err){
        console.log(err)
      }
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
.heading
    font-weight: bold
    font-size: 48px
    margin-top: 10%
    color: #fff
    margin-bottom: 6vh
    margin-top: 0

.dashboard-plate
  padding: 2vh 2vw
  min-height: 75vh
  margin-bottom: 4vh
  display: flex
  flex-direction: column
  align-items: center

.buton
  font-size: 27px
  font-weight: 700
  background-color: #fff
  width: 80%
  text-align: center
  padding: 2% 7.5%
  box-sizing: border-box
  border-radius: 10px
  cursor: pointer
  color: #5f0683

  &:hover
    box-shadow: 0 0 15px #000

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

  &[type='text']
    background-image: url('../../../assets/person.svg')

  &[type="email"]
    background-image: url('../../../assets/email.svg')

  &[type='password']
    background-image: url('../../../assets/password.svg')

@media (min-width: 900px)
  input
    width: 30vw
    margin-bottom: 10vh

  .buton
    margin: 1vh auto
    width: 40%
</style>