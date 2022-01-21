const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  // defino el modelo
  return sequelize.define('schedule', {
    fecha: { type: DataTypes.STRING, primaryKey: true },
    mesasLibres: { type: DataTypes.STRING},    
  },
  {
    classMethods: {
      associate: function(models) {
        return schedule.belongsToMany(models.mesa, {
          through: 'rafatabla'
        });
      }
    }
  }
  );
};
