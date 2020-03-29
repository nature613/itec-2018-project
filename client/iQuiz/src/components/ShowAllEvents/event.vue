<template>
    <div class="container">
        <div class="more">
            <router-link v-bind:to="'/events/edit/'+event._id"><img src="../../assets/baseline-edit-24px.svg"></router-link>
            <img src="../../assets/baseline-delete-24px.svg" class="trash" @click="deleteEvent">
        </div>
        <div class="content">
            <h4>Title: {{event.title}}</h4>
            <p>Description: {{event.description}}</p>
            <p>Start date: {{event.startDate.slice(0,10)}}</p>
            <p v-if='event.endDate'>End date: {{event.endDate.slice(0,10)}}</p>
            <router-link :to="'/event/'+event._id" tag="p" class="buton">Go to event</router-link>
        </div>
        <!--To implement: context menu. Position: absolute, right:0. Teoretic ar trebui sa mearga-->
    </div>
</template>

<script>
import EventService from '@/services/EventService'
export default {
    data(){
        return{
        }
    },
    props:[
        'event'
    ],
    mounted() {
        //console.log(this.event)
    },
    methods: {
        async deleteEvent(){
            if (confirm("Delete the event: " + this.event.title)) {
                try{
                    const response = await EventService.deleteEvent(this.event._id)
                    alert("Success! The event has been deleted");
                    this.$router.go();
                }
                catch(error){
                    console.log(error)
                }
            }
        }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
.container
    background-color: #BA92CB
    width: 85%
    border-radius: 10px
    display: flex
    flex-direction: column
    padding: 2% 5%
    margin-bottom: 1rem
    @media (max-width: 900px)
        width: 90%
 
    .content
        flex-grow: 1
    .buton
        font-weight: 700
        background-color: #fff
        text-align: center
        padding: 1% 2%
        border-radius: 8px
        cursor: pointer
        color: #5F0683
        border: none;
        text-decoration: none;
        display: inline-block;
        font-size: 2vw;
        margin: 8px 2px;
        max-width: 25%
        @media (max-width: 900px)
            font-size: 5vw
    .buton:hover
        box-shadow: 0 0 20px #000
    .more
        height: 30px;
        width: 30px;
        align-self: flex-end;
        margin-top: 5px;
        margin-right: 5px;
        border-radius: 100%;
        padding-top: 4px;
        display: flex
    .trash
        cursor: pointer
</style>