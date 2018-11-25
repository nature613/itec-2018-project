<template>
    <div class="hello">
        <div class="buttons-plate">
            <h2>Add Quiz</h2>
            <input type="text" v-model="body.title" placeholder="Title" required/>
            <select required v-model="body.quizType">
                <option disabled selected value style="color:rgba(255,255,255,.6);"> Quiz type </option>
                <option>Scored</option>
                <option>Non-scored</option>
            </select>
            <select required v-model="body.difficulty">
                <option disabled selected value style="color:rgba(255,255,255,.6);"> Difficulty </option>
                <option>Easy</option>
                <option>Medium</option>
                <option>Hard</option>
            </select>
            <input type="text" v-model="body.category" placeholder="Category" required/>
            
            <h4>Rule 1</h4>
            <input type="text" v-model="body.rules[0].numberofQuestionsInRule" placeholder="Number of questions" required/>
            <select required v-model="body.rules[0].rule.typeOfQuestionsInRule">
                <option disabled selected value style="color:rgba(255,255,255,.6);"> Questions type </option>
                <option>Text</option>
                <option>Radio</option>
                <option>Check</option>
            </select>
            <select required v-model="body.rules[0].difficultyOfQuestionsInRule">
                <option disabled selected value style="color:rgba(255,255,255,.6);"> Difficulty </option>
                <option>Easy</option>
                <option>Medium</option>
                <option>Hard</option>
            </select>
            <input type="text" v-model="body.rules[0].categoryOfQuestionsInRule" placeholder="Category" required/>
            
            <h4>Rule 2</h4>
            <input type="text" v-model="body.rules[0].numberofQuestionsInRule" placeholder="Number of questions" required/>
            <select required v-model="body.rules[0].rule.typeOfQuestionsInRule">
                <option disabled selected value style="color:rgba(255,255,255,.6);"> Questions type </option>
                <option>Text</option>
                <option>Radio</option>
                <option>Check</option>
            </select>
            <select required v-model="body.rules[0].difficultyOfQuestionsInRule">
                <option disabled selected value style="color:rgba(255,255,255,.6);"> Difficulty </option>
                <option>Easy</option>
                <option>Medium</option>
                <option>Hard</option>
            </select>
            <input type="text" v-model="body.rules[0].categoryOfQuestionsInRule" placeholder="Category" required/>
            <span @click="addQuestion">ADD</span>

            
        </div>
    </div>
</template>

<script>

export default {
  name: 'AddQuiz',
    data () {
        return {
            body: {
                title: '',
                difficulty: '',
                quizType: '',
                category: '',
                correctAnswers: [],
                questionType: 0,
                rules:[{
                    numberofQuestionsInRule: 0,
                    typeOfQuestionsInRule: 0,
                    difficultyOfQuestionsInRule: 0,
                    categoryOfQuestionsInRule: 0
                },
                {
                    numberofQuestionsInRule: 0,
                    typeOfQuestionsInRule: 0,
                    difficultyOfQuestionsInRule: 0,
                    categoryOfQuestionsInRule: 0
                },]
            },
            
        }
    },
    methods : {
        addQuestion: function(){
            console.log(this.body.quizType);
            var payload = this.body;
            if(this.body.quizType == 'Scored') payload.quizType = 0;
            else payload.quizType = 1;
            if(this.body.difficulty == 'Easy') payload.difficulty = 0;
            else if(this.body.difficulty == 'Medium') payload.difficulty = 1;
            else payload.difficulty=2;
            console.log(payload)
            this.$http.post('http://localhost:4000/api/quizes', payload).then(
                (event) => {
                    console.log(event)
                }
            )
        }
    },
    mounted () {
        console.log(this.$store.state.token)
    },
    components:{
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
    background-color: #8E44AD;
    margin: 0;
    height: 100%;
    padding-top: 5vh;
    display: flex;
    justify-content: center;
    align-content: center
}

h2{
    font-size: 2rem;
    color: #fff;
    flex-grow: 0;
}

.buttons-plate{
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    width: 75vw;
}

span{
  font-size: 27px;
  font-weight: 900;
  background-color: #fff;
  width: 15%;
  margin: 10% auto;
  text-align: center;
  padding: 2vh 16vw;
  border-radius: 10px;
  cursor: pointer;
  color: #5F0683;
}

span:hover{
  box-shadow: 0 0 20px #000;
}

input{
    margin-bottom: 10%;
    padding: 15px;
    border:0;
    border-radius: 10px;
    color: #fff;
    background-color: #ba92cb;

}

input::placeholder{
    color: rgba(255,255,255,.6);

}

select{
  appearance:none;
  -webkit-appearance:none;
  -moz-appearance:none;
  -ms-appearance:none;
  -o-appearance:none;
    padding: 15px;
    border:0;
    border-radius: 10px;
    color: rgba(255,255,255,.6);

  background-color: #ba92cb;
  background-image: url('../assets/ic_keyboard_arrow_down_white_24px.svg');
  background-position: 95% center; 
  background-repeat: no-repeat;
    margin-bottom: 10%;

}

option{
    color: #fff;
}

.type-selector{
    margin-bottom: 10%;
    border:0;
    border-radius: 10px;
    color: #fff;
    display: flex;
    align-content: center;
    justify-content: center;
    width: 55vw;
}
.type-selector div{
    width: 20%;
    display: flex;
    justify-content: center;
    align-content: center;
    background-color: #ba92cb;
    border-radius: 10px;
    padding: 15px;
    margin: 0 5% ;


}
.options{
    margin-bottom: 10%;
    border:0;
    border-radius: 10px;
    background-color: #fff;
    display: flex;
    align-content: center;
    justify-content: center;
    width: 45vw;
}
@media (min-width: 900px) {
    .buttons-plate{
        width: 55vw;
        
    }
}
</style>
