/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    const Vacansy = [
      {
        title: 'Manager',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Developer',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'UI designer',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'SEO-специалист',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Винодел',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'IT-менеджер',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Event-менеджер',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Бухгалтер',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    const Stage = [
      {
        title: 'В работе',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'У заказчика',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Интервью',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Выставлен оффер',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Выход на работу',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Отказ',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    await queryInterface.bulkInsert('Vacansies', Vacansy, {});
    await queryInterface.bulkInsert('Stages', Stage, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Vacansies', null, {});
    await queryInterface.bulkDelete('Stages', null, {});
  },
};
