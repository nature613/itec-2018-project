<template>
    <div class="base-plate feedback-plate">
        <h1 class="heading">{{questions[counter].title}}</h1>
        <component :is="componentType" :answers="questions[counter].answers" />
        <span class="buton" v-if="counter < questions.length - 1" @click="counter++">Next question</span>
        <span class="buton" v-else>Finish quiz</span>
    </div>
    
</template>

<script>
import TextQuiz from './TextQuiz'
import RadioQuiz from './RadioQuiz'
import CheckboxQuiz from './CheckboxQuiz'

export default {
    data () {
        return {
            counter: 0,
            questions: [
                {
                    title: 'Am intrebat 100 de romani: Kevin e smecher?',
                    type: 0,
                    answers:[
                        'da',
                        'nu'
                    ],
                },
                {
                    title: 'Am intrebat 200 de romani: Kevin e smecher?',
                    type: 1,
                    answers:[
                        'Probabil ca da, dar ecuatia lui Schroedinger implica si ca nu',
                        "Poutine marfa taiyaki aesthetic ethical dolore aute. In kinfolk fam, everyday carry cronut magna austin. ",
                        'Probabil ca da, dar ecuatia lui Schroedinger implica si ca nu',
                        "Poutine marfa taiyaki aesthetic ethical dolore aute. In kinfolk fam, everyday carry cronut magna austin. "
                    ],
                },
                {
                    title: 'Am intrebat 300 de romani: Kevin e smecher?',
                    type: 2,
                    answers:[
                        'da',
                        'nu'
                    ]
                }
            ]
        }
    },
    mounted () {
        //store in vuex the id of the quiz (if positive)
    },
    components:{
        'textQuiz': TextQuiz,
        'radioQuiz': RadioQuiz,
        'checkboxQuiz': CheckboxQuiz
    },
    computed: {
        componentType(){
            if(this.questions[this.counter].type === 0) return 'textQuiz' //Text
            if(this.questions[this.counter].type === 1) return 'radioQuiz' //Radio
            if(this.questions[this.counter].type === 2) return 'checkboxQuiz' //Checkbox
        }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
.feedback-plate
  padding: 0 4vw
  padding-top: 8vh
  display: flex
  flex-direction: column
  align-items: center

.heading
    color: #fff
    margin-bottom: 2vh

.buton
    font-size: 27px
    font-weight: 700
    background-color: #fff
    width: 60%
    text-align: center
    padding: 2% 7.5%
    border-radius: 10px
    cursor: pointer
    color: #5f0683
    margin: 4vh 0

    &:hover
      box-shadow: 0 0 15px #000

@media (min-width: 900px)
    .buton
        width: 30%
    .feedback-plate
        height: 75vh
</style>