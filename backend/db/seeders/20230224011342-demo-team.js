'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Teams', [
        {
          name: 'Driving me nuts',
          tee_time_id: 5,
          payment: 1.0,
          score: 62,
          standing_id: 57,
        },
        {
          name: 'A Stroke of Luck',
          tee_time_id: 5,
          payment: 1.0,
          score: 63,
          standing_id: 58,
        },
        {
          name: 'Angry Birdies',
          tee_time_id: 5,
          payment: 1.0,
          score: 65,
          standing_id: 59,
        },
        {
          name: 'Eagle Eye',
          tee_time_id: 5,
          payment: 1.0,
          score: 69,
          standing_id: 60,
        },
        {
          name: 'Ball Whackers',
          tee_time_id: 5,
          payment: 1.0,
          score: 70,
          standing_id: 61,
        },
        {
          name: 'Beer, Wings, and Swings',
          tee_time_id: 5,
          payment: 1.0,
          score: 71,
          standing_id: 62,
        },
        {
          name: 'Chicks N Sticks',
          tee_time_id: 5,
          payment: 1.0,
          score: 73,
          standing_id: 63,
        },
        {
          name: 'Divot And Goliath',
          tee_time_id: 5,
          payment: 1.0,
          score: 74,
          standing_id: 64,
        },
        {
          name: 'Grip It And Sip It',
          tee_time_id: 5,
          payment: 1.0,
          score: 75,
          standing_id: 65,
        },
        {
          name: 'The Mulligan Mafia',
          tee_time_id: 5,
          payment: 1.0,
          score: 80,
          standing_id: null,
        },
        {
          name: 'The PowerPutt Girls',
          tee_time_id: 6,
          payment: 1.0,
          score: null,
          standing_id: null,
        },
        {
          name: 'The Sod Slayers',
          tee_time_id: 6,
          payment: 0.25,
          score: null,
          standing_id: null,
        },
        {
          name: 'The Bunker Babes',
          tee_time_id: 6,
          payment: 0,
          score: null,
          standing_id: null,
        },
        {
          name: 'Puff Caddie',
          tee_time_id: 6,
          payment: 1.0,
          score: null,
          standing_id: null,
        },
        {
          name: 'Putter Fingers',
          tee_time_id: 6,
          payment: 1.0,
          score: null,
          standing_id: null,
        },
        {
          name: 'DIVOT! DIVOT!',
          tee_time_id: 6,
          payment: 0.25,
          score: null,
          standing_id: null,
        },
        {
          name: 'Swingin in the Rain',
          tee_time_id: 6,
          payment: 0.25,
          score: null,
          standing_id: null,
        },
        {
          name: 'Tee-rific',
          tee_time_id: 6,
          payment: 1.0,
          score: null,
          standing_id: null,
        },
        {
          name: 'Fore-fathers',
          tee_time_id: 6,
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
