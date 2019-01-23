<template>
    <div class="hello">
        <div class="buttons-plate">
            <h2>Add Event</h2>

            <error-message :error-list="errors" validator="title"></error-message>
            <input type="text" v-model="body.title" placeholder="Title" v-validate="'required'" name="title" />

            <error-message :error-list="errors" validator="description"></error-message>
            <input type="text" v-model="body.description" placeholder="Description" v-validate="'required'" name="description" />

            <!-- add time suport -->
            <div class='calendar-plate'>
                <date-picker inline v-model='body.startDate' placeholder="Event start date">
                    <div slot="beforeCalendarHeader" class="calender-header">
                        Event start date
                    </div>
                </date-picker>
                <date-picker inline :disabledDates="disabledDates" v-model='body.endDate' placeholder="Event end date" v-if="!doesntHaveEndDate">    
                    <div slot="beforeCalendarHeader" class="calender-header">
                        Event end date
                    </div>
                </date-picker>
            </div>

            <div class="checkbox-plate"><input type="checkbox" value="test" id="test" v-model="doesntHaveEndDate"><label for="test">No end date</label></div>
            <!-- add image support-->
            <!--  add a new component with some prop that tells if success or not, then display it and stuff when button is clicked. then go to see all questions page -->
            <add-button @button-clicked="addEvent" text="ADD"></add-button>          
        </div>
    </div>
</template>

<script>
import EventService from '@/services/EventService'

import addButton from './modules/addButton'
import errorMessage from './modules/errorMessage'

import datePicker from 'vuejs-datepicker'


export default {
    data () {
        return {
            body: {
                title: '',
                description: '',
                startDate: new Date(),
                endDate: ''
            },
            doesntHaveEndDate: false,
            disabledDates: {
                to: new Date()
            }
        }
    },
    methods : {
        async addEvent(){
            this.validateFields();
            if(!this.errors.any()){
                var payload = this.body;
                if (this.doesntHaveEndDate){
                    payload.endDate = null
                }
                try{
                    const response = await EventService.postEvent(payload)
                    console.log(response);
                    this.$router.push('events')
                }
                catch(err){
                    console.log(err)
                }
            }
            else console.log("error")
        },
        validateFields(){
            if(!this.body.title) this.errors.add({field:'title', msg:'The title field is required'});
            if(!this.body.description) this.errors.add({field:'description', msg:'The description field is required'});
        },
    },
    components: {
        'add-button': addButton,
        errorMessage,
        datePicker
    },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='sass'>
    h2
        font-size: 3rem;
        color: #fff;
        flex-grow: 0;

    .buttons-plate
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: center;
        width: 75vw;

    input
        margin-bottom: 10%;
        padding: 15px;
        border: 0;
        border-radius: 10px;
        color: #fff;
        background-color: #ba92cb;
        &::placeholder
            color: rgba(255,255,255,.9);

    .error-text
        align-self: flex-start;
        color: #fff;
        padding: 5px;
        border-radius: 7px;
        width: 99%;
        margin-bottom: 0;
        text-align: left;
        font-size: 10px;
    
    .calendar-plate
        display: flex
        justify-content: space-around
        flex-wrap: wrap

    .calender-header
        text-align: center
        padding: 3% 0
        font-weight: bold
        text-decoration: underline

    .checkbox-plate
        color: #fff
        margin-top: 4%
        font-weight: bold
        font-size: 1em

        label
            cursor: pointer
        input
            margin: 0 5px

    @media (min-width: 900px) 
        .buttons-plate
            width: 55vw;
</style>
