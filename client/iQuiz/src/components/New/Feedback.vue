<template>
  <div class="base-plate feedback-plate">
    <component :is="feedbackType"/>
  </div>
</template>

<script>
import positiveFeedback from './PositiveFeedback'
import negativeFeedback from './NegativeFeedback'

export default {
  name: 'Feedback',
  data () {
    return {
      positive: true,
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
  mounted () {
    //store in vuex the id of the quiz (if positive)
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