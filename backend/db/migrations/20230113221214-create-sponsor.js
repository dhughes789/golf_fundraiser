'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Sponsors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      imageUrl: {
        allowNull: true,
        type: Sequelize.STRING(250)
      },
      year: {
        allowNull: false,
        type: Sequelize.STRING(4)
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      phone: {
        allowNull: true,
        type: Sequelize.STRING(13)
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING(75)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Sponsors');
  }
};