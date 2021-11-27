var conn = require('../../../utils/dao');
var ObjectID = require('mongodb').ObjectId;
var _db;
class Vt{
  vtColl =null;
  constructor(){
    this.initModel();
  }
  async initModel(){
     try {
      _db = await conn.getDB();
       this.vtColl = await _db.collection("TEST");
    }catch(ex){
      console.log(ex);
      process.exit(1);
    }
  }
  

  //agregar 
  async addVotacion(Nombre,Descripcion,id){
    let newVotacion = {
      Nombre:Nombre,
      Descripcion:Descripcion,
      Fecha : new Date().getDate(),
      user_id: new ObjectID(id) 
    }
    let result = await this.vtColl.insertOne(newVotacion);
    return result;
  }


  //Editar 
  async updateVotacion(id,Nombre,Descripcion) {
    let filter = {"_id": new ObjectID(id)};
    let updateJson = {
      "$set" : {"Nombre":Nombre,"Descripcion":Descripcion,
                }
    };
    let result = await this.vtColl.updateOne(filter, updateJson);
    return result;
  }

  //Eliminar 
  async deleteVotacion(id) {
    let filter = { "_id": new ObjectID(id) };
    let result = await this.vtColl.deleteOne(filter);
    return result;
  }

  

}
module.exports = Vt;