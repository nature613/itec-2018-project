<template>
    <textarea placeholder="Answer" class="answer"></textarea>
</template>

<script>


export default {
    data () {
        return {
            
        }
    },
    mounted () {
        //store in vuex the id of the quiz (if positive)
    },
    components:{

    },
    computed: {

    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
.answer
    width: 75vw
    box-sizing: border-box
    border: 5px solid rgba(95, 6, 131, .5)
    border-radius: 8px
    outline: none
    resize: none
    margin: 5vh 0
    height: 30vh
    padding: 5%
    color: rgba(95, 6, 131, 1)
    font-size: 1.5rem
    font-family: 'Roboto', Helvetica, Arial, sans-serif;

    &::placeholder
        color: rgba(95, 6, 131, .5)
        font-size: 1.5rem

@media (min-width: 900px)
    .answer
        width: 50vw
        height: 50vh
        padding: 2%
</style>