<template>
    <div class="hello">
        <div class="buttons-plate">
            <h2>All events</h2>
            <div class="events">
                <div class="box">
                    <img src="../assets/baseline-add-24px.svg" class="plus">
                    <router-link to="/addevent" class="router-text">Add new event</router-link>
                </div>
                <div class="box" v-for="event in events" :key="event._id">
                    <router-link v-bind:to="'/modifyevent/' + event._id" class="more"><img src="../assets/baseline-more_vert-24px.svg"></router-link>
                    <h4>{{event.title}}</h4>
                    <p>{{event.description}}</p>
                    <router-link  v-bind:to="'/event/' + event._id"  class="router-text" id="event-link">Go to event</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>


export default {
  name: 'ShowAllEvents',
    data () {
        return {
            events: []
        }
    },
    methods : {
    },
    mounted () {
        console.log(this.$store.state.token);
        this.$http.get('http://localhost:4000/api/events').then(
            (data) =>{
                this.events = data.data;
                console.log(this.events)
            }
        )
    },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
    background-color: #8E44AD;
    margin: 0;
    padding-top: 5vh;
    display: flex;
    justify-content: center;
    align-content: center
}

h2{
    font-size: 2rem;
    color: #fff;
    flex-grow: 0;
}

h4{
    margin-top: 0;
}
.buttons-plate{
    display: flex;
    flex-direction: column;
    align-content: center;
    width: 75vw;
}


option{
    color: #fff;
}

.events{
    flex-grow: 1;
    margin-top: 10vh;
    display: flex;
    flex-direction: column;
    align-items: center
}

.box{
    background-color: #D7CBCB;
    width: 70%;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1rem;
}
.more{
    height: 30px;
    width: 30px;
    align-self: flex-end;
    margin-top: 5px;
    margin-right: 5px;
    border-radius: 100%;
    padding-top: 4px;
}

.more:hover{
    background-color: rgba(186, 146, 203, 0.96);
}
.plus{
    width: 60px;
    height: 60px;
    margin: 10px;
}

.router-text{
    font-size: 1.5rem;
    font-weight: bold;
    text-decoration: none;
    color: rgba(186, 146, 203, 0.96);
    margin-bottom: 2rem;
}

#event-link{
    padding: 7px;
    background-color: #fff;
    color: #8E44AD;
    border-radius: 9px;
}

#event-link:hover{
  box-shadow: 0 0 20px #000;
}
@media (min-width: 900px) {
    .buttons-plate{
        width: 55vw;
    }
}
</style>
