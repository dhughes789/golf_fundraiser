'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Teams', [
        {
          name: 'Driving me nuts',
          tee_time_id: 1,
          payment: 1.0,
          score: 62,
          standing_id: 1,
        },
        {
          name: 'A Stroke of Luck',
          tee_time_id: 1,
          payment: 1.0,
          score: 63,
          standing_id: 2,
        },
        {
          name: 'Angry Birdies',
          tee_time_id: 1,
          payment: 1.0,
          score: 65,
          standing_id: 3,
        },
        {
          name: 'Eagle Eye',
          tee_time_id: 1,
          payment: 1.0,
          score: 69,
          standing_id: 4,
        },
        {
          name: 'Ball Whackers',
          tee_time_id: 1,
          payment: 1.0,
          score: 70,
          standing_id: 5,
        },
        {
          name: 'Beer, Wings, and Swings',
          tee_time_id: 1,
          payment: 1.0,
          score: 71,
          standing_id: 6,
        },
        {
          name: 'Chicks N Sticks',
          tee_time_id: 1,
          payment: 1.0,
          score: 73,
          standing_id: 7,
        },
        {
          name: 'Divot And Goliath',
          tee_time_id: 1,
          payment: 1.0,
          score: 74,
          standing_id: 8,
        },
        {
          name: 'Grip It And Sip It',
          tee_time_id: 1,
          payment: 1.0,
          score: 75,
          standing_id: 9,
        },
        {
          name: 'The Mulligan Mafia',
          tee_time_id: 1,
          payment: 1.0,
          score: 80,
          standing_id: null,
        },
        {
          name: 'The PowerPutt Girls',
          tee_time_id: 2,
          payment: 1.0,
          score: null,
          standing_id: null,
        },
        {
          name: 'The Sod Slayers',
          tee_time_id: 2,
          payment: 0.25,
          score: null,
          standing_id: null,
        },
        {
          name: 'The Bunker Babes',
          tee_time_id: 2,
          payment: 0,
          score: null,
          standing_id: null,
        },
        {
          name: 'Puff Caddie',
          tee_time_id: 2,
          payment: 1.0,
          score: null,
          standing_id: null,
        },
        {
          name: 'Putter Fingers',
          tee_time_id: 2,
          payment: 1.0,
          score: null,
          standing_id: null,
        },
        {
          name: 'DIVOT! DIVOT!',
          tee_time_id: 2,
          payment: 0.25,
          score: null,
          standing_id: null,
        },
        {
          name: 'Swingin in the Rain',
          tee_time_id: 2,
          payment: 0.25,
          score: null,
          standing_id: null,
        },
        {
          name: 'Tee-rific',
          tee_time_id: 2,
          payment: 1.0,
          score: null,
          standing_id: null,
        },
        {
          name: 'Fore-fathers',
          tee_time_id: 2,
          payment: 0.75,
          score: null,
          standing_id: null,
        },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Teams', null, {});
  }
};
