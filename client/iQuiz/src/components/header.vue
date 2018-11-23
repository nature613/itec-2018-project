
<template>
	<div>
	  <div class="header">
          <h3>iQuiz</h3>
	  </div>
	  <img src="../assets/ic_menu_white_24px.svg" id="lol" >
	  <div class="push"></div>
	</div>
</template>

<script>

export default {
  name: 'Header',
	computed: {
	    
	  },
	methods: {
  		
	  }
}
</script>

<style>
/* eslint-disable */

.header{
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
}


#lol{
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
}

h3{
    color: #fff;
		font-size: 2rem;
}
.push{
    margin-bottom: 10vh;
}
</style>
