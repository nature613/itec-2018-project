<template>
    <div class="hello">
        <div class="buttons-plate">
            <h2>Add Event</h2>
            <input type="text" v-model="body.title" placeholder="Title" required/>
            <input type="text" v-model="body.description" placeholder="Description" required/>
            <add-button @button-clicked="addEvent"></add-button>
        </div>
    </div>
</template>

<script>
import addButton from './modules/addButton'


export default {
  name: 'AddEvent',
    data () {
        return {
            body: {
                title: '',
                description: '',
                quizType: ''
            }
        }
    },
    methods : {
        addEvent: function(){
            //console.log(this.body);
            this.$http.post('http://localhost:4000/api/events', this.body).then(
                (event) => {
                    console.log(event);
                    this.$router.replace('ShowAllEvents');
                }
            )
        }
    },
    mounted () {
        console.log(this.$store.state.token)
    },
    components: {
        'add-button': addButton
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
    background-color: #8E44AD;
    margin: 0;
    height: 90vh;
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

.buttons-plate{
    display: flex;
    flex-direction: column;
    align-content: center;
    width: 75vw;
}

input{
    margin-bottom: 10%;
    padding: 15px;
    border:0;
    border-radius: 10px;
    color: #fff;
    background-color: #ba92cb;

}

input::placeholder{
    color: rgba(255,255,255,.6);

}

select{
  appearance:none;
  -webkit-appearance:none;
  -moz-appearance:none;
  -ms-appearance:none;
  -o-appearance:none;
    padding: 15px;
    border:0;
    border-radius: 10px;
    color: rgba(255,255,255,.6);

  background-color: #ba92cb;
  background-image: url('../assets/ic_keyboard_arrow_down_white_24px.svg');
  background-position: 95% center; 
  background-repeat: no-repeat;
}

option{
    color: #fff;
}
@media (min-width: 900px) {
    .buttons-plate{
        width: 55vw;
    }
}
</style>
