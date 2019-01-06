<template>
<!-- to add picture and date support -->
    <div class="hello">
        <div class="buttons-plate">
            <h2>Add Question</h2>

            <error-message :error-list="errors" validator="title"></error-message>
            <input type="text" v-model="body.title" placeholder="Title" v-validate="'required'" name="title" />

            <error-message :error-list="errors" validator="qtype"></error-message>
            <select required v-model="body.scored" v-validate="'required'" name="qtype">
                <option disabled selected value style="color:rgba(255,255,255,.6);"> Question type </option>
                <option>Scored</option>
                <option>Non-scored</option>
            </select>

            <error-message :error-list="errors" validator="difficulty"></error-message>
            <select v-model="body.difficulty" v-validate="'required'" name="difficulty">
                <option disabled selected value style="color:rgba(255,255,255,.6);"> Difficulty </option>
                <option>Easy</option>
                <option>Medium</option>
                <option>Hard</option>
            </select>

            <error-message :error-list="errors" validator="category"></error-message>
            <input type="text" v-model="body.category" placeholder="Category" v-validate="'required'" name="category"/>
            
            <type-selector @update-type="updateType" :question-type="body.questionType"></type-selector>

            <transition name="slide" mode="out-in">
                <component :is="selectRule" :correct-answers="body.correctAnswers" :answers="body.answers"></component>
            </transition>

<!--  add a new component with some prop that tells if success or not, then display it and stuff when button is clicked. then go to see all questions page -->
            <add-button @button-clicked="editQuestion" text="SAVE"></add-button>

            
        </div>
    </div>
</template>

<script>
import questionTypeSelector from './modules/questions/questionTypeSelector'
import textRule from './modules/questions/textRule'
import radioRule from './modules/questions/radioRule'
import checkboxRule from './modules/questions/checkboxRule'
import addButton from './modules/addButton'
import errorMessage from './modules/errorMessage'

export default {
  name: 'EditQuestion',
    data () {
        return {
            body: {
                title: '',
                difficulty: '',
                scored: '',
                category: '',
                answers: [''],
                correctAnswers: [''],
                questionType: 0,
            },
            
        }
    },
    methods : {
        async editQuestion(){
            this.validateFields();
            if(!this.errors.any()){
                // console.log(this.body.scored);
                var payload = this.body;
                if(this.body.scored == 'Scored') payload.scored = true;
                else payload.scored = false;
                if(this.body.difficulty == 'Easy') payload.difficulty = 0;
                else if(this.body.difficulty == 'Medium') payload.difficulty = 1;
                else if(this.body.difficulty == 'Hard') payload.difficulty=2;
                // console.log(payload)
                try{
                    const response = await this.$http.put(`http://localhost:4000/api/question/${this.$route.params.id}`, payload)
                    console.log(response);
                    this.$router.push('/questions')
                }
                catch(err){
                    console.log(err)
                }
            }
            else console.log("error")
        },
        updateType: function(e){ 
            this.body.questionType = e;
            this.body.answers = [''];
            this.body.correctAnswers = [''];
        },
        validateFields: function(){
            if(!this.body.title) this.errors.add({field:'title', msg:'The title field is required'});
            if(!this.body.difficulty) this.errors.add({field:'difficulty', msg:'The difficulty field is required'});
            if(!this.body.scored) this.errors.add({field:'qtype', msg:'The question type field is required'});
            if(!this.body.category) this.errors.add({field:'category', msg:'The category field is required'});
        }
    },
    async mounted () {
        console.log(this.$store.state.token);
        try{
            const response = await this.$http.get(`http://localhost:4000/api/question/${this.$route.params.id}`)
            var body = response.data
            if(body.scored == true) body.scored = 'Scored';
            else body.scored = 'Non-scored';
            if(this.body.difficulty == 0) body.difficulty = 'Easy';
            else if(this.body.difficulty == 1) body.difficulty = 'Medium';
            else if(this.body.difficulty == 2) body.difficulty='Hard';
            this.body = body
        }
        catch(error){
            console.log(error)
        }
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
        'checkbox-rule': checkboxRule,
        'error-message': errorMessage
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


h2{
    font-size: 3rem;
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

input{
    margin-bottom: 10%;
    padding: 15px;
    border:0;
    border-radius: 10px;
    color: #fff;
    background-color: #ba92cb;

}

input::placeholder{
    color: rgba(255,255,255,.9);

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
    color: rgba(255,255,255,.9);

  background-color: #ba92cb;
  background-image: url('../assets/ic_keyboard_arrow_down_white_24px.svg');
  background-position: 95% center; 
  background-repeat: no-repeat;
    margin-bottom: 10%;

}

option{
    color: #fff;
}

.slide-enter-active, .slide-leave-active{
    transition: all .8s ease-in-out
}

.slide-enter{
    transform: translateX(-95vw);
    opacity: 0;
}
.slide-leave-to{
    transform: translateX(95vw);
    opacity: 0;
}
.error-text{
    align-self: flex-start;
    color: #fff;
    padding: 5px;
    border-radius: 7px;
    width: 99%;
    margin-bottom: 0;
    text-align: left;
    font-size: 10px;
}
@media (min-width: 900px) {
    .buttons-plate{
        width: 55vw;
        
    }
}
</style>
