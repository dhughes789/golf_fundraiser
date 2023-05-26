'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Unsubscribes', [{
        email: 'Alford.Collins@hotmail.com',
        phone: '573-671-808',
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Unsubscribes', null, {});
  }
};
