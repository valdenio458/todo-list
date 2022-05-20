'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('todolists', [
      {
        id_user: 1,
        title: 'Todo list 1',
        description: 'Description 1',
        status: true,
      },
      {
        id_user: 2,
        title: 'Todo list 2',
        description: 'Description 2',
        status: false,
      },
    ], {})
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('todolists', null, {});
  }
};
