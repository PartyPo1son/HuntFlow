/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Results', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      candidate_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Candidates', // tableName
          key: 'id',
        },
      },
      stage_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Stages', // tableName
          key: 'id',
        },
      },
      isDone_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'IsDones', // tableName
          key: 'id',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Results');
  },
};
