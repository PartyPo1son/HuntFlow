const { faker } = require('@faker-js/faker');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    function getRandomInt(max) {
      return Math.floor(Math.random() * max+1);
    }
    const candidates = [];
    for (let i = 0; i < 50; i++) {
      candidates.push({
        first_name: faker.name.firstName(),
        last_name: faker.name.firstName(),
        age: getRandomInt(55),
        city: faker.address.city(),
        vacancy_id: getRandomInt(6),
        stage_id: getRandomInt(4),
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }

    await queryInterface.bulkInsert('Candidates', candidates, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Candidates', null, {});
  },
};
