var express = require('express');
var router = express.Router();
var AdDao = require('./AntiDepresive.dao');
var Ad = new AdDao();


//Nueva Colección de Preguntas DIAGNOSTICO
router.post('/new', async (req, res, next)=>{
    try{
      const {
        Paciente,
        Sexo,
        Edad,
        Descripcion,
        Pregunta1,
      } = req.body;
      const result = await Ad.addNew(Paciente,Sexo,Edad,Descripcion,Pregunta1, req.user._id);

      console.log(result);
      res.status(200).json({msg:"Registro Agregado Satisfactoriamente"});

    } catch (ex) {
      console.log(ex);
      return res.status(500).json({ msg: "Error al procesar petición" });
    }
  }); 


  //Editar Diagnostico
  router.put('/updateRegistro/:id', async (req, res, next)=>{
    try {
      const {id} = req.params;
      const {Pregunta1} = req.body;
      const result = await Ad.addPregunta1ToPaciente(id,String(Pregunta1));
      console.log(result);
      res.status(200).json({"msg":"Preguntas Modificadas"});
    } catch (ex){
      console.log(ex);
      return res.status(500).json({ msg: "Error al procesar petición" });
    }
  });

//Obtener todos los registros( Todos los pacientes)
router.get('/getAll', async (req, res, next)=>{
  try{
    const allAdEntries = await Ad.getAll(req.user._id);
    return res.status(200).json(allAdEntries);
  }catch(ex){
    console.log(ex);
    return res.status(500).json({msg:"Error al procesar petición"});
  }
});


router.get('/byid/:id', async (req, res, next)=>{
  try {
    const {id} = req.params;
    const oneAdEntry = await Ad.getById(id);
    return res.status(200).json(oneAdEntry);
  } catch (ex) {
    console.log(ex);
    return res.status(500).json({ msg: "Error al procesar petición" });
  }
}); // byid

//Obtener El resultado de algun paciente
router.get('/getResultadoById/:id', async (req, res, next)=>{
  try {
    const {id} = req.params;
    const oneAdEntry = await Ad.getResultadoById(id);
    return res.status(200).json(oneAdEntry);
  } catch (ex) {
    console.log(ex);
    return res.status(500).json({ msg: "Error al procesar petición" });
  }
}); 
  module.exports = router;