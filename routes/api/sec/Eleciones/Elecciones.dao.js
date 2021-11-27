
class elecciones{

    awaitColl =null;

    async addNew(partido){
        let newEleccion = {
          partido,
          swotDate: new Date().getTime(),
          eleccion_id: str("Eleccion" +new Date().getTime()),
        }
        let result = await this.awaitColl.insertOne(newEleccion);
        return result;
      }


      async addNew(partido_Nombre, id){
        let newPartido = {
          partido_Nombre,
          swotDate: new Date().getTime(),
          Partido_id: new ObjectID(id) 
        }
        let result = await this.awaitColl.insertOne(newPartido);
        return result;
      }

}
