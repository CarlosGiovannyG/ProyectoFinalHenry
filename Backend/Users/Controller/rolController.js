const { Rol  } = require('../db');

const { v4: uuidv4 } = require("uuid");
//const axios = require("axios");


async function initial() {
    try {
        console.log("soy lña initial () ");
        let rol = {
          
            name:"user"
            
        };
     
        await Rol.create(rol);
        
         rol.name = "admin"
         await Rol.create(rol);

        
         rol.name = "cajero"
         await Rol.create(rol);

       
         rol.name = "mozo"
         await Rol.create(rol);

       
         rol.name = "cocinero"
         await Rol.create(rol);

        return "Rol cargados exitosamente";
      
  } catch (error) {
    return "No se pudo cargar los type";
  }
}


module.exports = {
    initial
  };