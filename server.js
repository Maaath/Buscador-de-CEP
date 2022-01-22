const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();

app.use('/public', express.static('public'));
app.use('/assets', express.static('assets'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/views/home.html');
})

app.get('/about', function(req, res) {
    res.sendFile(__dirname + '/views/about.html');
})

app.post('/viacep', async function(req, res) {
    const { cep } = req.body;

    var result = await axios.get(`https://viacep.com.br/ws/${cep}/json/?callback`)
        .then(res => res)
        .catch(err => {
            console.log('Error: ', err.message);
        });

    res.json(result.data);
})
 
app.get('/about', function(req, res){
    res.sendFile(__dirname +'/views/about.html');
})

//localhost:8080
app.listen(8080, 'localhost', () => {
    console.log('started')
})