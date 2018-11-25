<template>
    <div class="hello">


    <div class="mainContent">
    
        <div class="content">
            <article class="topcontent1">
                <header>
                    <h2>1914 translation</h2>
                </header>
                

                <content>
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
                    </p>
                </content>
            </article>
          
        </div>
      
    </div>
    <div class="mainContent">
    
        <div class="content1">
            <article class="topcontent2">
                <header>
                    <h2>Enter code</h2>
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
    }
  },
  mounted () {
    console.log(this.$store.state.token)
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
  ;
    

}

</style>


