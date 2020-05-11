<template>
    <div class="container">
        <div class="more">
            <router-link v-bind:to="'/questions/edit/'+question._id"><img src="../../assets/baseline-edit-24px.svg"></router-link>
            <img src="../../assets/baseline-delete-24px.svg" class="trash" @click="deleteQuestion">
        </div>
        <div class="content">
            <h4>Title: {{question.title}}</h4>
            <p>Category: {{question.category}}</p>
            <p class="buton" @click="active=!active" v-if="!active">See more</p>

            <p v-if="active && question.scored">Scored</p>
            <p v-if="active && !question.scored">Not scored</p>

            <p v-if="active && question.difficulty==0">Difficulty: EASY</p>
            <p v-if="active && question.difficulty==1">Difficulty: MEDIUM</p>
            <p v-if="active && question.difficulty==2">Difficulty: HARD</p>

            <p v-if="active && question.questionType==0">Type of answer: TEXT</p>
            <p v-if="active && question.questionType==1">Type of answer: RADIO</p>
            <p v-if="active && question.questionType==2">Type of answer: CHECKBOX</p>

            <p v-if="active && question.answers!=false">Answers:</p>
                <li v-if="active && question.answers!=false" v-for="answer in question.answers">{{answer}}</li>

            <p v-if="active && question.correctAnswers!=false">Correct Answers:</p>
                <li v-if="active && question.correctAnswers!=false" v-for="answer in question.correctAnswers">{{answer}}</li>

            <p class="buton" @click="active=!active" v-if="active">See less</p>
        </div>
        <!--To implement: context menu. Position: absolute, right:0. Teoretic ar trebui sa mearga-->
    </div>
</template>

<script>
import QuestionService from '@/services/QuestionService'
export default {
    data(){
        return{
            active: false,
            menuToggled: false
        }
    },
    props:[
        'question'
    ],
    mounted() {
        //console.log(this.question)
    },
    methods: {
        async deleteQuestion(){
            if (confirm("Delete the question: " + this.question.title)) {
                try{
                    const response = await QuestionService.deleteQuestion(this.question._id)
                    alert("Success! The question has been deleted");
                    this.$router.go();
                }
                catch(error){
                    console.log(error)
                }
            }
        }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
.container
    background-color: #BA92CB
    width: 85%
    border-radius: 10px
    display: flex
    flex-direction: column
    padding: 2% 5%
    margin-bottom: 1rem
    @media (max-width: 900px)
        width: 90%
 
    .content
        flex-grow: 1
    .buton
        font-weight: 700
        background-color: #fff
        text-align: center
        padding: 1% 2%
        border-radius: 8px
        cursor: pointer
        color: #5F0683
        border: none;
        text-decoration: none;
        display: inline-block;
        font-size: 2vw;
        margin: 8px 2px;
        max-width: 25%
        @media (max-width: 900px)
            font-size: 5vw
    .buton:hover
        box-shadow: 0 0 20px #000
    .more
        height: 30px;
        width: 30px;
        align-self: flex-end;
        margin-top: 5px;
        margin-right: 5px;
        border-radius: 100%;
        padding-top: 4px;
        display: flex
    .trash
        cursor: pointer
</style>