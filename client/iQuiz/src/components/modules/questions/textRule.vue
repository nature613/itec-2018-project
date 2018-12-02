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

input{
    margin-bottom: 10%;
    padding: 15px;
    border:0;
    border-radius: 10px;
    color: #fff;
    background-color: #ba92cb;
    width: 80%;

}

input::placeholder{
    color: rgba(255,255,255,.6);

}

</style>
