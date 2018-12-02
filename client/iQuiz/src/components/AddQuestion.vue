<template>
    <div class="hello">
        <div class="buttons-plate">
            <h2>Add Question</h2>

            <input type="text" v-model="body.title" placeholder="Title" required/>

            <select required v-model="body.scored">
                <option disabled selected value style="color:rgba(255,255,255,.6);"> Question type </option>
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
            
            <type-selector @update-type="updateType" :question-type="body.questionType"></type-selector>

            <component :is="selectRule" :correct-answers="body.correctAnswers" :answers="body.answers"></component>
<!--  add a new component with some prop that tells if success or not, then display it and stuff when button is clicked. then go to see all questions page -->
            <add-button @button-clicked="testButton"></add-button>

            
        </div>
    </div>
</template>

<script>
import questionTypeSelector from './modules/questions/questionTypeSelector'
import textRule from './modules/questions/textRule'
import radioRule from './modules/questions/radioRule'
import checkboxRule from './modules/questions/checkboxRule'
import addButton from './modules/addButton'


export default {
  name: 'AddQuestion',
    data () {
        return {
            body: {
                title: '',
                difficulty: '',
                scored: '',
                category: '',
                answers: [1,2,3],
                correctAnswers: [80],
                questionType: 1,
            },
            
        }
    },
    methods : {
        // addQuestion: function(){
        //     console.log(this.body.scored);
        //     var payload = this.body;
        //     if(this.body.scored == 'Scored') payload.scored = true;
        //     else payload.scored = false;
        //     if(this.body.difficulty == 'Easy') payload.difficulty = 0;
        //     else if(this.body.difficulty == 'Medium') payload.difficulty = 1;
        //     else payload.difficulty=2;
        //     console.log(payload)
        //     this.$http.post('http://localhost:4000/api/questions', payload).then(
        //         (event) => {
        //             console.log(event)
        //         }
        //     )

        // },
        updateType: function(e){ 
            this.body.questionType = e;
            this.body.answers = [''];
            this.body.correctAnswers = [''];
        },
        testButton: function(){
            console.log(this.body)
        }
    },
    mounted () {
        console.log(this.$store.state.token)
    },
    computed: {
        selectRule: function(){
            if (this.body.questionType == 0){
                return 'text-rule'
            }
            else if(this.body.questionType == 1){
                return 'radio-rule'
            }
            else{
                return 'checkbox-rule'
            }
        }
    },
    components:{
        'add-button': addButton,
        'type-selector': questionTypeSelector,
        'text-rule': textRule,
        'radio-rule': radioRule,
        'checkbox-rule': checkboxRule
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
