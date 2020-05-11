<template>
    <div class="main">
        <div class="container">
            <h3>Filter by:</h3>
            <div>
                <h4>Status:</h4>
                <p v-bind:class="(statusToggle===0) ? 'selected': 'notSelected'"  @click="filterBy({status: 0})">Incoming</p>
                <p v-bind:class="(statusToggle===1) ? 'selected': 'notSelected'"  @click="filterBy({status: 1})">In progress</p>
                <p v-bind:class="(statusToggle===2) ? 'selected': 'notSelected'"  @click="filterBy({status: 2})">Expired</p>
            </div>
            <h3>Sort by:</h3>
            <div>
                <h4>Date:</h4>
                <p v-bind:class="(dateToggle===0) ? 'selected': 'notSelected'"  @click="filterBy({date: 0})">Start date<vue-material-icon name="arrow_drop_up" :size="18"/></p>
                <p v-bind:class="(dateToggle===1) ? 'selected': 'notSelected'"  @click="filterBy({date: 1})">Start date<vue-material-icon name="arrow_drop_down" :size="18"/></p>
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
            statusToggle: '',
            dateToggle: ''
        }
    },
    methods: {
        filterBy(category){
            // console.log(this.filterObject.scored);
            var key = Object.keys(category);
            this.filterObject[key[0]] = category[key[0]];
            (key[0]==='status')?this.statusToggle = category[key[0]]:'';
            (key[0]==='date')?this.dateToggle = category[key[0]]:'';
            this.$emit('filters-updated', this.filterObject)
        },
        destroyFilters(){
            this.filterObject = {};
            this.statusToggle = "";
            this.dateToggle = "";
            this.$emit('filters-updated', this.filterObject);
        }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
    .selected
        background-image: url('../../assets/baseline-radio_button_checked-24px.svg')
        background-position: 25% center
        background-repeat: no-repeat
        font-weight: bold
    .notSelected
        background-image: url('../../assets/baseline-radio_button_unchecked-24px.svg')
        background-position: 25% center
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