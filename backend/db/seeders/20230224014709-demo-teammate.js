'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Teammates', [
        {
          team_id: 1,
          prospect_id: null,
          user_id: 27,
          captain: true,
          paid: true,
        },
        {
          team_id: 1,
          prospect_id: null,
          user_id: 29,
          captain: false,
          paid: true,
        },
        {
          team_id: 1,
          prospect_id: null,
          user_id: 30,
          captain: false,
          paid: true,
        },
        {
          team_id: 1,
          prospect_id: null,
          user_id: 31,
          captain: false,
          paid: true,
        },
        {
          team_id: 2,
          prospect_id: null,
          user_id: 32,
          captain: true,
          paid: true,
        },
        {
          team_id: 2,
          prospect_id: null,
          user_id: 33,
          captain: false,
          paid: true,
        },
        {
          team_id: 2,
          prospect_id: null,
          user_id: 34,
          captain: false,
          paid: true,
        },
        {
          team_id: 2,
          prospect_id: 13,
          user_id: null,
          captain: false,
          paid: true,
        },
        {
          team_id: 3,
          prospect_id: null,
          user_id: 35,
          captain: true,
          paid: true,
        },
        {
          team_id: 3,
          prospect_id: null,
          user_id: 36,
          captain: false,
          paid: true,
        },
        {
          team_id: 3,
          prospect_id: null,
          user_id: 37,
          captain: false,
          paid: true,
        },
        {
          team_id: 3,
          prospect_id: 14,
          user_id: null,
          captain: false,
          paid: true,
        },
        {
          team_id: 4,
          prospect_id: null,
          user_id: 38,
          captain: true,
          paid: true,
        },
        {
          team_id: 4,
          prospect_id: null,
          user_id: 39,
          captain: false,
          paid: true,
        },
        {
          team_id: 4,
          prospect_id: null,
          user_id: 40,
          captain: false,
          paid: true,
        },
        {
          team_id: 4,
          prospect_id: 15,
          user_id: null,
          captain: false,
          paid: true,
        },
        {
          team_id: 5,
          prospect_id: null,
          user_id: 41,
          captain: true,
          paid: true,
        },
        {
          team_id: 5,
          prospect_id: null,
          user_id: 42,
          captain: false,
          paid: true,
        },
        {
          team_id: 5,
          prospect_id: null,
          user_id: 43,
          captain: false,
          paid: true,
        },
        {
          team_id: 5,
          prospect_id: 16,
          user_id: null,
          captain: false,
          paid: true,
        },
        {
          team_id: 6,
          prospect_id: null,
          user_id: 44,
          captain: true,
          paid: true,
        },
        {
          team_id: 6,
          prospect_id: null,
          user_id: 45,
          captain: false,
          paid: true,
        },
        {
          team_id: 6,
          prospect_id: 17,
          user_id: null,
          captain: false,
          paid: true,
        },
        {
          team_id: 6,
          prospect_id: 18,
          user_id: null,
          captain: false,
          paid: true,
        },
        {
          team_id: 7,
          prospect_id: null,
          user_id: 46,
          captain: true,
          paid: true,
        },
        {
          team_id: 7,
          prospect_id: null,
          user_id: 47,
          captain: false,
          paid: true,
        },
        {
          team_id: 7,
          prospect_id: 19,
          user_id: null,
          captain: false,
          paid: true,
        },
        {
          team_id: 7,
          prospect_id: 20,
          user_id: null,
          captain: false,
          paid: true,
        },
        {
          team_id: 8,
          prospect_id: null,
          user_id: 48,
          captain: true,
          paid: true,
        },
        {
          team_id: 8,
          prospect_id: 21,
          user_id: null,
          captain: false,
          paid: true,
        },
        {
          team_id: 8,
          prospect_id: 22,
          user_id: null,
          captain: false,
          paid: true,
        },
        {
          team_id: 8,
          prospect_id: 23,
          user_id: null,
          captain: false,
          paid: true,
        },
        {
          team_id: 9,
          prospect_id: null,
          user_id: 48,
          captain: true,
          paid: true,
        },
        {
          team_id: 9,
          prospect_id: null,
          user_id: 49,
          captain: false,
          paid: true,
        },
        {
          team_id: 9,
          prospect_id: null,
          user_id: 50,
          captain: false,
          paid: true,
        },
        {
          team_id: 9,
          prospect_id: 24,
          user_id: null,
          captain: false,
          paid: true,
        }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Teammates', null, {});
  
  }
};