<template>
<div class="hello">
    <h2> Added questions </h2>
    <div class="main-content">
        <div class="query-filters">
            <h3>Search:</h3>
            <input type="text" v-model="search" placeholder="Search by title">
            <question-filter/>
        </div>
        <div class="questions" v-bar="{preventParentScroll: true,scrollThrottle: 30}">
            <div>
            <question class="box" v-for="question in filteredQuestions" :key="question._id" :question="question"/>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import question from './modules/questions/question'
import questionFilter from './modules/questions/questionFilter'

export default {
  name: 'ShowAllQuestions',
    data () {
        return {
            questions: [],
            search: ''
        }
    },
    methods : {
    },
    mounted () {
        console.log(this.$store.state.token);
        this.$http.get('http://localhost:4000/api/questions').then(
            (data) =>{
                console.log('op')
                this.questions = data.data;
                console.log(data);
            }
        )
    },
    computed: {
        filteredQuestions: function(){
            return this.questions.filter((question) =>{
                return question.title.toLowerCase().match(this.search.toLowerCase());
            });
        }
    },
    components: {
        question,
        questionFilter
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
    .hello 
        padding: 2vh 0
        flex-direction: column
    
    h2
        font-size: 3rem
        color: #fff
        flex-grow: 0
    
    .main-content
        display: flex
        width: 85%
        padding: 0 3vw

        .questions
            flex-grow: .85
            margin-left: 3vw
            max-height: 150vh


        .query-filters
            flex-grow: .15
            background: #BA92CB
            border-radius: 10px

            input[type="text"]
                margin-bottom: 1%
                padding: 15px 15px 15px 55px
                border: 0
                border-radius: 10px
                color: #ba92cb
                width: 70%
                background-color: #FFF  
                background-image: url('../assets/ic_search_white_24px.svg')
                background-position: 10px 10px
                background-repeat: no-repeat
            
            input::placeholder
                color: #ba92cb

</style>
