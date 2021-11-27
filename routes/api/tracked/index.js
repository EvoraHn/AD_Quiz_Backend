const express = require("express");
let router = express.Router();
//const jwt = require("jsonwebtoken");
//const mailSender = require("../../../utils/mailer");
//let SecModelClass = require('./sec.model.js');
//let tracked = new trackedModelClass();


router.post('/tracked', async (req, res, next)=>{
    try{
      const onUbicacionConcedida = ubicacion => {
        console.log(ubicacion);
        const coordenadas = ubicacion.coords;
        $latitud.innerText = coordenadas.latitude;
        $longitud.innerText = coordenadas.longitude;
        loguear(`${ubicacion.timestamp}: ${coordenadas.latitude},${coordenadas.longitude}`);
      }
    
      const loguear = texto => {
        $log.innerText += "\n" + texto;
      };
      onUbicacionConcedida
      return res.status(200).json({"msg":"coordenadas cargadas correctamente"});
    } catch (ex) {
      console.log(ex);
      return res.status(500).json({"msg":"Error al procesar la información"});
    }
  }); 