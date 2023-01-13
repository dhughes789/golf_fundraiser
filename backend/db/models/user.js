'use strict';
const { Validator } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
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
      allowNull: false,
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
    hashedPassword: {
      type: DataTypes.STRING.BINARY,
      allowNull: false,
      validate: {
        len: [60, 60]
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
    admin: {
      type: DataTypes.BOOLEAN,
      allowNull: false

    },
    shirt_size: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 5]
      },
    }
  }, {});
  User.associate = function(models) {
    User.hasMany(models.Teammate, {foreignKey: 'user_id'})
  };
  return User;
};