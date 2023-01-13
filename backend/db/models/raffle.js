'use strict';
module.exports = (sequelize, DataTypes) => {
  const Raffle = sequelize.define('Raffle', {
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [0, 250],
      }
  },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [0, 250],
      }
  },
    donor: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [0, 250],
      }
  }
  }, {});
  Raffle.associate = function(models) {
    // associations can be defined here and make sure it works
  };
  return Raffle;
};