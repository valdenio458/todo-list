'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('users', [
      {
        name: 'John',
        last_name: 'Doe',
        email: 'john_doe@email.com',
        password: '123456',
      },
      {
        name: 'Jane',
        last_name: 'Doe',
        email: 'jane_doe@email.com',
        password: '7891011',
      },
    ], {});
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
