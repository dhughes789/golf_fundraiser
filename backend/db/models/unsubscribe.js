'use strict';
module.exports = (sequelize, DataTypes) => {
  const Unsubscribe = sequelize.define('Unsubscribe', {
    email: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
      validate: {
        len: [3, 75]
      }
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
      validate: {
        len: [10, 13]
      }
    }
  }, {});
  Unsubscribe.associate = function(models) {
    // associations can be defined here
  };
  return Unsubscribe;
};