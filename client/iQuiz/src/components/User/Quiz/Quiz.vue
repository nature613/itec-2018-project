<template>
    <component :is="selectedPage"/>
</template>

<script>
import QuizDescription from './QuizDescription'
import QuizCompletion from './QuizCompletion'
import Questionnaire from './Questionnaire'
import QuizCompletionFeedback from './QuizCompletionFeedback'

export default {
    data () {
        return {
            selectedIndex: 1
        }
    },
    mounted () {
        //store in vuex the id of the quiz (if positive)
    },
    components:{
        quizDescription: QuizDescription,
        quizCompletion: QuizCompletion,
        quizCompletionFeedback: QuizCompletionFeedback,
        questionnaire: Questionnaire
    },
    computed: {
        selectedPage(){
            if(this.selectedIndex === 0) return 'quizDescription'
            else if (this.selectedIndex === 1) return 'questionnaire'
            else if (this.selectedIndex === 2) return 'quizCompletion'
            else if (this.selectedIndex === 3) return 'quizCompletionFeedback'
            else return null //TODO: Either add more pages or throw error
        }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">

</style>