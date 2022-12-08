'use strict';
module.exports = (sequelize, DataTypes) => {
  const Standing = sequelize.define('Standing', {
    tee_time_id: DataTypes.INTEGER,
    flight: DataTypes.STRING,
    position: DataTypes.INTEGER,
    prize: DataTypes.STRING
  }, {});
  Standing.associate = function(models) {
    // associations can be defined here
  };
  return Standing;
};