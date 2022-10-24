const exp = require('constants');
const { json } = require('express');
const express = require('express');
const path = require('path')
const app = express()
const router = require('./router');
const bodyParser = require("body-parser");

//rutas

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use('/', express.static(__dirname, + 'public'));

app.use(bodyParser.urlencoded({extended:false}));
var morgan = require('morgan');
console.log('ruta' + ' '+ __dirname .blue);


app.use('/', require('./router'));
//aca configuramos las rutas
app.use(morgan('dev'))
app.use((req, res)=>{
    res.sendFile(__dirname,+'index.html')
})



app.listen(8080, () =>{
    console.log('server on port 8080')
})