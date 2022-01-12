const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('rol', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });
};
