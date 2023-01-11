'use strict';
module.exports = (sequelize, DataTypes) => {
  const Team = sequelize.define('Team', {
    name: DataTypes.STRING,
    tee_time_id: DataTypes.INTEGER,
    payment: DataTypes.FLOAT,
    score: DataTypes.INTEGER,
    standing_id: DataTypes.INTEGER
  }, {});
  Team.associate = function(models) {
    // associations can be defined here
  };
  return Team;
};