const conexion = require('../database/db');
const morgan = require('morgan')
const express = require('express')
const colors = require('colors');



//app.use(bodyParser.urlencoded({ extended: false }));
//app.use(bodyParser.json());




exports.save = (req, res)=>{
    const usr = req.body.usr;
    const number = req.body.number;
    const email = req.body.email;
    const text_adicion = req.body.text_adicion;
    //const rol = req.body.email;
    // const usr = nombreperson;
    //const rol = req.body.telefono_celular;
    //const email = req.body.email;
    //const textico = req.body.text_adicion;
    console.log('========================================'.red)
    console.log('=========DATA ENVIADA POR JSON=========='.red)
    console.log(usr + " - " + number + " - " + email + " - " + text_adicion);
    
    const {Schema, model} = require('mongoose');
    new Schema({
        title:{
            type:String,
            required: true
        },
        descripction:{
            type:String,
            required: true
        }
    })

    conexion.query('INSERT INTO mydb.registros SET ?', { usr:usr,  number:number, email:email, text_adicion:text_adicion},(error, results)=>{
       if(error) {
          console.log(error);
    } else{
      res.redirect('/');
      console.log('_________________Sucessfull_____________________'.green);
    } 
})
}


    



//exports.update = (req, res)=>{
   // const id = req.body.id;
    //const usr = req.body.usr;
   // const rol = req.body.rol;
   // console.log(id + " Update to rol" +rol.blue);
   // conexion.query('UPDATE mydb.registros SET ? WHERE id = ?', [{usr:usr, rol:rol}, 1],(error, results)=>{
       // if(error) {
        //    console.log(error);
  //  } else{
     //   res.redirect('/');
  //  } 