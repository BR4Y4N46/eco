const mysql =  require('mysql');
const colors = require('colors');
const mongoose = require('mongoose');

const user='admin';
const password = 'F13br3S3x';
const DB='registros'
const uri =`mongodb+srv://${user}:${password}@data-register.ay8gwdh.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(uri,
    {useNewUrlParser:true, useUnifiedTopology: true}
    )
        .then(()=> console.log('--------------'))
        .catch(e => console.log(e))





 //* MYSQL *//       
const conexion = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'F13br3S3x',
    database: 'mydb'
});

conexion.connect((error)=>{
    if(error){
        console.error('error connecting to mysql server' + error);
        return;
    }
    console.log('** connecting to Base de datos PORT |3306 | **'.yellow);
})


module.exports = conexion;