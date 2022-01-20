const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  // defino el modelo
  return sequelize.define('usertable', {   
    id: { type: DataTypes.INTEGER,  autoIncrement: true,   primaryKey: true , key: 'id',  },
    
    idclient: { type: DataTypes.STRING, unique: false  },

    tabclien: { type: DataTypes.STRING, unique: false },

    fecharsv: { type: DataTypes.STRING, unique: false },

  },
  
  );
};
