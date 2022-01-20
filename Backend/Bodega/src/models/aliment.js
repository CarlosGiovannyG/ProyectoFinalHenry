const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  // defino el modelo
  return sequelize.define('aliment', {
    id: { type: DataTypes.UUID, primaryKey: true, defaultValue: DataTypes.UUIDV4 },

    name: { type: DataTypes.STRING, allowNull: false, unique: true, },

    ubicacion: { type: DataTypes.STRING, },

    unidad_de_medida: { type: DataTypes.STRING, },

    cantidad:{ type: DataTypes.INTEGER,  }
  });
};
