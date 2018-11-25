
<template>
	<div>
        <h2>Add Rule</h2>
            <input type="text" v-model="rule.numberofQuestionsInRule" placeholder="Number of questions" required/>
            <select required v-model="rule.typeOfQuestionsInRule">
                <option disabled selected value style="color:rgba(255,255,255,.6);"> Questions type </option>
                <option>Text</option>
                <option>Radio</option>
                <option>Check</option>
            </select>
            <select required v-model="rule.difficultyOfQuestionsInRule">
                <option disabled selected value style="color:rgba(255,255,255,.6);"> Difficulty </option>
                <option>Easy</option>
                <option>Medium</option>
                <option>Hard</option>
            </select>
            <input type="text" v-model="rule.categoryOfQuestionsInRule" placeholder="Category" required/>
            <span @click="addQuestion">ADD</span>
	</div>
</template>

<script>

export default {
  name: 'QuestionForm',
  data(){
    return {

    }
  },
	computed: {
	    
  },
	methods: {
  		
  },
  mounted(){
    console.log(this.$route.path)
  }
}
</script>

<style>
/* eslint-disable */

</style>
