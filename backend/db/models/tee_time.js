'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tee_time = sequelize.define('Tee_time', {
    course: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 75]
      }
    },
    time_slot: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [2, 2]
      }
    },
    date: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 20]
      }
    },
    capacity: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  Tee_time.associate = function(models) {
    Tee_time.hasMany(models.Standing, {foreignKey: 'tee_time_id'})
  };
  return Tee_time;
};