'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tee_time = sequelize.define('Tee_time', {
    course: DataTypes.STRING,
    time_slot: DataTypes.STRING,
    date: DataTypes.DATE,
    capacity: DataTypes.INTEGER
  }, {});
  Tee_time.associate = function(models) {
    // associations can be defined here
  };
  return Tee_time;
};