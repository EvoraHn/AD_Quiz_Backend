var express = require('express');
var router = express.Router();
var VtDao = require('./Votaciones.dao');
var Vt = new VtDao();


//Agregar Votacion
router.post('/new', async (req, res, next)=>{
    try{
      const {
        Nombre,
        Descripcion,
      } = req.body;
      const result = await Vt.addVotacion(Descripcion,Nombre, req.user._id);

      console.log(result);
      res.status(200).json({msg:"Votacion Agregada Satisfactoriamente"});

    } catch (ex) {
      console.log(ex);
      return res.status(500).json({ msg: "Error al procesar petición" });
    }
  }); 


  //Editar 
  router.put('/update/:id', async (req, res, next)=>{
    try {
      const {id} = req.params;
      const {Nombre} = req.body;
      const {Descripcion} = req.body;
      const result = await Vt.updateVotacion(id,Nombre,Descripcion);
      console.log(result);
      res.status(200).json({"msg":"Registro Modificado"});
    } catch (ex){
      console.log(ex);
      return res.status(500).json({ msg: "Error al procesar petición" });
    }
  });




  module.exports = router;