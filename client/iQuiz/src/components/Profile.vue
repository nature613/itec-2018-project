<template>
<div class="hello">
     <div class="topcontent1">
               <h2>Name</h2>
    </div>
    
    <div class="topcontent2">
    	<h3>Expired</h3>
        <h4>In Progress</h4>
    	<h5>Incomplete</h5>		
    </div>

    <div class="topcontent3">
    	<h6>Search...</h6>
    </div>

    <div class="topcontent4">
    	<header class="mainheader2">
    		<b>Quiz</b>
    		<a>Score:..</a>
    	</header>
    	
    </div>
    <div class="topcontent5">
    	<header class="mainheader2">
    		<b>Quiz</b>
    		<a>Score:..</a>
    	</header>
    	
    </div>
    <div class="topcontent6">
    	<header class="mainheader2">
    		<b>Quiz</b>
    		<a>Score:..</a>
    	</header>
    	
    </div>
</div>
</template>
<script>
export default {
  name: 'Events',
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

h2{
	padding: 0;
	text-align: center;
	align-items: center;
	margin-right: auto;
	margin-left: auto;
	color: #FFFFFF;
	font-size: 40px;


}
.topcontent1{
	background-color: #8E44AD;
	color: #FFFFFF;
	display: flex;
    
	flex-flow: row wrap;
	align-items: left;
	height: 150px;
	width: 100%;
	;
    

}
.topcontent2{
	display: flex;
	align-items: center;
	justify-content: center;
	flex-flow: column wrap;
	margin-left: 0;

	height:100px;
	width: 100%;
}
h3{
	
	display: flex;
	flex-grow: 5;
	font-size: 25px;
	justify-content:center;
	height: 150px;
	margin: 0;
	width: 33.3%;
	background-color:#5F0683;
	text-align: center;
	align-items: center;
	color: #FFFFFF;

	

}
h4{
	
	display: flex;
	flex-grow:5;
	font-size: 25px;
	justify-content:center;
	height: 150px;
	margin: 0;
	width: 33.3%;
	background-color: #D7CBCB;
	text-align: center;
	align-items: center;
	color: #8E44AD;
	

}
h5{
	
	display: flex;
	flex-grow:5;
	font-size: 25px;
	justify-content:center;
	height: 15000px;
	margin:0;
	width: 33.3%;
	background-color: #5F0683;
	text-align: center;
	align-items: center;
	color: #FFFFFF;
	


}
.topcontent3{
	background-color: #BA92CB;
	color: #5F0683 ;
	display:flex;
	align-items: center;
	margin: auto;
	height: 50px;
    width: 100%;

}
h6{
	margin-left: 20px;
	font-size: 20px ;
	
}

.topcontent4{
	display: flex;
	flex-direction: column;
	background-color: #8E44AD;
	color: #FFFFFF;
	align-items: left ;
	margin: auto;
	height: 300px ;
    width: 100%;
	

}

b{
	margin-left:20px;
	margin: 20px;
	font-size: 40px;
	display: flex;
	flex-direction: column;
}
a{
	margin-left: 20px;
	font-size: 30px;
	display:flex;
	flex-direction: column;
}
.topcontent5{
	display: flex;
	flex-direction: column;
	background-color: #D7CBCB;
	color: #FFFFFF;
	align-items: left ;
	height: 300px ;
    width: 100%;
	

}
.topcontent6{
	display: flex;
	flex-direction: column;
	background-color: #BA92CB;
	color: #FFFFFF;
	margin: auto;
	height: 300px ;
	width:100%;
    justify-content: left;

}

</style>
