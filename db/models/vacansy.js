const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Vacansy extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Candidate }) {
      this.hasMany(Candidate, { foreignKey: 'vacancy_id' }); // у вакансии много кандидатов
    }
  }
  Vacansy.init({
    title: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Vacansy',
  });
  return Vacansy;
};
