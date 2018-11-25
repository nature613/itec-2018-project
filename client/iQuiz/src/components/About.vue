<template>
<div class="hello">
   
               <div class="content">
               	<div>
                <h1>foca</h1>
                <p>This is an app created for iTEC 2018. The purpose of the app is to help events and contest organizers get input from users and understand their data.

Made in 2 days :))</p>
</div>
               </div>
</div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
    }
  },
  mounted () {
    console.log(this.$store.state.token)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
	height: 90vh;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: #8E44AD;
}

p{
  padding: 0;
  text-align: center;
  align-items: center;
  margin-right: 30px;
  margin-left: 30px;
  color: #FFFFFF;
  font-size: 20;


}

.content{
  display:flex;
  width: 70%;
  background-color: #BA92CB;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 80%;
  border-radius: 8px;
}




</style>