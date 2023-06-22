var mysql = require('mysql');
const express = require('express')
const cors = require('cors')

const bodyParser = require('body-parser');
const app = express() 
  


// coneccion con la base de datos
var connection = mysql.createConnection({
    host     : 'localhost',
   
    user     : 'hellboy',
    password : 'hellboy22',
     database : "musica",
   
  

});
  
    
  

 


connection.connect();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())
app.use(cors())

// traer todas las canciones

app.get("/api/musica", (req, res)=> {
  connection.query('SELECT id, nombre, artista, fecha_lanzamiento FROM musica.tbl_musica', function(err, rows) {
        if (err) throw err;
        res.status(200).json(rows)
    });
})
// // Enviar un nuevo cliente
app.post("/api/musica", (req, res)=>{
  connection.query('INSERT INTO musica.tbl_musica ( id, nombre, artista, fecha_lanzamiento, tbl_musicacol,tbl_album_id, tbl_categorias_id,tbl_usuarios_id) VALUES (?,?,?,?,?,?,?,?);', [id, nombre, artista, fecha_lanzamiento, tbl_musicacol,tbl_album_id, tbl_categorias_id,tbl_usuarios_id], function(err, rows) {
        if (err) throw err;
        res.status(200).json(rows)
    });
})









// // actualizar una  cancion

app.put("/api/musica/:id", (req, res)=> {
  const {id} = req.params;
  const { nombre, artista, fecha_lanzamiento, tbl_musicacol,tbl_album_id, tbl_categorias_id,tbl_usuarios_id} = req.body;
  
  connection.query('UPDATE musica.tbl_musica SET nombre = ? nombre = ?, artista= ?, fecha_lanzamiento= ?, tbl_musicacol= ?,tbl_album_id= ?, tbl_categorias_id= ?,tbl_usuarios_id= ? WHERE id= ? ',

 [  nombre, artista, fecha_lanzamiento, tbl_musicacol,tbl_album_id, tbl_categorias_id,tbl_usuarios_id, id], function(err, rows) {
        if (err) throw err;
        res.status(200).json(rows)
    });
})


// // borrar una  cancion

app.delete("/api/musica/:id", (req, res)=> {
  const {id} = req.params;

  connection.query('delete from musica.tbl_musica where id =? ', [id],

 function(err, rows) {
        if (err) throw err;
        res.status(200).json(rows)
    });
})
// // traer mascota por id
// app.get("/api/mascotas/:id", (req, res)=> {
//   const {id} = req.params;

//   connection.query(' select id, nombre, raza, edad, sexo, precio from  bd_t_mascotas.tbl_mascota where id =? ', [id],

//  function(err, rows) {
//         if (err) throw err;
//         res.status(200).json(rows)
//     });
// })




// CLIENNTES
// traer todas los usuarios

app.get("/api/usuarios", (req, res)=> {
    connection.query('SELECT id, nombre, apellido, correo FROM musica.tbl_usuarios', function(err, rows) {
          if (err) throw err;
          res.status(200).json(rows)
      }); 
  })
  // // Enviar un nuevo usuario
  app.post("/api/usuarios", (req, res)=>{
    const {id, nombre, apellido, correo}= req.body
    connection.query('INSERT INTO musica.tbl_usuarios ( id, nombre, apellido, correo) VALUES (?,?,?,?);', [id, nombre, apellido, correo], function(err, rows) {
          if (err) throw err;
          res.status(200).json(rows)
      });
  })
  
  
  
   
  
   
  
  
  
  // // actualizar un usuario
  
  app.put("/api/usuarios/:id", (req, res)=> {
    const {id} = req.params;
    const { nombre, apellido, correo} = req.body;
    
    connection.query('UPDATE musica.tbl_usuarios SET  nombre= ?, apellido= ?, correo= ? WHERE id= ? ',
  
   [nombre, apellido, correo, id], function(err, rows) {
          if (err) throw err;
          res.status(200).json(rows)
      });
  })  
  
  
  // // borrar un usuario
  
  app.delete("/api/usuarios/:id", (req, res)=> {
    const {id} = req.params;
  
    connection.query('delete from  musica.tbl_usuarios where id =? ', [id],
  
   function(err, rows) {
          if (err) throw err;
          res.status(200).json(rows)
      });
  })




  // Categoria
// traer todas las canciones

app.get("/api/categorias", (req, res)=> {
    connection.query('SELECT id, categoria FROM musica.tbl_categorias', function(err, rows) {
          if (err) throw err;
          res.status(200).json(rows)
      });
  })
  // // Enviar una nuevo categoria
  app.post("/api/categorias", (req, res)=>{
    connection.query('INSERT INTO musica.tbl_categorias ( id, categoria) VALUES (?,?);', [id, categoria], function(err, rows) {
          if (err) throw err;
          res.status(200).json(rows)
      });
  })
  
  
  
  
  
  // // actualizar una  categoria
  
  app.put("/api/categoria/:id", (req, res)=> {
    const {id} = req.params;
    const { categoria} = req.body;
    
    connection.query('UPDATE musica.tbl_categorias SET  categoria= ? WHERE id= ? ',
  
   [categoria,id], function(err, rows) {
          if (err) throw err;
          res.status(200).json(rows)
      });
  })
  
  
  // // borrar una  categoria
  
  app.delete("/api/categoria:id", (req, res)=> {
    const {id} = req.params;
  
    connection.query('delete from  musica.tbl_categorias where id =? ', [id],
  
   function(err, rows) {
          if (err) throw err;
          res.status(200).json(rows)
      });
  })


  // Album
// traer todas los album

app.get("/api/album", (req, res)=> {
    connection.query('SELECT id, nombre FROM musica.tbl_album', function(err, rows) {
          if (err) throw err;
          res.status(200).json(rows)
      });
  })
  // // Enviar un nuevo cliente
  app.post("/api/album", (req, res)=>{
    connection.query('INSERT INTO musica.tbl_album ( id, nombre) VALUES (?,?);', [id, categoria], function(err, rows) {
          if (err) throw err;
          res.status(200).json(rows)
      });
  })
  
  
  
  
  
  
  
  
  
  // // actualizar una  cancion
  
  app.put("/api/album/:id", (req, res)=> {
    const {id} = req.params;
    const {nombre} = req.body;
    
    connection.query('UPDATE musica.tbl_album SET nombre= ? WHERE id= ? ',
  
   [nombre,id], function(err, rows) {
          if (err) throw err;
          res.status(200).json(rows)
      });
  })
  
  
  // // borrar una  cancion
  
  app.delete("/api/album/:id", (req, res)=> {
    const {id} = req.params;
  
    connection.query('delete from  musica.tbl_album where id =? ', [id],
  
   function(err, rows) {
          if (err) throw err;
          res.status(200).json(rows)
      });
  })

app.listen(4000, ()=>{
    console.log(`la app se esta ejecutando en elpuerto ${4000}`);
})