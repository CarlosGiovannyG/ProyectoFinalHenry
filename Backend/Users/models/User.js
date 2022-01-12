const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('user', {
    firstName: {
      type : DataTypes.STRING,
      allowNull: false,
  },

  lastName: {
    type : DataTypes.STRING,
  //  allowNull: false,
},



  email:{
      type : DataTypes.STRING,
      allowNull: false,
      unique: {    
          args: true,    
      },
  
  },
  
  password: {
      type : DataTypes.STRING,
      allowNull: false,
  },

  telephone: {
    type : DataTypes.STRING,
   // allowNull: false,
},

address: {
  type : DataTypes.STRING,
  //allowNull: false,
},

  });
};


