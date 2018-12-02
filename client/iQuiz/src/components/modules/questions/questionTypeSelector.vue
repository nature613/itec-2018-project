<template>
           
            <div class="type-selector">
                <div @click="selectType(0)" v-bind:class=" type === 0 ? 'active' : ''">  <vue-material-icon name="text_fields" :size="32"></vue-material-icon>
</div>
                <div @click="selectType(1)" v-bind:class=" type === 1 ? 'active' : ''"><vue-material-icon name="radio_button_checked" :size="32" ></vue-material-icon></div>
                <div @click="selectType(2)" v-bind:class=" type === 2 ? 'active' : ''"><vue-material-icon name="check_box" :size="32" ></vue-material-icon></div>
            </div>
            
</template>

<script>


export default {
  name: 'questionTypeSelector',
    data () {
        return {
            type: this.questionType            
        }
    },
    methods : {
        selectType: function(index){
            this.$emit('update-type', index);
            this.type = index;
        }
    },
    props: ['question-type']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.type-selector{
    margin-bottom: 10%;
    border:0;
    border-radius: 10px;
    color: #fff;
    display: flex;
    align-content: center;
}
.type-selector div{
    width: 20%;
    display: flex;
    justify-content: center;
    align-content: center;
    background-color: #ba92cb;
    border-radius: 10px;
    padding: 15px;
    margin: 0 5% ;
    cursor: pointer;

}
.active{
    border: 3px solid #fff;
    color: #8E44AD;
}
@media (min-width: 900px) {

}
</style>
