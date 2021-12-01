'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Scores', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      teamone: {
        type: Sequelize.STRING
      },
      teamtwo: {
        type: Sequelize.STRING
      },
      teamonescore: {
        type: Sequelize.INTEGER
      },
      teamtwoscore: {
        type: Sequelize.INTEGER
      },
      wp: {
        type: Sequelize.STRING
      },
      lp: {
        type: Sequelize.STRING
      },
      save: {
        type: Sequelize.STRING
      },
      series: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Scores');
  }
};