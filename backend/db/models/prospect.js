'use strict';
const { Validator } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  const Prospect = sequelize.define('Prospect', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [3, 30],
        isNotEmail(value) {
          if (Validator.isEmail(value)) {
            throw new Error('Cannot be an email.');
          }
        },
      },  
    }, 
    email: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
      validate: {
        len: [3, 75],
        isEmail(value) {
          if (!Validator.isEmail(value)) {
            throw new Error('Must be a valid email address.')
          }
        }
    },
  },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
      validate: {
        len: [10, 13],
        isPhone(value) {
          const phoneValidator = /^\(?\d{3}?[\)-\s\.]?\d{3}[-\s\.]?\d{4}$/
          if (!phoneValidator.test(value)) {
            throw new Error('Must be a valid phone number.')
          }
        }
      },
    },
    shirt_size: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 5]
      },
    }
  
  }, {});
  Prospect.associate = function(models) {
    Prospect.hasMany(models.Teammate, {foreignKey: 'prospect_id'})
  };
  return Prospect;
};