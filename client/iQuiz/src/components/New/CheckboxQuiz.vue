<template>
<div class="radio-plate">
    <p v-for="(answerText, index) in answers" :key="index" v-bind:class="(selected.includes(index)) ? 'selected': 'notSelected'" class="answer" @click="selectAnswer(index)">{{answerText}}</p>
</div>
</template>

<script>


export default {
    data () {
        return {
            givenAnswers: [],
            selected: []

        }
    },
    mounted () {
        //store in vuex the id of the quiz (if positive)
    },
    methods: {
        selectAnswer(num){
            if(this.givenAnswers.includes(num)){
                this.givenAnswers.splice(this.givenAnswers.indexOf(num), 1);
                this.selected.splice(this.selected.indexOf(num), 1);
            }
            else{
                this.givenAnswers.push(num);
                this.selected.push(num);
            }
        }
    },
    components:{

    },
    computed: {

    },
    props:[
        'answers'
    ]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
.selected
    background-image: url('../../assets/baseline-check_box-24px.svg')
    font-weight: bold

.notSelected
    background-image: url('../../assets/baseline-check_box_outline_blank-24px.svg')

.answer
    background-position: 0% center
    background-repeat: no-repeat 
    cursor: pointer
    box-sizing: border-box
    padding: 0 7vw

.radio-plate
    width: 70vw
    color: #fff
    margin: 2vh 0

@media (min-width: 900px)
    .answer
        background-position: 10% center
</style>