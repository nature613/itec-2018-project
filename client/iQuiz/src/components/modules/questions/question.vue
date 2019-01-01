<template>
    <div>
        <h4>{{question.title}}</h4>
        <h4>{{question.category}}</h4>
        <h4>{{question.questionType}}</h4>
    </div>
</template>

<script>


export default {
    props:[
        'question'
    ],
    mounted() {
        console.log(this.question)
    },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div{
    background-color: #BA92CB;
    width: 95%;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1rem;
}

</style>
