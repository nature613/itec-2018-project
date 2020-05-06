<template>
  <div class="base-plate feedback-plate">
    <component :is="feedbackType"/>
  </div>
</template>

<script>
import positiveFeedback from './PositiveFeedback'
import negativeFeedback from './NegativeFeedback'
import QuizService from '../../services/QuizService'

export default {
  name: 'Feedback',
  data () {
    return {
      positive: true,
      quiz: null
    }
  },
  components:{
    positiveFeedback: positiveFeedback,
    negativeFeedback: negativeFeedback
  },
  computed: {
    feedbackType(){
      return this.positive?"positiveFeedback":"negativeFeedback"
    }
  },
  async mounted () {
    try{
      this.quiz = (await QuizService.useQR({quizID:this.$route.params.quizID, QRId:this.$route.params.id})).data;
      //store in vuex the rules of the quiz (if positive)
    }
    catch(err){
      console.log(err)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
.feedback-plate
  padding: 0 4vw
  padding-top: 8vh
  height: 75vh
</style>