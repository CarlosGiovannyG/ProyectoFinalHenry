const { DataTypes } = require('sequelize');
 

module.exports = (sequelize) => {
  // defino el modelo
    return sequelize.define('mesa', {  
   
      numero: { type: DataTypes.INTEGER , primaryKey: true },

      capacidad: { type: DataTypes.STRING, unique: false }

    }
 
  );
};
