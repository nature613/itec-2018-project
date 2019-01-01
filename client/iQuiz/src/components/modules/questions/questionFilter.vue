<template>
    <div>
        <h3>Filter by:</h3>
        <div>
            <h4>Scored:</h4>
            <p class="selected">Scored</p>
            <p class="not-selected">Non-scored</p>
        </div>
        <div>
            <h4>Question type:</h4>
            <p class="selected">Text</p>
            <p class="not-selected">Radio</p>
            <p class="not-selected">Checkbox</p>
        </div>
        <div>
            <h4>Difficulty:</h4>
            <p class="selected">Easy</p>
            <p class="not-selected">Medium</p>
            <p class="not-selected">Hard</p>
        </div>
    </div>
</template>

<script>

export default {
    
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
    .query-filters
        flex-grow: .2
        border-right: 1px white solid
    
    .selected
        background-image: url('../../../assets/baseline-radio_button_checked-24px.svg');
        background-position: 30% center; 
        background-repeat: no-repeat;
    .not-selected
        background-image: url('../../../assets/baseline-radio_button_unchecked-24px.svg');
        background-position: 30% center; 
        background-repeat: no-repeat;
    p
        color: #5F0683
        cursor: pointer
</style>
