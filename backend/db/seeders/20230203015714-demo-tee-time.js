'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Tee_times', [{
        course: 'Meadow Lake Acres Country Club',
        time_slot: 'AM',
        date: '2023-05-10',
        capacity: 50,    
      },
      {
        course: 'Meadow Lake Acres Country Club',
        time_slot: 'PM',
        date: '2023-05-10',
        capacity: 50,    
      },
      {
        course: 'Railwood Country Club',
        time_slot: 'AM',
        date: '2023-05-10',
        capacity: 50,    
      },
      {
        course: 'Railwood Country Club',
        time_slot: 'PM',
        date: '2023-05-10',
        capacity: 50,    
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkDelete('Tee_times', null, {});
  }
};
