const express = require('express');

const app = express();

app.use('/public', express.static('public'));

app.use('/assets', express.static('assets'));

app.get('/', function(req, res){
    res.sendFile(__dirname +'/views/home.html');
})

app.get('/about', function(req, res){
    res.sendFile(__dirname +'/views/about.html');
})

//localhost:8080
app.listen(8080, 'localhost', ()=> {
    console.log('started')
})