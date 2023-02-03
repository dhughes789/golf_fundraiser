'use strict';
const { faker } = require('@faker-js/faker')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Prospects', [
      {
        username: faker.name.lastName(),
        email: faker.internet.email(),
        phone: faker.phone.phoneNumber('573-###-###'),
        shirt_size: faker.helpers.arrayElement(['XS', 'S', 'M', 'L', 'XL', 'XXL']),
      },
      {
        username: faker.name.lastName(),
        email: faker.internet.email(),
        phone: faker.phone.phoneNumber('573-###-###'),
        shirt_size: faker.helpers.arrayElement(['XS', 'S', 'M', 'L', 'XL', 'XXL']),
      },
      {
        username: faker.name.lastName(),
        email: faker.internet.email(),
        phone: faker.phone.phoneNumber('573-###-###'),
        shirt_size: faker.helpers.arrayElement(['XS', 'S', 'M', 'L', 'XL', 'XXL']),
      },
      {
        username: faker.name.lastName(),
        email: faker.internet.email(),
        phone: faker.phone.phoneNumber('573-###-###'),
        shirt_size: faker.helpers.arrayElement(['XS', 'S', 'M', 'L', 'XL', 'XXL']),
      },
      {
        username: faker.name.lastName(),
        email: faker.internet.email(),
        phone: faker.phone.phoneNumber('573-###-###'),
        shirt_size: faker.helpers.arrayElement(['XS', 'S', 'M', 'L', 'XL', 'XXL']),
      },
      {
        username: faker.name.lastName(),
        email: faker.internet.email(),
        phone: faker.phone.phoneNumber('573-###-###'),
        shirt_size: faker.helpers.arrayElement(['XS', 'S', 'M', 'L', 'XL', 'XXL']),
      },
      {
        username: faker.name.lastName(),
        email: faker.internet.email(),
        phone: faker.phone.phoneNumber('573-###-###'),
        shirt_size: faker.helpers.arrayElement(['XS', 'S', 'M', 'L', 'XL', 'XXL']),
      },
      {
        username: faker.name.lastName(),
        email: faker.internet.email(),
        phone: faker.phone.phoneNumber('573-###-###'),
        shirt_size: faker.helpers.arrayElement(['XS', 'S', 'M', 'L', 'XL', 'XXL']),
      },
      {
        username: faker.name.lastName(),
        email: faker.internet.email(),
        phone: faker.phone.phoneNumber('573-###-###'),
        shirt_size: faker.helpers.arrayElement(['XS', 'S', 'M', 'L', 'XL', 'XXL']),
      },
      {
        username: faker.name.lastName(),
        email: faker.internet.email(),
        phone: faker.phone.phoneNumber('573-###-###'),
        shirt_size: faker.helpers.arrayElement(['XS', 'S', 'M', 'L', 'XL', 'XXL']),
      },
      {
        username: faker.name.lastName(),
        email: faker.internet.email(),
        phone: faker.phone.phoneNumber('573-###-###'),
        shirt_size: faker.helpers.arrayElement(['XS', 'S', 'M', 'L', 'XL', 'XXL']),
      },
      {
        username: faker.name.lastName(),
        email: faker.internet.email(),
        phone: faker.phone.phoneNumber('573-###-###'),
        shirt_size: faker.helpers.arrayElement(['XS', 'S', 'M', 'L', 'XL', 'XXL']),
      }
      
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Prospects', null, {});
  }
};
