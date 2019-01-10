<template>
 <div>
    <error-message :error-list="errors" validator="correct answer"></error-message>
    <input type="text" v-model="correctAnswers[0]" placeholder="Correct answer" v-validate="'required'" name="correct answer" />
 </div>            
</template>

<script>
import errorMessage from '../errorMessage'

export default {
  name: 'textRule',
    data () {
        return {
            
        }
    },
    methods : {

    },
    mounted () {
        console.log(this.$store.state.token)
    },
    props: ['correct-answers'],
    components: {
        'error-message': errorMessage
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='sass'>
    div
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-bottom: 5px;
        background-color: rgba(255, 255, 255, 0.1);
        padding: 15px 0;
        border-radius: 10px;

    input
        padding: 15px;
        border: 0;
        border-radius: 10px;
        color: #fff;
        background-color: #ba92cb;
        width: 80%;
        &::placeholder
            color: rgba(255,255,255,.9);
</style>
