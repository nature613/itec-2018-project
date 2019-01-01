<template>
    <div>
 
<!--  add a new component with some prop that tells if success or not, then display it and stuff when button is clicked. then go to see all questions page -->
        <span @click="buttonClicked">{{text}}</span>

    </div>
</template>

<script>

export default {
  name: 'addButton',
    data () {
        return {
            
        }
    },
    methods : {
        buttonClicked: function(){
            this.$emit('button-clicked');
        }
    },
    props:['text']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div{
  margin: 9% auto;

}
span{
  font-size: 27px;
  font-weight: 900;
  background-color: #fff;
  width: 15%;
  text-align: center;
  padding: 2vh 16vw;
  border-radius: 10px;
  cursor: pointer;
  color: #5F0683;
}

span:hover{
  box-shadow: 0 0 20px #000;
}

</style>
