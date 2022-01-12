const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('menu', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    cantidad: {
      type: DataTypes.STRING,
      //  allowNull: false,
    },
  });
};
