'use strict';
module.exports = (sequelize, DataTypes) => {
  const Team = sequelize.define('Team', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 50]
      }
    },
    tee_time_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    payment: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    score: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    standing_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    }
  }, {});
  Team.associate = function(models) {
    Team.belongsTo(models.Tee_time, {foreignKey: 'tee_time_id'})
    Team.hasOne(models.Standing, {foreignKey: 'standing_id'})
  };
  return Team;
};