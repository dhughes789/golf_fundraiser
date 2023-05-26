'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Standings', [
      {
        tee_time_id: 1,
        flight: 'A',
        position: 1,
        prize: 'Trampoline',
      },
      {
        tee_time_id: 1,
        flight: 'A',
        position: 2,
        prize: 'Smaller Trampoline',
      },
      {
        tee_time_id: 1,
        flight: 'A',
        position: 3,
        prize: 'Small Trampoline',
      },
      {
        tee_time_id: 1,
        flight: 'B',
        position: 1,
        prize: 'Iron Gym',
      },
      {
        tee_time_id: 1,
        flight: 'B',
        position: 2,
        prize: 'Ankle Weights',
      },
      {
        tee_time_id: 1,
        flight: 'B',
        position: 3,
        prize: 'Shaker Cup',
      },
      {
        tee_time_id: 1,
        flight: 'C',
        position: 1,
        prize: 'Big League Chew',
      },
      {
        tee_time_id: 1,
        flight: 'C',
        position: 2,
        prize: 'Double Bubble',
      },
      {
        tee_time_id: 1,
        flight: 'C',
        position: 3,
        prize: 'Juicy Fruit',
      },
      {
        tee_time_id: 2,
        flight: 'A',
        position: 1,
        prize: 'Trampoline',
      },
      {
        tee_time_id: 2,
        flight: 'A',
        position: 2,
        prize: 'Smaller Trampoline',
      },
      {
        tee_time_id: 2,
        flight: 'A',
        position: 3,
        prize: 'Small Trampoline',
      },
      {
        tee_time_id: 2,
        flight: 'B',
        position: 1,
        prize: 'Iron Gym',
      },
      {
        tee_time_id: 2,
        flight: 'B',
        position: 2,
        prize: 'Ankle Weights',
      },
      {
        tee_time_id: 2,
        flight: 'B',
        position: 3,
        prize: 'Shaker Cup',
      },
      {
        tee_time_id: 2,
        flight: 'C',
        position: 1,
        prize: 'Big League Chew',
      },
      {
        tee_time_id: 2,
        flight: 'C',
        position: 2,
        prize: 'Double Bubble',
      },
      {
        tee_time_id: 2,
        flight: 'C',
        position: 3,
        prize: 'Dinner with Dant (You pay)',
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Standings', null, {});
  }
};
