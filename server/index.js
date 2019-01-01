const express = require('express');
const routes = require('./routes/api')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express();

app.use(cors())

app.set('secretKey', 'CHEIESECRETA');

//connect to MongoDB
mongoose.connect('mongodb://localhost/iQuiz', {useNewUrlParser: true});
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

app.use('/api', routes);

//error handling
app.use((err, req, res, next) => {
    res.status(422).send({ error: err.message });
});

app.listen(4000, ()=>{
    console.log('Server running on port 4000')
})