<template>
    <div class="main">
        <div class="container">
            <h3>Filter by:</h3>
            <div>
                <h4>Scored:</h4>
                <p v-bind:class="scoredToggle ? 'selected': 'notSelected'" @click="filterBy({scored: true})">Scored</p>
                <p v-bind:class="(scoredToggle===false) ? 'selected': 'notSelected'" @click="filterBy({scored: false})">Non-scored</p>
            </div>
            <div>
                <h4>Question type:</h4>
                <p v-bind:class="(qTypeToggle===0) ? 'selected': 'notSelected'"  @click="filterBy({questionType: 0})">Text</p>
                <p v-bind:class="(qTypeToggle===1) ? 'selected': 'notSelected'"  @click="filterBy({questionType: 1})">Radio</p>
                <p v-bind:class="(qTypeToggle===2) ? 'selected': 'notSelected'"  @click="filterBy({questionType: 2})">Checkbox</p>
            </div>
            <div>
                <h4>Difficulty:</h4>
                <p v-bind:class="(diffToggle===0) ? 'selected': 'notSelected'"  @click="filterBy({difficulty: 0})">Easy</p>
                <p v-bind:class="(diffToggle===1) ? 'selected': 'notSelected'"  @click="filterBy({difficulty: 1})">Medium</p>
                <p v-bind:class="(diffToggle===2) ? 'selected': 'notSelected'"  @click="filterBy({difficulty: 2})">Hard</p>
            </div>
        </div>
        <span class="buton" @click="destroyFilters">Remove filters</span>
    </div>
</template>

<script>

export default {
    data () {
        return {
            filterObject : {},
            scoredToggle : '',
            qTypeToggle: '',
            diffToggle: ''
        }
    },
    methods: {
        filterBy(category){
            // console.log(this.filterObject.scored);
            var key = Object.keys(category);
            this.filterObject[key[0]] = category[key[0]];
            (key[0]==='scored')?this.scoredToggle = category[key[0]]:'';
            (key[0]==='questionType')?this.qTypeToggle = category[key[0]]:'';
            (key[0]==='difficulty')?this.diffToggle = category[key[0]]:'';
            this.$emit('filters-updated', this.filterObject)
        },
        destroyFilters(){
            this.filterObject = {};
            this.scoredToggle = "";
            this.qTypeToggle = "";
            this.diffToggle = "";
            this.$emit('filters-updated', this.filterObject);
        }
    },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
    .selected
        background-image: url('../../../assets/baseline-radio_button_checked-24px.svg')
        background-position: 30% center
        background-repeat: no-repeat
        font-weight: bold
    .notSelected
        background-image: url('../../../assets/baseline-radio_button_unchecked-24px.svg')
        background-position: 30% center
        background-repeat: no-repeat
    p
        color: #5F0683
        cursor: pointer
    .buton
        font-size: 27px
        font-weight: 900
        background-color: #fff
        text-align: center
        padding: 2% 10%
        border-radius: 10px
        cursor: pointer
        color: #5F0683
    .buton:hover
        box-shadow: 0 0 20px #000
    .container
        margin-bottom: 5vh
    .main
        margin-bottom: 4vh
</style>
