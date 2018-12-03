<template>
 <div>
    <input type="text" v-model="correctAnswers[0]" placeholder="Correct answer" required />
 </div>            
</template>

<script>


export default {
  name: 'textRule',
    data () {
        return {
            
        }
    },
    methods : {

    },
    mounted () {
        console.log(this.$store.state.token)
    },
    props: ['correct-answers']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 5px;
    background-color: rgba(255, 255, 255, 0.1);
    padding: 15px 0;
    border-radius: 10px;
}

input{
    padding: 15px;
    border:0;
    border-radius: 10px;
    color: #fff;
    background-color: #ba92cb;
    width: 80%;

}

input::placeholder{
    color: rgba(255,255,255,.9);

}

</style>
