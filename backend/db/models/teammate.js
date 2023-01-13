'use strict';
module.exports = (sequelize, DataTypes) => {
  const Teammate = sequelize.define('Teammate', {
    team_id: {
      allowNull:false,
      type:DataTypes.INTEGER
    },
    prospect_id: {
      allowNull:true,
      type:DataTypes.INTEGER
    },
    user_id: {
      allowNull:true,
      type:DataTypes.INTEGER
    },
    captain: {
      allowNull:false,
      type:DataTypes.BOOLEAN
    },
    paid: {
      allowNull:false,
      type:DataTypes.BOOLEAN
    }
  }, {});
  Teammate.associate = function(models) {
    Teammate.belongsTo(models.Team, {foreignKey: 'team_id'})
    Teammate.belongsTo(models.Prospect, {foreignKey: 'prospect_id'})
    Teammate.belongsTo(models.User, {foreignKey: 'user_id'})
  };
  return Teammate;
};