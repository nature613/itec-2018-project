<template>
    <div class="hello">
        <h1>QRCodes for Vue</h1>
        <qr-code text="http://localhost:8080/eents/quiz/1/dagdgmh"></qr-code>

    </div>
</template>

<script>
import VueQRCodeComponent from 'vue-qrcode-component'

export default {
  name: 'Qrcode',
    data () {
        return {
        }
    },
    methods : {

    },
    components: {
        'qr-code': VueQRCodeComponent
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
    height: 90vh;
    padding-top: 5vh;
    display: flex;
    justify-content: center;
    align-content: center
}

h2{
    font-size: 2rem;
    color: #fff;
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
