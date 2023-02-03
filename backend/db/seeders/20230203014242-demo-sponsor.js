'use strict';
const { faker } = require('@faker-js/faker')

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Sponsors', [{
        imageUrl: 'https://ibb.co/zPfvxFc',
        year: '2023',
        name: 'Jessie Schrimpf',
        phone: faker.phone.phoneNumber('573-###-###'),
        email: 'demo@admin.io'
      },
      {
        imageUrl: 'https://ibb.co/YXsJ9KR',
        year: '2023',
        name: 'Rodrick Smith',
        phone: faker.phone.phoneNumber('573-###-###'),
        email: 'demo@admin.io'
      }
    ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Sponsors', null, {});
  }
};
