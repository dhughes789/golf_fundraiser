'use strict';
const { Validator } = require('sequelize')
const bcrypt = require('bcryptjs');

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
  },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
      validate: {
        len: [10, 13],
        isPhone(value) {
          if (value !== undefined) {
            console.log("-----", value)
            const phoneValidator = /^\(?\d{3}?[\)-\s\.]?\d{3}[-\s\.]?\d{4}$/
            if (!phoneValidator.test(value)) {
              throw new Error('Must be a valid phone number.')
            }
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
  }, 
  {
    defaultScope: {
      attributes: {
        exclude: ['hashedPassword', 'email', 'phone', 'createdAt', 'updatedAt'],
      },
    }, 
    scopes: {
      currentUser: {
        attributes:{
          exclude: ['hashedPassword']
        },
      },
      loginUser: {
        attributes:{}
      }
    }
  });
  User.associate = function(models) {
    User.hasMany(models.Teammate, {foreignKey: 'user_id'})
  };

  User.prototype.toSafeObject = function() {
    const { id, username, email } = this
    return { id, username, email }
  }

  User.prototype.validatePassword = function (password) {
    return bcrypt.compareSync(password, this.hashedPassword.toString());
   };

  User.getCurrentUserById = async function (id) {
  return await User.scope('currentUser').findByPk(id);
  };

  User.login = async function ({ credential, password }) {
    const { Op } = require('sequelize');
    const user = await User.scope('loginUser').findOne({
      where: {
        [Op.or]: {
          username: credential,
          email: credential,
        },
      },
    });
    if (user && user.validatePassword(password)) {
      return await User.scope('currentUser').findByPk(user.id);
    }
  };

  User.signup = async function ({ username, email, password, phone, admin, shirt_size }) {
    const hashedPassword = bcrypt.hashSync(password);
    const user = await User.create({
      username,
      email,
      hashedPassword,
      phone,
      admin,
      shirt_size
    });
    return await User.scope('currentUser').findByPk(user.id);
  };

  return User;
};
