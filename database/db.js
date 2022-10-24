const mysql =  require('mysql');
const colors = require('colors');


 //* MYSQL *//       
const conexion = mysql.createConnection({
    host: 'mysql-92682-0.cloudclusters.net',
    port: '19100',
    user: 'admin',
    password: 'UKkuuEaO',
    database: 'mydb'
});

conexion.connect((error)=>{
    if(error){
        console.error('error connecting to mysql server' + error);
        return;
    }
    console.log('** connecting to Base de datos PORT |3306 | **');
})


module.exports = conexion;