'use strict';
module.exports = (sequelize, DataTypes) => {
  const Standing = sequelize.define('Standing', {
    tee_time_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    flight: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          len: [0, 5],
        }
    },
    position: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    prize: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          len: [0, 250],
        }
    }
  }, {});
  Standing.associate = function(models) {
    Standing.belongsTo(models.Tee_time, {foreignKey: 'tee_time_id'})
  };
  return Standing;
};