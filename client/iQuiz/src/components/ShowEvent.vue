<template>
    <div class="hello">


    <div class="mainContent">
    
        <div class="content">
            <article class="topcontent1">
                <header>
                    <h2>{{event.title}}</h2>
                </header>
                

                <content>
                    <p>{{event.description}}
                    </p>
                </content>
            </article>
          
        </div>
      
    </div>
    <div class="mainContent">
    
        <div class="content1">
            <article class="topcontent2">
                <header>
                <input type="text" placeholder="Enter code" required/>
                </header>
                <footer>
                    <h4 class="post-info">Enter the code you were provided with.></h4>
                </footer>
            </article>
          
        </div>
    </div>
   
    </div>
</template>

 
<script>
export default {
  name: 'ShowEvent',
  data () {
    return {
        event:{
            title:'',
            description:''
        }
    }
  },
  mounted () {
    console.log(this.$store.state.token)
    this.$http.get('http://localhost:4000/api/event/'+this.$route.params.id).then((response)=>{
        this.event = response.data;
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>




content{
  justify-content: center;
  align-items: center;
  width: 90%;
  margin: 0 auto;
}

.topcontent1{
  background-color: #BA92CB;
  color: #FFFFFF;
  display: flex;

  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  height: 400px;
  width: 100%;
  ;
    

}
.content1{
  background-color: #8E44AD;
  color: #FFFFFF;
  display: flex;

  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  height: 400px;
  width: 100%;
  ;
}
.topcontent2{
  background-color: #8E44AD;
  color: #FFFFFF;
  display: flex;

  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  height: 400px;
  width: 100%;
  ;}
input{
    margin-bottom: 10%;
    padding: 15px;
    border:0;
    border-radius: 10px;
    color: #fff;
    background-color: #ba92cb;

}


</style>


