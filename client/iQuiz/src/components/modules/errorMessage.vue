<template>
    <p v-if="errorList.has(validator)" class="error-text"><vue-material-icon name="error_outline" :size="14"></vue-material-icon>   {{ errorList.first(validator)}}</p>
</template>

<script>


export default {
  name: 'errorMessage',
    data () {
        return {            
        }
    },
    props: ['error-list', 'validator']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='sass'>
    .error-text
        align-self: flex-start;
        color: #ffffff;
        padding: 5px;
        border-radius: 7px;
        width: 99%;
        margin: 0;
        /* text-align: left; */
        font-size: 14px;
        padding-top: 0;
        font-weight: bold;
</style>
