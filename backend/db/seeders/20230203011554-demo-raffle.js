'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Raffles', [
      {
      imageUrl: 'https://ibb.co/99wCqQ2',
      description: 'This is a description of a grill for grilling grilled foods.',
      donor: 'Schrimpf Landscaping Incorporated'
      },
      {
        imageUrl: 'https://ibb.co/h13b2w0',
        description: 'This is a description of tickets to a St. Louis Cardinals baseball game.',
        donor: "Rod's Big Ole Fish"
      },
      {
      imageUrl: 'https://ibb.co/99wCqQ2',
      description: 'This is another description of a grill for grilling grilled foods.',
      donor: 'Schrimpf Landscaping Incorporated'
      },
      {
        imageUrl: 'https://ibb.co/h13b2w0',
        description: 'This is another description of tickets to a St. Louis Cardinals baseball game.',
        donor: "Rod's Big Ole Fish"
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Raffles', null, {});
  }
};
