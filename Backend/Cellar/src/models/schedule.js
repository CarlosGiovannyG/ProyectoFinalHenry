const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  // defino el modelo
  return sequelize.define('schedule', {
    fechaIn: { type: DataTypes.STRING, primaryKey: true },
    fechaOut: { type: DataTypes.STRING },
    mesasLibres: { type: DataTypes.STRING },
  }
  );
};
