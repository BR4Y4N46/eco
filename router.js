const express = require('express');
const router = express.Router();


const conexion = require('./database/db');
//*
//router.get('/', (req, res) => {

   // conexion.query('select * from mydb.registros', (error, results) => {
       // if (error) {
         //   throw error;
       // } else {
      //      res.render('index.html', { results: results });
    //    }
  //  })
//});
//
//aca todas las rutas
//router.get('/create', (req, res) => {
  //  res.render('create')
//});

//ruta para editar los registos

//router.get('/edit/:id', (req, res) => {
  //  const id = req.params.id;
  //  conexion.query('select * from registros.personal where id=?', [id], (error, results) => {
   //     if (error) {
      //      throw error;
     //   } else {
      //      res.render('edit', { usr: results[0] });
    //    }
  //  })
//})



//ruta para eliminar registros

//router.get('/delete/:id', (req, res) => {
   // const id = req.params.id;
   // conexion.query('DELETE FROM mydb.registros WHERE id =?', [id], (error, results) => {
      //  console.log('Elemento del registro', + id +' ', 'delete'.red)
      //  if (error) {
        //    throw error;
        //} else {
        //    res.redirect('/');
       // }
    //})

//});
const crud = require('./controllers/crud');
router.post('/index.html', crud.save);
//router.post('/update', crud.update);

module.exports = router
