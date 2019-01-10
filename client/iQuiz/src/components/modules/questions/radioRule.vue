<template>
 <div>
    <h3>Answers</h3>
    <input v-for="(answer, index) in answers" :key="index" v-model="answers[index]"/>
    <p @click="addAnswer">+ ADD ANSWER FIELD</p>
    <p @click="removeAnswer">- REMOVE ANSWER FIELD</p>

    <h3>Correct answers</h3>
    <input v-for="(answer, index) in correctAnswers" :key="answer" v-model="correctAnswers[index]"/>
 </div>            
</template>

<script>


export default {
  name: 'radioRule',
    data () {
        return {
            
        }
    },
    methods : {
        addAnswer: function(){
            this.answers.push('')

        },        
        removeAnswer: function(){
            this.answers.pop()
        }
    },
    mounted () {
        console.log(this.$store.state.token)
    },
    props: ['correct-answers', 'answers']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='sass'>
    div
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 5px;
        background-color: rgba(255, 255, 255, 0.1);
        padding: 15px 0;
        border-radius: 10px;
    
    input
        margin-bottom: 10%;
        padding: 15px;
        border: 0;
        border-radius: 10px;
        color: #fff;
        background-color: #ba92cb;
        width: 80%;
        &::placeholder
            color: rgba(255,255,255,.6);

    h3
        margin-top: 0
    
    P
        margin-top: 0;
        border: 3px solid #fff;
        width: 50%;
        padding: 2%;
        border-radius: 10px;
        color: #fff;
        cursor: pointer;
        font-weight: bold
        &:hover
            color: #ba92cb;
            background-color: #fff;
            color: #8E44AD;
</style>
