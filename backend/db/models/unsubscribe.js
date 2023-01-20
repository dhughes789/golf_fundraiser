'use strict';
module.exports = (sequelize, DataTypes) => {
  const Unsubscribe = sequelize.define('Unsubscribe', {
    email: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
    },
    phone: {
      type: DataTypes.INTEGER,
      allowNull: true,
      unique: true
    }
  }, {});
  Unsubscribe.associate = function(models) {
    // associations can be defined here
  };
  return Unsubscribe;
};