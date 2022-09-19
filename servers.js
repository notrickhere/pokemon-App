const express = require('express')
const app = express()
const port = 3000

const pokemon = require('./models/pokemon.js')

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.get('/', function(req,res){
    res.send('Welcome to the Pokemon App!')
})

app.get('/pokemon', function(req,res){
    res.render('Index')
})

app.get('/pokemon/:id', function(req,res){
    res.send(req.params.id);
})

app.listen(port, function() {
    console.log('listening')
})