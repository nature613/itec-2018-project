<template>
    <div class="hello">
        <div class="buttons-plate">
            <h2>Add Question</h2>
            <input type="text" v-model="body.title" placeholder="Title" required/>
            <select required v-model="body.questionType">
                <option disabled selected value style="color:rgba(255,255,255,.6);"> Question type </option>
                <option>Scored</option>
                <option>Non-scored</option>
            </select>
            <select required v-model="body.difficulty">
                <option disabled selected value style="color:rgba(255,255,255,.6);"> Difficulty </option>
                <option>Easy</option>
                <option>Medium</option>
                <option>Hard</option>
            </select>
            <input type="text" v-model="body.category" placeholder="Category" required/>
            <span @click="addEvent">ADD</span>

        </div>
    </div>
</template>

<script>


export default {
  name: 'AddQuestion',
    data () {
        return {
            body: {
                title: '',
                difficulty: '',
                questionType: '',
                category: '',
            }
        }
    },
    methods : {
        addEvent: function(){
            //console.log(this.body);
            this.$http.post('http://localhost:4000/api/events', this.body).then(
                (event) => {
                    console.log(event)
                }
            )
        }
    },
    mounted () {
        console.log(this.$store.state.token)
    },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
    background-color: #8E44AD;
    margin: 0;
    height: 100%;
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

span{
  font-size: 27px;
  font-weight: 900;
  background-color: #fff;
  width: 15%;
  margin: 10% auto;
  text-align: center;
  padding: 2vh 16vw;
  border-radius: 10px;
  cursor: pointer;
  color: #5F0683;
}

span:hover{
  box-shadow: 0 0 20px #000;
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
    margin-bottom: 10%;

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
