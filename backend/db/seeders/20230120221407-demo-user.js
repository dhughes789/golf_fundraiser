'use strict';
const { faker } = require('@faker-js/faker')
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        username: 'DemoUser',
        email: 'demo@user.io',
        hashedPassword: bcrypt.hashSync('password'),
        phone: faker.phone.phoneNumber('573-###-###'),
        admin: false,
        shirt_size: 'L',
      },
      {
        username: 'DemoAdmin',
        email: 'demo@admin.io',
        hashedPassword: bcrypt.hashSync('password'),
        phone: faker.phone.phoneNumber('573-###-###'),
        admin: true,
        shirt_size: 'L',
      },
      {
        username: faker.name.lastName(),
        email: faker.internet.email(),
        hashedPassword: bcrypt.hashSync('password'),
        phone: faker.phone.phoneNumber('573-###-###'),
        admin: false,
        shirt_size: faker.helpers.arrayElement(['XS', 'S', 'M', 'L', 'XL', 'XXL']),
      },
      {
        username: faker.name.lastName(),
        email: faker.internet.email(),
        hashedPassword: bcrypt.hashSync('password'),
        phone: faker.phone.phoneNumber('573-###-###'),
        admin: false,
        shirt_size: faker.helpers.arrayElement(['XS', 'S', 'M', 'L', 'XL', 'XXL']),
      },
      {
        username: faker.name.lastName(),
        email: faker.internet.email(),
        hashedPassword: bcrypt.hashSync('password'),
        phone: faker.phone.phoneNumber('573-###-###'),
        admin: false,
        shirt_size: faker.helpers.arrayElement(['XS', 'S', 'M', 'L', 'XL', 'XXL']),
      },
      {
        username: faker.name.lastName(),
        email: faker.internet.email(),
        hashedPassword: bcrypt.hashSync('password'),
        phone: faker.phone.phoneNumber('573-###-###'),
        admin: false,
        shirt_size: faker.helpers.arrayElement(['XS', 'S', 'M', 'L', 'XL', 'XXL']),
      },
      {
        username: faker.name.lastName(),
        email: faker.internet.email(),
        hashedPassword: bcrypt.hashSync('password'),
        phone: faker.phone.phoneNumber('573-###-###'),
        admin: false,
        shirt_size: faker.helpers.arrayElement(['XS', 'S', 'M', 'L', 'XL', 'XXL']),
      },
      {
        username: faker.name.lastName(),
        email: faker.internet.email(),
        hashedPassword: bcrypt.hashSync('password'),
        phone: faker.phone.phoneNumber('573-###-###'),
        admin: false,
        shirt_size: faker.helpers.arrayElement(['XS', 'S', 'M', 'L', 'XL', 'XXL']),
      },
      {
        username: faker.name.lastName(),
        email: faker.internet.email(),
        hashedPassword: bcrypt.hashSync('password'),
        phone: faker.phone.phoneNumber('573-###-###'),
        admin: false,
        shirt_size: faker.helpers.arrayElement(['XS', 'S', 'M', 'L', 'XL', 'XXL']),
      },
      {
        username: faker.name.lastName(),
        email: faker.internet.email(),
        hashedPassword: bcrypt.hashSync('password'),
        phone: faker.phone.phoneNumber('573-###-###'),
        admin: false,
        shirt_size: faker.helpers.arrayElement(['XS', 'S', 'M', 'L', 'XL', 'XXL']),
      },
      {
        username: faker.name.lastName(),
        email: faker.internet.email(),
        hashedPassword: bcrypt.hashSync('password'),
        phone: faker.phone.phoneNumber('573-###-###'),
        admin: false,
        shirt_size: faker.helpers.arrayElement(['XS', 'S', 'M', 'L', 'XL', 'XXL']),
      },
      {
        username: faker.name.lastName(),
        email: faker.internet.email(),
        hashedPassword: bcrypt.hashSync('password'),
        phone: faker.phone.phoneNumber('573-###-###'),
        admin: false,
        shirt_size: faker.helpers.arrayElement(['XS', 'S', 'M', 'L', 'XL', 'XXL']),
      },
      {
        username: faker.name.lastName(),
        email: faker.internet.email(),
        hashedPassword: bcrypt.hashSync('password'),
        phone: faker.phone.phoneNumber('573-###-###'),
        admin: false,
        shirt_size: faker.helpers.arrayElement(['XS', 'S', 'M', 'L', 'XL', 'XXL']),
      },
      {
        username: faker.name.lastName(),
        email: faker.internet.email(),
        hashedPassword: bcrypt.hashSync('password'),
        phone: faker.phone.phoneNumber('573-###-###'),
        admin: false,
        shirt_size: faker.helpers.arrayElement(['XS', 'S', 'M', 'L', 'XL', 'XXL']),
      },
      {
        username: faker.name.lastName(),
        email: faker.internet.email(),
        hashedPassword: bcrypt.hashSync('password'),
        phone: faker.phone.phoneNumber('573-###-###'),
        admin: false,
        shirt_size: faker.helpers.arrayElement(['XS', 'S', 'M', 'L', 'XL', 'XXL']),
      },
      {
        username: faker.name.lastName(),
        email: faker.internet.email(),
        hashedPassword: bcrypt.hashSync('password'),
        phone: faker.phone.phoneNumber('573-###-###'),
        admin: false,
        shirt_size: faker.helpers.arrayElement(['XS', 'S', 'M', 'L', 'XL', 'XXL']),
      },
      {
        username: faker.name.lastName(),
        email: faker.internet.email(),
        hashedPassword: bcrypt.hashSync('password'),
        phone: faker.phone.phoneNumber('573-###-###'),
        admin: false,
        shirt_size: faker.helpers.arrayElement(['XS', 'S', 'M', 'L', 'XL', 'XXL']),
      },
      {
        username: faker.name.lastName(),
        email: faker.internet.email(),
        hashedPassword: bcrypt.hashSync('password'),
        phone: faker.phone.phoneNumber('573-###-###'),
        admin: false,
        shirt_size: faker.helpers.arrayElement(['XS', 'S', 'M', 'L', 'XL', 'XXL']),
      },
      {
        username: faker.name.lastName(),
        email: faker.internet.email(),
        hashedPassword: bcrypt.hashSync('password'),
        phone: faker.phone.phoneNumber('573-###-###'),
        admin: false,
        shirt_size: faker.helpers.arrayElement(['XS', 'S', 'M', 'L', 'XL', 'XXL']),
      },
      {
        username: faker.name.lastName(),
        email: faker.internet.email(),
        hashedPassword: bcrypt.hashSync('password'),
        phone: faker.phone.phoneNumber('573-###-###'),
        admin: false,
        shirt_size: faker.helpers.arrayElement(['XS', 'S', 'M', 'L', 'XL', 'XXL']),
      },
      {
        username: faker.name.lastName(),
        email: faker.internet.email(),
        hashedPassword: bcrypt.hashSync('password'),
        phone: faker.phone.phoneNumber('573-###-###'),
        admin: false,
        shirt_size: faker.helpers.arrayElement(['XS', 'S', 'M', 'L', 'XL', 'XXL']),
      },
      {
        username: faker.name.lastName(),
        email: faker.internet.email(),
        hashedPassword: bcrypt.hashSync('password'),
        phone: faker.phone.phoneNumber('573-###-###'),
        admin: false,
        shirt_size: faker.helpers.arrayElement(['XS', 'S', 'M', 'L', 'XL', 'XXL']),
      },
      {
        username: faker.name.lastName(),
        email: faker.internet.email(),
        hashedPassword: bcrypt.hashSync('password'),
        phone: faker.phone.phoneNumber('573-###-###'),
        admin: false,
        shirt_size: faker.helpers.arrayElement(['XS', 'S', 'M', 'L', 'XL', 'XXL']),
      },
      {
        username: faker.name.lastName(),
        email: faker.internet.email(),
        hashedPassword: bcrypt.hashSync('password'),
        phone: faker.phone.phoneNumber('573-###-###'),
        admin: false,
        shirt_size: faker.helpers.arrayElement(['XS', 'S', 'M', 'L', 'XL', 'XXL']),
      },
      {
        username: faker.name.lastName(),
        email: faker.internet.email(),
        hashedPassword: bcrypt.hashSync('password'),
        phone: faker.phone.phoneNumber('573-###-###'),
        admin: false,
        shirt_size: faker.helpers.arrayElement(['XS', 'S', 'M', 'L', 'XL', 'XXL']),
      },
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.notIn]: ['DemoUser', 'DemoAdmin'] }
    }, {});
  }
};
