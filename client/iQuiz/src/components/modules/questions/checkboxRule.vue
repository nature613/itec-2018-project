<template>
 <div>
    <h3>Answers</h3>
    <input v-for="(answer, index) in answers" :key="index" v-model="answers[index]"/>
    <p @click="addAnswer(0)">+ ADD ANSWER FIELD</p>
    <p @click="removeAnswer(0)">- REMOVE ANSWER FIELD</p>

    <h3>Correct answers</h3>
    <input v-for="(answer, index) in correctAnswers" :key="index+100" v-model="correctAnswers[index]"/>
    <p @click="addAnswer(1)">+ ADD ANSWER FIELD</p>
    <p @click="removeAnswer(1)">- REMOVE ANSWER FIELD</p>
 </div>            
</template>

<script>


export default {
  name: 'checkboxRule',
    data () {
        return {
            
        }
    },
    methods : {
        addAnswer: function(type){
            if (type==0){
                this.answers.push('')
            }
            else if (type==1){
                this.correctAnswers.push('')
            }
        },        
        removeAnswer: function(type){
            if (type==0){
                this.answers.pop()
            }
            else if (type==1){
                this.correctAnswers.pop('')
            }
        }
    },
    mounted () {
        console.log(this.$store.state.token)
    },
    props: ['correct-answers', 'answers']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 5px;
    background-color: rgba(255, 255, 255, 0.1);
    padding: 15px 0;
    border-radius: 8px;
}
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
h3{
    margin-top: 0
}
P{
    margin-top: 0;
    border: 3px solid #fff;
    width: 50%;
    padding: 2%;
    border-radius: 10px;
    color: #fff;
    cursor: pointer;
    font-weight: bold

}
p:hover{
    color: #ba92cb;
    background-color: #fff;
    color: #8E44AD;
}
</style>
