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
  // TODO: custom validator for numeric 10 digit phone number. Maybe regex?
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
      validate: {
        len: [0, 10]
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
    // associations can be defined here
  };
  return User;
};