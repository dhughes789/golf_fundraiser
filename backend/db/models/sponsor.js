'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sponsor = sequelize.define('Sponsor', {
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [0, 250],
      }
  },
    year: {
      allowNull:false,
      type:DataTypes.INTEGER,
      validate:{
        len:[0,50],
      }
    },
    
      name: {
      allowNull:false,
      type: DataTypes.STRING,
      validate:{
        len:[0,50],
      }
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
      }
    }
  }, {});
  Sponsor.associate = function(models) {
    // associations can be defined here
  };
  return Sponsor;
};