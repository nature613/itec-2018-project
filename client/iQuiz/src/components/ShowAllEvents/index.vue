<template>
<div class="hello">
    <h2> Added events </h2>
    <div class="main-content">
        <div class="query-filters">
            <h3>Search:</h3>
            <input type="text" v-model="search" placeholder="Search by title">
            <event-filter @filters-updated="updateEvents"/>
        </div>
        <div class="events" v-bar="{preventParentScroll: true,scrollThrottle: 30}">
            <div>
            <event class="box" v-for="event in filteredEvents" :key="event._id" :event="event"/>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import EventService from '@/services/EventService'

import event from './event'
import eventFilter from './eventFilter'

export default {
    data () {
        return {
            events: [],
            search: ''
        }
    },
    methods : {
        async updateEvents(e){
            // console.log(e);
            try{
                const data = (await EventService.getAllEvents()).data
                // console.log(data);
                if(e.status==undefined){
                    this.events = data;
                }
                if(e.status == 0){
                    // console.log(data)
                    this.events = data.filter((event)=>{
                        // console.log(Date.parse(event.startDate))
                        // console.log(Date.now())
                        // console.log(Date.parse(event.startDate) > Date.now())
                        return Date.parse(event.startDate) > Date.now()
                    })
                }
                else if(e.status == 1){
                    this.events = data.filter((event)=>{
                        // console.log(Date.parse(event.startDate))
                        // console.log(Date.now())
                        // console.log(Date.parse(event.startDate) > Date.now())
                        return (Date.parse(event.startDate) < Date.now())&&((Date.parse(event.endDate) > Date.now()) || (event.endDate==null))
                    })
                }
                else if(e.status == 2){
                    this.events = data.filter((event)=>{
                        // console.log(Date.parse(event.startDate))
                        // console.log(Date.now())
                        // console.log(Date.parse(event.startDate) > Date.now())
                        return Date.parse(event.endDate) < Date.now()
                    })
                }
                if(e.date==0){
                    this.events = this.events.sort((eventOne, eventTwo)=>{
                        return Date.parse(eventOne.startDate)-Date.parse(eventTwo.startDate)
                    })
                }
                else if(e.date==1){
                    this.events = this.events.sort((eventOne, eventTwo)=>{
                        return Date.parse(eventTwo.startDate)-Date.parse(eventOne.startDate)
                    })
                }
            }
            catch(err){
                console.log(err)
            }
        },

    },
    async mounted () {
        const data = await EventService.getAllEvents({})
        this.events = data.data;
        console.log(Date.parse(data.data[0].startDate.slice(0,10)));

    },
    computed: {
        filteredEvents: function(){
            return this.events.filter((event) =>{
                return event.title.toLowerCase().match(this.search.toLowerCase());
            });
        }
    },
    components: {
        event,
        eventFilter
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
    .hello 
        padding: 2vh 0
        flex-direction: column
    
    h2
        font-size: 3rem
        color: #fff
        flex-grow: 0
    
    .main-content
        display: flex
        width: 85%
        padding: 0 3vw

        .events
            flex-grow: .85
            margin-left: 3vw
            max-height: 120vh

            @media (max-width:900px)
                max-height: none
                margin: 3vh 0

        .query-filters
            flex-grow: .15
            background: #BA92CB
            border-radius: 10px

            input[type="text"]
                margin-bottom: 1%
                padding: 15px 15px 15px 55px
                border: 0
                border-radius: 10px
                color: #ba92cb
                width: 70%
                background-color: #FFF  
                background-image: url('../../assets/ic_search_white_24px.svg')
                background-position: 10px 10px
                background-repeat: no-repeat
            
            input::placeholder
                color: #ba92cb
    @media (max-width: 900px)
        .main-content
            flex-direction: column
        

</style>
